import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { LeafMark } from "@/components/Leaf";
import { MobileBar, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { useLang } from "@/hooks/use-lang";
import { branches } from "@/lib/content";

const times = [
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

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Ширээ захиалах | GREYSEED" },
      {
        name: "description",
        content:
          "GREYSEED-д ширээгээ онлайнаар захиалаарай. Салбар, огноо, цаг, зочдын тоогоо сонгоод баталгаажуулна уу.",
      },
      { property: "og:title", content: "Reserve a table at GREYSEED" },
      {
        property: "og:description",
        content: "Pick a branch, date, time and party size — we'll confirm by phone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reserve" }],
  }),
  component: ReservePage,
});

function ReservePage() {
  const { lang } = useLang();
  const mn = lang === "mn";

  const [branch, setBranch] = useState(branches[0].name);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState("19:00");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const chosen = branches.find((b) => b.name === branch)!;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !date) {
      setError(
        mn
          ? "Нэр, утасны дугаар, огноогоо бөглөнө үү."
          : "Please fill in your name, phone number and date.",
      );
      return;
    }
    setError("");
    setDone(true);
  };

  const label = "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground";
  const field =
    "mt-2 min-h-[52px] w-full rounded-xl border border-border bg-card px-4 text-base text-foreground outline-none transition-colors focus:border-gold";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />

      <section className="bg-navy-deep px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <LeafMark className="mx-auto h-8 w-8 text-gold" />
          <h1 className="mt-4 text-4xl text-cream sm:text-5xl">
            {mn ? "Ширээ захиалах" : "Reserve a table"}
          </h1>
          <p className="mt-3 text-sm text-cream/70">
            {mn
              ? "Өдөр бүр 12:00–23:00. Захиалгыг утсаар баталгаажуулна."
              : "Open daily 12:00–23:00. We confirm every booking by phone."}
          </p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {done ? (
            <div className="shadow-card-soft rounded-2xl border border-gold/40 bg-card p-7 text-center">
              <LeafMark className="mx-auto h-8 w-8 text-gold" />
              <h2 className="mt-4 text-2xl text-navy">
                {mn ? "Захиалга хүлээн авлаа" : "Request received"}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                {mn
                  ? "Баярлалаа! Захиалгыг эцэслэн баталгаажуулахын тулд доорх дугаар руу залгаж, эсвэл бидний залгахыг хүлээнэ үү."
                  : "Thank you! To finalise the booking, call the branch below or wait for our call."}
              </p>
              <dl className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm">
                {[
                  [mn ? "Салбар" : "Branch", branch],
                  [mn ? "Огноо" : "Date", date ? format(date, "yyyy-MM-dd") : "—"],
                  [mn ? "Цаг" : "Time", time],
                  [mn ? "Зочдын тоо" : "Guests", String(guests)],
                  [mn ? "Нэр" : "Name", name],
                  [mn ? "Утас" : "Phone", phone],
                  ...(notes ? [[mn ? "Тэмдэглэл" : "Notes", notes]] : []),
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-medium text-navy">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={`tel:${chosen.tel}`}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-navy-deep"
                >
                  ☎ {chosen.phone}
                </a>
                <button
                  onClick={() => setDone(false)}
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-border px-8 text-sm font-semibold text-navy"
                >
                  {mn ? "Захиалгаа засах" : "Edit booking"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className={label}>{mn ? "Огноо сонгох" : "Choose a date"}</p>
                <div className="shadow-card-soft mt-2 rounded-2xl border border-border bg-card p-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={{ before: new Date() }}
                    className="mx-auto"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {date
                    ? `${mn ? "Сонгосон" : "Selected"}: ${format(date, "yyyy-MM-dd")}`
                    : mn
                      ? "Огноо сонгоно уу"
                      : "Pick a date"}
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className={label}>{mn ? "Салбар" : "Branch"}</p>
                  <div className="mt-2 grid gap-2">
                    {branches.map((b) => (
                      <button
                        key={b.name}
                        type="button"
                        onClick={() => setBranch(b.name)}
                        className={`min-h-[56px] rounded-xl border px-4 text-left transition-colors ${
                          branch === b.name
                            ? "border-gold bg-secondary/60"
                            : "border-border bg-card hover:border-navy/30"
                        }`}
                      >
                        <span className="block text-sm font-semibold tracking-wide text-navy">
                          {b.name}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {mn ? b.addrMn : b.addrEn}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className={label}>{mn ? "Цаг" : "Time"}</p>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {times.map((tm) => (
                      <button
                        key={tm}
                        type="button"
                        onClick={() => setTime(tm)}
                        className={`min-h-[44px] rounded-lg border text-sm transition-colors ${
                          time === tm
                            ? "border-navy bg-navy text-primary-foreground"
                            : "border-border bg-card text-muted-foreground hover:border-navy/30"
                        }`}
                      >
                        {tm}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className={label}>{mn ? "Зочдын тоо" : "Guests"}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="grid h-12 w-12 place-items-center rounded-full border border-border text-xl text-navy"
                      aria-label="minus"
                    >
                      −
                    </button>
                    <span className="min-w-[3ch] text-center font-serif text-2xl text-navy">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(20, g + 1))}
                      className="grid h-12 w-12 place-items-center rounded-full border border-border text-xl text-navy"
                      aria-label="plus"
                    >
                      +
                    </button>
                    <span className="text-xs text-muted-foreground">
                      {mn
                        ? "VIP тасалгаа (6–10 хүн) зөвхөн Minister салбарт"
                        : "VIP room (6–10) at the Minister branch only"}
                    </span>
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="name">
                    {mn ? "Нэр" : "Name"}
                  </label>
                  <input
                    id="name"
                    className={field}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={mn ? "Таны нэр" : "Your name"}
                  />
                </div>

                <div>
                  <label className={label} htmlFor="phone">
                    {mn ? "Утасны дугаар" : "Phone number"}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={field}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="9911-2233"
                  />
                </div>

                <div>
                  <label className={label} htmlFor="notes">
                    {mn ? "Нэмэлт хүсэлт" : "Special request"}
                  </label>
                  <textarea
                    id="notes"
                    className={`${field} min-h-[96px] py-3`}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={mn ? "Төрсөн өдөр, суудлын хүсэлт..." : "Birthday, seating..."}
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <button
                  type="submit"
                  className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-gold text-sm font-semibold tracking-wide text-navy-deep transition-transform active:scale-[0.99]"
                >
                  {mn ? "Захиалга илгээх" : "Send reservation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
