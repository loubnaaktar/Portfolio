import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { fr } from "./fr";
import { en } from "./en";

export type Language = "fr" | "en";
export type Messages = { [key: string]: string | Messages };
export type Params = Record<string, string | number>;

const STORAGE_KEY = "lang";

function lookup(messages: Messages, key: string): string | Messages | undefined {
  const parts = key.split(".");
  let current: Messages | string | undefined = messages;
  for (const part of parts) {
    if (typeof current === "string" || current === undefined) return undefined;
    current = current[part];
  }
  return current;
}

function interpolate(value: string, params?: Params): string {
  if (!params) return value;
  return value.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : match
  );
}

function readInitial(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") return stored;
  } catch {
    /* ignore */
  }
  return "fr";
}

type I18nValue = {
  lang: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Params) => string;
  tCount: (key: string, count: number) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readInitial);
  const dict = useMemo(() => (lang === "fr" ? fr : en), [lang]);

  const t = useCallback(
    (key: string, params?: Params): string => {
      let value = lookup(dict, key);
      if (value === undefined || typeof value !== "string") {
        const fallback = lookup(fr, key);
        value = typeof fallback === "string" ? fallback : undefined;
      }
      if (typeof value !== "string") return key;
      return interpolate(value, params);
    },
    [dict]
  );

  const tCount = useCallback(
    (key: string, count: number): string => {
      const value = lookup(dict, key);
      const plural = typeof value === "object" && value !== null ? value : {};
      const target =
        count === 1
          ? typeof plural.one === "string"
            ? plural.one
            : undefined
          : typeof plural.other === "string"
            ? plural.other
            : undefined;
      if (target !== undefined) return target;
      const fb = lookup(fr, key);
      const fbPlural = typeof fb === "object" && fb !== null ? fb : {};
      return count === 1
        ? (typeof fbPlural.one === "string" ? fbPlural.one : key)
        : (typeof fbPlural.other === "string" ? fbPlural.other : key);
    },
    [dict]
  );

  const setLanguage = useCallback(
    (next: Language) => {
      if (next === lang) return;
      setLang(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) return;
      const rootEl = document.getElementById("root");
      if (!rootEl) return;
      rootEl.classList.remove("lang-fade");
      void rootEl.offsetWidth;
      rootEl.classList.add("lang-fade");
    },
    [lang]
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    const setMeta = (selector: string, value: string) => {
      const meta = document.querySelector(selector);
      if (meta) meta.setAttribute("content", value);
    };
    document.title = t("seo.title");
    setMeta('meta[name="description"]', t("seo.description"));
    setMeta('meta[property="og:title"]', t("seo.ogTitle"));
    setMeta('meta[property="og:description"]', t("seo.ogDescription"));
    setMeta('meta[property="og:locale"]', lang === "fr" ? "fr_FR" : "en_US");
  }, [lang, t]);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLanguage, t, tCount }),
    [lang, setLanguage, t, tCount]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n doit être utilisé dans un <I18nProvider>.");
  return ctx;
}