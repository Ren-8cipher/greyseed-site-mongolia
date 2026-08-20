import { createFileRoute, Link } from "@tanstack/react-router";
import { LeafDivider, LeafMark } from "@/components/Leaf";
import { MobileBar, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { useLang } from "@/hooks/use-lang";
import { useReveal } from "@/hooks/use-reveal";
import { branches, dishes, reviews, t } from "@/lib/content";


import interior from "@/assets/greyseed-interior.png.asset.json";
import ribeye from "@/assets/ribeye.jpg.asset.json";
import burger from "@/assets/burger.jpg.asset.json";
import salmon from "@/assets/salmon.jpg.asset.json";
import steaksalad from "@/assets/steaksalad.jpg.asset.json";
import platter from "@/assets/platter.jpg.asset.json";
import beetroot from "@/assets/beetroot.jpg.asset.json";
import wine from "@/assets/wine.jpg.asset.json";
import dining from "@/assets/dining.jpg.asset.json";
import bar from "@/assets/bar.jpg.asset.json";
import plants from "@/assets/plants.jpg.asset.json";

const dishImg: Record<string, string> = {
  ribeye: ribeye.url,
  burger: burger.url,
  salmon: salmon.url,
  steaksalad: steaksalad.url,
  platter: platter.url,
  beetroot: beetroot.url,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GREYSEED — Дэлхийн амтыг нэг дор | Улаанбаатар" },
      {
        name: "description",
        content:
          "GREYSEED — Улаанбаатарын casual dining & lifestyle ресторан. Дэлхийн амтат цэс, өдөр бүр 12:00–23:00. 2 салбар: GREYSEED 100, GREYSEED MINISTER.",
      },
      { property: "og:title", content: "GREYSEED — Дэлхийн амтыг нэг дор" },
      {
        property: "og:description",
        content:
          "Globally inspired dining, all day. Two branches in Ulaanbaatar, open daily 12:00–23:00.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="5 / 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-gold" aria-hidden="true">
          <path d="M10 1.6l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.6 4.9 17.3l1-5.7-4.1-4 5.7-.8z" />
        </svg>
      ))}
    </span>
  );
}

function SectionHead({
  kicker,
  title,
  light = false,
}: {
  kicker: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div data-reveal className="reveal mx-auto max-w-2xl text-center">
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${light ? "text-gold" : "text-gold"}`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-3 text-3xl leading-tight sm:text-4xl ${light ? "text-cream" : "text-cream"}`}
      >
        {title}
      </h2>
    </div>
  );
}

function Index() {
  const { lang, L } = useLang();
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />



      {/* HERO */}
      <section id="top" className="relative min-h-[92svh] overflow-hidden">
        <img
          src={interior.url}
          alt={
            lang === "mn"
              ? "GREYSEED рестораны дотоод орчин"
              : "GREYSEED restaurant interior at night"
          }
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] sm:object-center"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-32 pt-28 sm:px-6 sm:pb-36 lg:justify-center lg:pb-28">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              {L(t.hero.eyebrow)}
            </p>
            <h1 className="mt-4 text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              {L(t.hero.title)}
            </h1>
            <p className="mt-4 text-base text-cream/80 sm:text-lg">{L(t.hero.sub)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold tracking-wide text-navy-deep transition-transform active:scale-[0.98]"
              >
                {L(t.hero.menu)}
              </Link>
              <Link
                to="/reserve"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-cream/40 px-8 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-cream/10"
              >
                {L(t.hero.reserve)}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead kicker={L(t.about.kicker)} title={L(t.about.title)} />
          <p
            data-reveal
            className="reveal mx-auto mt-6 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >
            {L(t.about.body)}
          </p>
          <ul
            data-reveal
            className="reveal mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 text-center"
          >
            {t.about.stats.map((s) => (
              <li key={s.v} className="rounded-xl border border-border bg-card px-2 py-5">
                <p className="font-serif text-lg text-foreground sm:text-xl">{s.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {L(s.l)}
                </p>
              </li>
            ))}
          </ul>

          <div
            data-reveal
            className="reveal no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0"
          >
            {[
              { src: dining.url, alt: lang === "mn" ? "Хоолны танхим" : "Dining area" },
              { src: bar.url, alt: lang === "mn" ? "Бар" : "Bar counter" },
              { src: plants.url, alt: lang === "mn" ? "Ногоон хана" : "Plant wall" },
            ].map((img) => (
              <figure
                key={img.src}
                className="relative w-[78vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-auto"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-56 w-full object-cover sm:h-64"
                />
                <span className="absolute inset-0 bg-navy-deep/20" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <LeafDivider />

      {/* DISHES */}
      <section id="dishes" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead kicker={L(t.dishes.kicker)} title={L(t.dishes.title)} />
          <div
            data-reveal
            className="reveal no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0 lg:grid-cols-3"
          >
            {dishes.map((d) => (
              <article
                key={d.en}
                className="shadow-card-soft w-[74vw] shrink-0 snap-center overflow-hidden rounded-2xl bg-card sm:w-auto"
              >
                <img
                  src={dishImg[d.img]}
                  alt={lang === "mn" ? d.mn : d.en}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-56 w-full object-cover sm:h-64"
                />
                <div className="p-5">
                  <h3 className="text-lg text-foreground">{lang === "mn" ? d.mn : d.en}</h3>
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                    {lang === "mn" ? d.en : d.mn}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {lang === "mn" ? d.descMn : d.descEn}
                  </p>
                  <p className="mt-4 font-serif text-base text-gold">{d.price}</p>
                </div>
              </article>
            ))}
          </div>
          <div data-reveal className="reveal mt-10 text-center">
            <Link
              to="/menu"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold tracking-wide text-navy-deep"
            >
              {L(t.dishes.cta)}
            </Link>
          </div>

        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-navy-deep px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead kicker={L(t.reviews.kicker)} title={L(t.reviews.title)} light />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {reviews.map((r) => (
              <article
                key={r.name}
                data-reveal
                className="reveal rounded-2xl bg-cream/95 p-5 sm:p-6"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-serif text-sm text-cream">
                    {r.name.charAt(0).toUpperCase()}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-navy">{r.name}</p>
                    {r.guide && (
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
                          {L(t.reviews.localGuide)}
                        </span>{" "}
                        · {r.count} {lang === "mn" ? "үнэлгээ" : "reviews"}
                      </p>
                    )}
                  </div>
                  <LeafMark className="h-5 w-5 shrink-0 text-gold" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Stars />
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {L(t.reviews.source)}
                  </span>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                  {lang === "mn" ? r.mn : r.en}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-black px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead kicker={L(t.gallery.kicker)} title={L(t.gallery.title)} light />

          <div
            data-reveal
            className="reveal no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0"
          >
            {[
              { src: wine.url, alt: lang === "mn" ? "Дарсны хана" : "Wine wall", tall: true },
              { src: interior.url, alt: lang === "mn" ? "Үүдний танхим" : "Entrance", tall: false },
              { src: dining.url, alt: lang === "mn" ? "Хоолны танхим" : "Dining room", tall: false },
              { src: plants.url, alt: lang === "mn" ? "Ногоон хана" : "Plant wall", tall: true },
              { src: bar.url, alt: lang === "mn" ? "Бар" : "Bar", tall: false },
            ].map((g, i) => (
              <figure
                key={i}
                className={`relative w-[72vw] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-auto ${
                  g.tall ? "sm:row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover ${g.tall ? "h-64 sm:h-full sm:min-h-[22rem]" : "h-64 sm:h-44"}`}
                />
                <span className="absolute inset-0 ring-1 ring-inset ring-cream/10" />

              </figure>
            ))}
          </div>
        </div>
      </section>

      <LeafDivider />

      {/* LOCATIONS */}
      <section id="locations" className="px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead kicker={L(t.locations.kicker)} title={L(t.locations.title)} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {branches.map((b) => (
              <article
                key={b.name}
                data-reveal
                className="reveal overflow-hidden rounded-2xl border border-border bg-card"
              >
                <iframe
                  title={`${b.name} — Google Maps`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(b.map)}&hl=${lang}&z=16&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full border-0 sm:h-64"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl tracking-[0.12em] text-foreground">{b.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {lang === "mn" ? b.addrMn : b.addrEn}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{L(t.locations.hours)}</p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${b.tel}`}
                      className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-navy-deep"
                    >
                      ☎ {b.phone} · {L(t.locations.call)}
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.map)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full border border-border px-6 text-sm font-semibold text-cream"
                    >
                      {lang === "mn" ? "Замын заавар" : "Get directions"}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p
            data-reveal
            className="reveal mt-6 rounded-xl border border-gold/40 bg-secondary/60 px-5 py-4 text-center text-sm text-secondary-foreground"
          >
            {L(t.locations.vip)}
          </p>
        </div>
      </section>

      {/* RESERVE */}
      <section id="reserve" className="bg-navy px-5 py-20 sm:px-6 sm:py-24">
        <div data-reveal className="reveal mx-auto max-w-3xl text-center">
          <LeafMark className="mx-auto h-8 w-8 text-gold" />
          <h2 className="mt-5 text-3xl text-cream sm:text-4xl">{L(t.reserve.title)}</h2>
          <p className="mt-3 text-cream/75">{L(t.reserve.sub)}</p>
          <Link
            to="/reserve"
            className="mt-8 inline-flex min-h-[56px] items-center justify-center rounded-full bg-gold px-10 text-sm font-semibold tracking-wide text-navy-deep transition-transform active:scale-[0.98]"
          >
            {L(t.hero.reserve)}
          </Link>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {branches.map((b) => (
              <a
                key={b.name}
                href={`tel:${b.tel}`}
                className="inline-flex min-h-[56px] flex-col items-center justify-center rounded-2xl border border-cream/25 px-8 py-2 text-cream transition-colors hover:border-gold"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                  {b.name}
                </span>
                <span className="font-serif text-lg">☎ {b.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </section>


      <SiteFooter />
      <MobileBar />

    </div>
  );
}
