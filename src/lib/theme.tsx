import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const DARK_COLOR = "#0B1120";
const LIGHT_COLOR = "#F2F5FB";

type ViewTransition = { finished: Promise<void> };
type DocumentWithVT = Document & {
  startViewTransition?: (cb: () => void | Promise<void>) => ViewTransition;
};

function systemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readStored(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

/** Applique le thème au document (attribut + classe + color-scheme + meta). */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? LIGHT_COLOR : DARK_COLOR);
}

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme, origin?: { x: number; y: number }) => void;
  toggleTheme: (origin?: { x: number; y: number }) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof document === "undefined") return "dark";
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") return current;
    return readStored() ?? systemTheme();
  });
  const transitioningRef = useRef(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Suit le thème système tant que l'utilisateur n'a pas exprimé de choix.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!readStored()) setThemeState(systemTheme());
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const setTheme = useCallback<ThemeContextValue["setTheme"]>((next, origin) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startViewTransition = (document as DocumentWithVT).startViewTransition;

    const commit = () => {
      flushSync(() => setThemeState(next));
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* stockage indisponible : on ignore */
      }
    };

    // Accessibilité : changement instantané si mouvement réduit.
    if (reduced) {
      commit();
      return;
    }

    // Repli élégant : fondu global des couleurs si non supporté.
    if (!startViewTransition) {
      root.classList.add("theme-fallback");
      commit();
      window.setTimeout(() => root.classList.remove("theme-fallback"), 480);
      return;
    }

    // Révélation circulaire depuis le bouton (ou le coin haut droit).
    // Si une transition est déjà en cours, on bascule proprement sans animer.
    const x = origin?.x ?? window.innerWidth - 56;
    const y = origin?.y ?? 44;
    if (transitioningRef.current) {
      commit();
      return;
    }
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    transitioningRef.current = true;
    root.style.setProperty("--theme-x", `${x}px`);
    root.style.setProperty("--theme-y", `${y}px`);
    root.style.setProperty("--theme-r", `${radius + 60}px`);
    root.classList.add("theme-transition");

    const transition = startViewTransition.call(document, commit) as ViewTransition | undefined;
    const cleanup = () => {
      transitioningRef.current = false;
      root.classList.remove("theme-transition");
      root.style.removeProperty("--theme-x");
      root.style.removeProperty("--theme-y");
      root.style.removeProperty("--theme-r");
    };
    if (transition?.finished) {
      transition.finished.finally(cleanup);
    } else {
      window.setTimeout(cleanup, 700);
    }
  }, []);

  const toggleTheme = useCallback<ThemeContextValue["toggleTheme"]>(
    (origin) => setTheme(theme === "dark" ? "light" : "dark", origin),
    [theme, setTheme]
  );

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme doit être utilisé dans un <ThemeProvider>.");
  return ctx;
}
