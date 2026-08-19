import { useCallback, useEffect, useState } from "react";
import type { Lang } from "@/lib/content";

const KEY = "greyseed-lang";
const EVT = "greyseed-lang-change";

export function useLang() {
  const [lang, setLangState] = useState<Lang>("mn");

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    if (stored === "en" || stored === "mn") setLangState(stored);
    const onChange = (e: Event) => setLangState((e as CustomEvent<Lang>).detail);
    window.addEventListener(EVT, onChange);
    return () => window.removeEventListener(EVT, onChange);
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(KEY, l);
    window.dispatchEvent(new CustomEvent<Lang>(EVT, { detail: l }));
  }, []);

  const L = useCallback(
    <T extends { mn: string; en: string }>(o: T) => (lang === "mn" ? o.mn : o.en),
    [lang],
  );

  return { lang, setLang, L };
}
