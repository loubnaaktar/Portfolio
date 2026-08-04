import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ---------- prefers-reduced-motion ---------- */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* ---------- in-view observer ---------- */
export function useInView<T extends HTMLElement>(
  threshold = 0.18,
  once = true
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);
  return [ref, inView];
}

/* ---------- Reveal component ---------- */
type RevealProps = {
  children: ReactNode;
  variant?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  delay?: number;
  className?: string;
  as?: keyof HTMLElementTagNameMap;
  style?: CSSProperties;
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as = "div",
  style,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${variant === "fade" ? "" : `reveal-${variant}`} ${
        inView ? "is-in" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/* ---------- animated counter ---------- */
export function useCountUp(target: number, start: boolean, duration = 1500): number {
  const reduced = usePrefersReducedMotion();
  const [value, setValue] = useState(0);
  const raf = useRef(0);
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [start, target, duration, reduced]);
  return value;
}

/* ---------- scramble / decode text ---------- */
const GLYPHS = "JAVA<>/{}[]=+*#$%&01";

export function useScramble(text: string, start = true, speed = 34): string {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(reduced ? text : "");
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    let raf = 0;
    let last = 0;
    const total = text.length * 3 + 14;
    const tick = (now: number) => {
      if (now - last >= speed) {
        last = now;
        frame++;
        const settled = Math.floor((frame / total) * text.length * 1.4);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          if (ch === " ") {
            out += " ";
          } else if (i < settled) {
            out += ch;
          } else {
            out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }
        setDisplay(out);
      }
      if (frame < total) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, start, speed, reduced]);
  return display;
}

/* ---------- smooth anchor scroll ---------- */
export function useScrollTo() {
  return useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }, []);
}
