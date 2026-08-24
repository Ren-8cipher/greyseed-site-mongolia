import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { LeafMark } from "@/components/Leaf";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { useLang } from "@/hooks/use-lang";
import {
  DEFAULT_SLOTS,
  dateKey,
  slotsFor,
  useAvailability,
  type Availability,
} from "@/lib/availability";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Админ — Захиалгын цаг тохируулах | GREYSEED" },
      {
        name: "description",
        content:
          "GREYSEED-ийн демо админ самбар: захиалга авах өдөр, цагийн хуваарийг тохируулна.",
      },
      { property: "og:title", content: "GREYSEED admin — availability" },
      {
        property: "og:description",
        content: "Demo admin panel to set which dates and hours accept reservations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { lang } = useLang();
  const mn = lang === "mn";
  const [branch, setBranch] = useState<string>(branches[0]!.name);
  const { availability, save, loaded } = useAvailability(branch);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [toast, setToast] = useState("");

  const key = date ? dateKey(date) : "";
  const daySlots = slotsFor(availability, date);
  const hasOverride = key in availability.overrides;

  const flash = (msg: string) => {
    setToast(msg);
    window.setTimeout(() => setToast(""), 2200);
  };

  const update = (next: Availability, msg: string) => {
    save(next);
    flash(msg);
  };

  const toggleDaySlot = (slot: string) => {
    if (!date) return;
    const current = daySlots;
    const next = current.includes(slot)
      ? current.filter((s) => s !== slot)
      : [...current, slot].sort();
    update(
      { ...availability, overrides: { ...availability.overrides, [key]: next } },
      mn ? "Хадгаллаа" : "Saved",
    );
  };

  const toggleDefaultSlot = (slot: string) => {
    const current = availability.defaultSlots;
    const next = current.includes(slot)
      ? current.filter((s) => s !== slot)
      : [...current, slot].sort();
    update({ ...availability, defaultSlots: next }, mn ? "Үндсэн хуваарь шинэчлэгдлээ" : "Default hours updated");
  };

  const closeDay = () => {
    if (!date) return;
    update(
      { ...availability, overrides: { ...availability.overrides, [key]: [] } },
      mn ? "Тухайн өдрийг хаалаа" : "Day closed",
    );
  };

  const resetDay = () => {
    if (!date) return;
    const next = { ...availability.overrides };
    delete next[key];
    update({ ...availability, overrides: next }, mn ? "Үндсэн хуваарь руу буцаалаа" : "Reset to default");
  };

  const label = "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground";
  const slotBtn = (on: boolean) =>
    `min-h-[44px] rounded-lg border text-sm transition-colors ${
      on
        ? "border-gold bg-gold text-navy-deep"
        : "border-border bg-card text-muted-foreground hover:border-gold/40"
    }`;

  const overrideList = Object.entries(availability.overrides).sort(([a], [b]) =>
    a.localeCompare(b),
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />

      <section className="bg-black px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <LeafMark className="mx-auto h-8 w-8 text-gold" />
          <h1 className="mt-4 text-4xl text-cream sm:text-5xl">
            {mn ? "Админ самбар" : "Admin panel"}
          </h1>
          <p className="mt-3 text-sm text-cream/70">
            {mn
              ? "Захиалга авах өдөр, цагаа энд тохируулна. Ширээ захиалах хуудас үүнийг шууд ашиглана. (Демо — энэ төхөөрөмж дээр хадгалагдана.)"
              : "Set which dates and hours accept bookings. The reservation page uses this instantly. (Demo — stored on this device.)"}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <div>
            <p className={label}>{mn ? "Өдөр сонгох" : "Pick a date"}</p>
            <div className="shadow-card-soft mt-2 rounded-2xl border border-border bg-card p-2">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date(new Date().setHours(0, 0, 0, 0)) }}
                className="mx-auto"
              />
            </div>

            <div className="mt-6">
              <p className={label}>{mn ? "Үндсэн цагийн хуваарь" : "Default hours"}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {mn
                  ? "Тусгай тохиргоогүй бүх өдөрт үйлчилнэ."
                  : "Applies to every date without a specific override."}
              </p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {DEFAULT_SLOTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleDefaultSlot(s)}
                    className={slotBtn(availability.defaultSlots.includes(s))}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className={label}>
                {mn ? "Сонгосон өдрийн цаг" : "Hours for the selected date"}
              </p>
              <p className="mt-1 font-serif text-xl text-foreground">{key || "—"}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {hasOverride
                  ? mn
                    ? "Тусгай тохиргоотой өдөр"
                    : "Custom day"
                  : mn
                    ? "Үндсэн хуваарь ашиглаж байна"
                    : "Using the default hours"}
              </p>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {DEFAULT_SLOTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleDaySlot(s)}
                    className={slotBtn(daySlots.includes(s))}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={closeDay}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-destructive/50 px-6 text-sm font-semibold text-destructive"
                >
                  {mn ? "Энэ өдрийг хаах" : "Close this day"}
                </button>
                <button
                  type="button"
                  onClick={resetDay}
                  className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-foreground"
                >
                  {mn ? "Үндсэн рүү буцаах" : "Reset to default"}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5">
              <p className={label}>{mn ? "Тусгай өдрүүд" : "Custom days"}</p>
              {!loaded ? null : overrideList.length === 0 ? (
                <p className="mt-3 text-sm text-muted-foreground">
                  {mn ? "Одоогоор байхгүй." : "None yet."}
                </p>
              ) : (
                <ul className="mt-3 space-y-2">
                  {overrideList.map(([d, slots]) => (
                    <li
                      key={d}
                      className="flex items-start justify-between gap-4 border-b border-border pb-2 text-sm"
                    >
                      <span className="font-medium text-foreground">{d}</span>
                      <span className="text-right text-muted-foreground">
                        {slots.length === 0
                          ? mn
                            ? "Хаалттай"
                            : "Closed"
                          : slots.join(", ")}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {toast && (
              <p className="rounded-xl border border-gold/40 bg-secondary/60 px-4 py-3 text-center text-sm text-secondary-foreground">
                {toast}
              </p>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
