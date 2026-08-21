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

function read(): Availability {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return EMPTY_AVAILABILITY;
    const parsed = JSON.parse(raw) as Partial<Availability>;
    return {
      defaultSlots: Array.isArray(parsed.defaultSlots) ? parsed.defaultSlots : DEFAULT_SLOTS,
      overrides: parsed.overrides && typeof parsed.overrides === "object" ? parsed.overrides : {},
    };
  } catch {
    return EMPTY_AVAILABILITY;
  }
}

export function slotsFor(a: Availability, d: Date | undefined) {
  if (!d) return [];
  const key = dateKey(d);
  return key in a.overrides ? (a.overrides[key] ?? []) : a.defaultSlots;
}

export function useAvailability() {
  const [availability, setAvailability] = useState<Availability>(EMPTY_AVAILABILITY);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setAvailability(read());
    setLoaded(true);
    const onChange = () => setAvailability(read());
    window.addEventListener(EVT, onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener(EVT, onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const save = useCallback((next: Availability) => {
    setAvailability(next);
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(EVT));
  }, []);

  return { availability, save, loaded };
}
