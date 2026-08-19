import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Leaf";
import { useLang } from "@/hooks/use-lang";
import { t, type Lang } from "@/lib/content";

const sections = [
  { id: "about", key: "about" },
  { id: "dishes", key: "dishes" },
  { id: "reviews", key: "reviews" },
  { id: "gallery", key: "gallery" },
  { id: "locations", key: "locations" },
] as const;

export function LangToggle({
  lang,
  setLang,
  dark = false,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex shrink-0 items-center rounded-full border p-0.5 text-[11px] font-semibold tracking-widest ${
        dark ? "border-cream/25 text-cream/80" : "border-navy/20 text-navy/70"
      }`}
    >
      {(["mn", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-h-[32px] rounded-full px-3 transition-colors ${
            lang === l ? "bg-gold text-navy-deep" : "hover:opacity-80"
          }`}
        >
          {l === "mn" ? "МОН" : "EN"}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const { lang, setLang, L } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = sections.map((s) => ({
    href: `/#${s.id}`,
    label: L(t.nav[s.key]),
  }));
  const pageItems = [
    { href: "/menu", label: L(t.nav.menu) },
    { href: "/reserve", label: L(t.hero.reserve) },
  ];
  const all = [...navItems, ...pageItems];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || scrolled || open ? "bg-navy-deep/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="min-w-0 text-cream">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 lg:flex">
            {all.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-cream/85 transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <LangToggle lang={lang} setLang={setLang} dark />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/25 text-cream lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute inset-x-0 top-0 h-0.5 bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-1.5 h-0.5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute inset-x-0 top-3 h-0.5 bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-cream/10 lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
            {all.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center border-b border-cream/10 text-cream/90"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const { lang, setLang, L } = useLang();
  const navItems = sections.map((s) => ({ href: `/#${s.id}`, label: L(t.nav[s.key]) }));

  return (
    <footer className="bg-navy-deep px-5 pb-28 pt-16 text-cream/80 sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_auto]">
          <div>
            <Logo className="text-cream" />
            <p className="mt-4 font-serif text-lg text-gold">{L(t.footer.tagline)}</p>
            <p className="mt-2 text-sm">{L(t.locations.hours)}</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              {L(t.footer.links)}
            </p>
            <ul className="mt-4 space-y-1">
              {[...navItems, { href: "/menu", label: L(t.nav.menu) }].map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="flex min-h-[44px] items-center text-sm hover:text-gold"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-start gap-4">
            <div className="flex gap-3">
              {[
                {
                  label: "Facebook",
                  d: "M13 22v-8h3l1-4h-4V8c0-1.1.3-1.8 1.9-1.8H17V2.6C16.6 2.6 15.4 2.5 14 2.5c-2.9 0-4.9 1.8-4.9 5V10H6v4h3.1v8H13Z",
                },
                {
                  label: "Instagram",
                  d: "M12 7.4A4.6 4.6 0 1 0 12 16.6 4.6 4.6 0 0 0 12 7.4Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.9-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-cream/20 hover:border-gold hover:text-gold"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
            <LangToggle lang={lang} setLang={setLang} dark />
          </div>
        </div>
        <p className="mt-12 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} GREYSEED. {L(t.footer.rights)}
        </p>
      </div>
    </footer>
  );
}

export function MobileBar() {
  const { L } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-navy-deep/95 px-4 py-3 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Link
          to="/reserve"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-gold text-sm font-semibold text-navy-deep"
        >
          {L(t.hero.reserve)}
        </Link>
        <Link
          to="/menu"
          className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-cream/35 text-sm font-semibold text-cream"
        >
          {L(t.hero.menu)}
        </Link>
      </div>
    </div>
  );
}
