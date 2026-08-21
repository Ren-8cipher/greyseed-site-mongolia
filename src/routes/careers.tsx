import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LeafMark } from "@/components/Leaf";
import { MobileBar, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { useLang } from "@/hooks/use-lang";
import { t } from "@/lib/content";
import { OFFICIAL_EMAIL, gmailLink, mailtoLink } from "@/lib/mail";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Ажлын байр | GREYSEED — Careers in Ulaanbaatar" },
      {
        name: "description",
        content:
          "GREYSEED-д ажиллах хүсэлтэй юу? Зөөгч, бармен, бариста, тогооч, менежерийн нээлттэй ажлын байр. Анкетаа онлайнаар илгээнэ үү.",
      },
      { property: "og:title", content: "Join the GREYSEED team" },
      {
        property: "og:description",
        content: "Open roles at GREYSEED Ulaanbaatar — apply online in a minute.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  const { lang, L } = useLang();
  const mn = lang === "mn";
  const c = t.careers;

  const positions = mn ? c.positions.mn : c.positions.en;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState<string>(positions[0]);
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [availability, setAvailability] = useState("");
  const [cvLink, setCvLink] = useState("");
  const [cover, setCover] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const lines: [string, string][] = [
    [mn ? "Нэр" : "Name", name],
    [mn ? "Утас" : "Phone", phone],
    [mn ? "И-мэйл" : "Email", email],
    [mn ? "Албан тушаал" : "Position", position],
    [mn ? "Нас" : "Age", age],
    [mn ? "Ажлын туршлага" : "Experience", experience],
    [mn ? "Боломжтой цаг" : "Availability", availability],
    ["CV", cvLink || "—"],
    [mn ? "Танилцуулга" : "Cover letter", cover],
  ];
  const subject = `GREYSEED — ${mn ? "Ажлын анкет" : "Job application"}: ${position} — ${name || "?"}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !experience.trim() || !availability.trim()) {
      setError(
        mn
          ? "Нэр, утас, туршлага, боломжтой цагаа бөглөнө үү."
          : "Please fill in your name, phone, experience and availability.",
      );
      return;
    }
    setError("");
    setSent(true);
    window.location.href = mailtoLink(subject, lines);
  };

  const label = "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground";
  const field =
    "mt-2 min-h-[52px] w-full rounded-xl border border-border bg-card px-4 text-base text-foreground outline-none transition-colors focus:border-gold";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />

      <section className="bg-black px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            {L(c.kicker)}
          </p>
          <h1 className="mt-3 text-4xl text-cream sm:text-5xl">{L(c.title)}</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream/70">{L(c.sub)}</p>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <LeafMark className="h-7 w-7 text-gold" />
              <h2 className="mt-3 text-xl text-foreground">{L(c.requirements)}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(mn ? c.reqList.mn : c.reqList.en).map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-xl text-foreground">{mn ? "Нээлттэй ажлын байр" : "Open roles"}</h2>
              <ul className="mt-4 grid gap-2">
                {positions.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground">
                {mn ? "Анкет хүлээн авах хаяг: " : "Applications go to: "}
                <span className="text-gold">{OFFICIAL_EMAIL}</span>
              </p>
            </div>
          </aside>

          <form onSubmit={submit} className="space-y-5">
            <div>
              <label className={label} htmlFor="cname">
                {L(c.name)}
              </label>
              <input
                id="cname"
                className={field}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={mn ? "Овог нэр" : "Full name"}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="cphone">
                  {L(c.phone)}
                </label>
                <input
                  id="cphone"
                  type="tel"
                  className={field}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9911-2233"
                />
              </div>
              <div>
                <label className={label} htmlFor="cemail">
                  {L(c.email)}
                </label>
                <input
                  id="cemail"
                  type="email"
                  className={field}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="cpos">
                  {L(c.position)}
                </label>
                <select
                  id="cpos"
                  className={field}
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  {positions.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="cage">
                  {mn ? "Нас" : "Age"}
                </label>
                <input
                  id="cage"
                  inputMode="numeric"
                  className={field}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="18+"
                />
              </div>
            </div>

            <div>
              <label className={label} htmlFor="cexp">
                {L(c.experience)}
              </label>
              <textarea
                id="cexp"
                className={`${field} min-h-[96px] py-3`}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder={
                  mn
                    ? "Ажилласан газар, хугацаа, үүрэг"
                    : "Where you worked, how long, your role"
                }
              />
            </div>

            <div>
              <label className={label} htmlFor="cavail">
                {L(c.availability)}
              </label>
              <input
                id="cavail"
                className={field}
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                placeholder={mn ? "Жишээ: Да–Ба, 16:00–23:00" : "e.g. Mon–Fri, 16:00–23:00"}
              />
            </div>

            <div>
              <label className={label} htmlFor="ccv">
                {mn ? "CV-ийн холбоос (Drive, PDF)" : "CV link (Drive, PDF)"}
              </label>
              <input
                id="ccv"
                className={field}
                value={cvLink}
                onChange={(e) => setCvLink(e.target.value)}
                placeholder="https://"
              />
            </div>

            <div>
              <label className={label} htmlFor="ccover">
                {L(c.cover)}
              </label>
              <textarea
                id="ccover"
                className={`${field} min-h-[110px] py-3`}
                value={cover}
                onChange={(e) => setCover(e.target.value)}
                placeholder={
                  mn ? "Яагаад GREYSEED-д ажиллахыг хүсэж байна вэ?" : "Why GREYSEED?"
                }
              />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-gold text-sm font-semibold tracking-wide text-navy-deep transition-transform active:scale-[0.99]"
            >
              {L(c.submit)}
            </button>

            {sent && (
              <div className="rounded-xl border border-gold/40 bg-secondary/60 px-4 py-4 text-sm text-secondary-foreground">
                <p>{L(c.sent)}</p>
                <a
                  href={gmailLink(subject, lines)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block font-semibold text-gold underline"
                >
                  {mn ? "Gmail-ээр илгээх" : "Send via Gmail instead"}
                </a>
              </div>
            )}
          </form>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
