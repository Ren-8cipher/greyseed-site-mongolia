import { useCallback, useEffect, useState } from "react";

export const DEFAULT_SLOTS = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
];

export type Availability = {
  /** Slots offered on any date that has no explicit override. */
  defaultSlots: string[];
  /** yyyy-MM-dd -> slots offered that day (empty array = fully closed). */
  overrides: Record<string, string[]>;
};

/** Availability per branch name. */
export type AvailabilityStore = Record<string, Availability>;

export const EMPTY_AVAILABILITY: Availability = {
  defaultSlots: DEFAULT_SLOTS,
  overrides: {},
};

const KEY = "greyseed-availability";
const EVT = "greyseed-availability-change";

export function dateKey(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function normalize(value: unknown): Availability {
  const parsed = (value ?? {}) as Partial<Availability>;
  return {
    defaultSlots: Array.isArray(parsed.defaultSlots) ? parsed.defaultSlots : DEFAULT_SLOTS,
    overrides:
      parsed.overrides && typeof parsed.overrides === "object" ? parsed.overrides : {},
  };
}

function readStore(): AvailabilityStore {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    // Legacy single-branch shape -> ignore branch keys, treat as shared base.
    if ("defaultSlots" in parsed || "overrides" in parsed) {
      return { __legacy: normalize(parsed) };
    }
    const store: AvailabilityStore = {};
    for (const [branch, value] of Object.entries(parsed)) store[branch] = normalize(value);
    return store;
  } catch {
    return {};
  }
}

function branchAvailability(store: AvailabilityStore, branch: string): Availability {
  return store[branch] ?? store["__legacy"] ?? EMPTY_AVAILABILITY;
}

export function slotsFor(a: Availability, d: Date | undefined) {
  if (!d) return [];
  const key = dateKey(d);
  return key in a.overrides ? (a.overrides[key] ?? []) : a.defaultSlots;
}

/** Availability for a single branch, with a setter that only touches that branch. */
export function useAvailability(branch: string) {
  const [store, setStore] = useState<AvailabilityStore>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setStore(readStore());
    setLoaded(true);
    const onChange = () => setStore(readStore());
    window.addEventListener(EVT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const save = useCallback(
    (next: Availability) => {
      setStore((prev) => {
        const merged: AvailabilityStore = { ...prev, [branch]: next };
        delete merged["__legacy"];
        window.localStorage.setItem(KEY, JSON.stringify(merged));
        window.dispatchEvent(new Event(EVT));
        return merged;
      });
    },
    [branch],
  );

  return { availability: branchAvailability(store, branch), save, loaded };
}
