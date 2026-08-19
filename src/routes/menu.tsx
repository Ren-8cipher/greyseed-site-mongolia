import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { LeafDivider, LeafMark } from "@/components/Leaf";
import { MobileBar, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { useLang } from "@/hooks/use-lang";
import { menu, menuNotes } from "@/lib/menu";
import { t } from "@/lib/content";

import page1 from "@/assets/menu-1.png.asset.json";
import page2 from "@/assets/menu-2.png.asset.json";
import page3 from "@/assets/menu-3.png.asset.json";
import page4 from "@/assets/menu-4.png.asset.json";

const pages = [page1, page2, page3, page4];

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Цэс | GREYSEED — Globally Inspired Menu" },
      {
        name: "description",
        content:
          "GREYSEED-ийн бүтэн цэс: зууш, шөл, салат, үндсэн хоол, паста, ази, бургер, пицца, хуваалцах хоол, амттан. Үнэ төгрөгөөр.",
      },
      { property: "og:title", content: "GREYSEED цэс — Globally Inspired" },
      {
        property: "og:description",
        content: "The full GREYSEED menu: starters, soups, salads, mains, pasta, Asian, burgers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { lang, L } = useLang();
  const [active, setActive] = useState<string>("all");
  const shown = active === "all" ? menu : menu.filter((c) => c.id === active);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />

      <section className="bg-navy-deep px-5 pb-14 pt-28 sm:px-6 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
            Globally Inspired
          </p>
          <h1 className="mt-3 text-4xl text-cream sm:text-5xl">
            {lang === "mn" ? "Бүтэн цэс" : "Full Menu"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream/70">
            {lang === "mn"
              ? "Ази, Мексик, Газар дундын тэнгис болон Америк хоолны 39 нэр төрөл. Үнэ төгрөгөөр."
              : "39 dishes spanning Asian, Mexican, Mediterranean and American cooking. Prices in MNT."}
          </p>
          <Link
            to="/reserve"
            className="mt-7 inline-flex min-h-[52px] items-center justify-center rounded-full bg-gold px-8 text-sm font-semibold text-navy-deep"
          >
            {L(t.hero.reserve)}
          </Link>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="sticky top-[68px] z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="no-scrollbar mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {[{ id: "all", en: "All", mn: "Бүгд" }, ...menu].map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`min-h-[40px] shrink-0 rounded-full border px-4 text-sm transition-colors ${
                active === c.id
                  ? "border-navy bg-navy text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-navy/40"
              }`}
            >
              {lang === "mn" ? c.mn : c.en}
            </button>
          ))}
        </div>
      </div>

      <section className="px-5 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {shown.map((cat) => (
            <div key={cat.id} className="mb-14 last:mb-0">
              <div className="flex items-baseline justify-between gap-4 border-b border-gold/40 pb-3">
                <h2 className="text-2xl text-navy sm:text-3xl">{lang === "mn" ? cat.mn : cat.en}</h2>
                <span className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                  {lang === "mn" ? cat.en : cat.mn}
                </span>
              </div>
              <ul className="mt-6 space-y-6">
                {cat.items.map((item) => (
                  <li
                    key={item.en}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4"
                  >
                    <div className="min-w-0">
                      <p className="flex flex-wrap items-center gap-2 text-base font-semibold text-navy">
                        {item.n && <span className="text-muted-foreground">{item.n}/</span>}
                        {lang === "mn" ? item.mn : item.en}
                        {item.note === "spicy" && (
                          <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-destructive">
                            {lang === "mn" ? "халуун" : "spicy"}
                          </span>
                        )}
                        {item.note === "primeat" && (
                          <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
                            Primeat
                          </span>
                        )}
                      </p>
                      <p className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
                        {lang === "mn" ? item.en : item.mn}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {lang === "mn" ? item.descMn : item.descEn}
                      </p>
                    </div>
                    <span className="shrink-0 font-serif text-base text-gold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <LeafDivider />

      {/* PRINTED MENU PAGES */}
      <section className="px-5 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <LeafMark className="mx-auto h-7 w-7 text-gold" />
            <h2 className="mt-4 text-2xl text-navy sm:text-3xl">
              {lang === "mn" ? "Хэвлэмэл цэс" : "The printed menu"}
            </h2>
          </div>
          <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:px-0">
            {pages.map((p, i) => (
              <a
                key={p.url}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="shadow-card-soft w-[80vw] shrink-0 snap-center overflow-hidden rounded-2xl border border-border bg-card sm:w-auto"
              >
                <img
                  src={p.url}
                  alt={
                    lang === "mn" ? `GREYSEED цэс, хуудас ${i + 1}` : `GREYSEED menu, page ${i + 1}`
                  }
                  loading="lazy"
                  width={1390}
                  height={1920}
                  className="w-full"
                />
              </a>
            ))}
          </div>
          <ul className="mx-auto mt-8 max-w-2xl space-y-1 text-center text-xs text-muted-foreground">
            {(lang === "mn" ? menuNotes.mn : menuNotes.en).map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
