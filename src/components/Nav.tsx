import { useEffect, useState } from "react";
import { NAV_LINKS } from "../lib/data";
import { useScrollTo } from "../lib/hooks";
import { IconClose, IconMenu, LogoMark } from "./Icons";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 24);
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    ) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-snow/[0.06] shadow-[0_8px_40px_-16px_rgba(2,6,23,0.8)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Barre de progression de scroll */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-primary via-accent to-secondary transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      <nav
        className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between"
        aria-label="Navigation principale"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 group"
          aria-label="Retour en haut de page"
        >
          <LogoMark className="w-10 h-10 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />
          <span className="font-display font-bold tracking-wide text-snow text-lg leading-none">
            loubna<span className="text-accent">.</span>aktar
          </span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`link-underline font-mono text-[13px] tracking-wide transition-colors duration-300 ${
                  active === l.id ? "text-accent is-active" : "text-mist hover:text-snow"
                }`}
              >
                <span className="text-primary/70 mr-1">//</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => go("contact")}
            className="btn-outline rounded-full px-5 py-2 font-mono text-[13px] text-snow"
          >
            Me contacter
          </button>
        </div>

        <button
          className="lg:hidden text-snow p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <IconClose className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out bg-ink/95 backdrop-blur-xl border-b border-snow/[0.06] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-5 space-y-1">
          {NAV_LINKS.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="w-full text-left py-3 px-3 rounded-lg font-mono text-sm text-mist hover:text-snow hover:bg-snow/[0.04] transition-colors"
              >
                <span className="text-primary mr-2">0{i + 1}.</span>
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <button
              onClick={() => go("contact")}
              className="btn-primary w-full rounded-full py-3 font-mono text-sm text-snow"
            >
              Me contacter
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
