import { useEffect, useState } from "react";
import { useI18n } from "../i18n";
import { downloadCv } from "../lib/cv";
import { CONTACT, NAV_LINKS } from "../lib/data";
import { useScrollTo } from "../lib/hooks";
import {
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
  LogoMark,
} from "./Icons";

const CTA_CLASS =
  "relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-[1px] font-mono text-xs font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-accent/40 active:scale-95 group";

export default function Nav() {
  const { t, lang } = useI18n();
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  const toTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { href: CONTACT.linkedin, label: t("a11y.linkedin"), Icon: IconLinkedIn, external: true },
    { href: CONTACT.github, label: t("a11y.github"), Icon: IconGitHub, external: true },
    { href: `mailto:${CONTACT.email}`, label: t("a11y.email"), Icon: IconMail, external: false },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out py-5 sm:py-6 ${
        open ? "z-[70]" : ""
      }`}
    >
      {/* Barre de progression de scroll */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden z-20">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-150 ease-out shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          style={{ width: `${progress * 100}%` }}
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label={t("a11y.nav")}
          className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all duration-500 rounded-full border ${
            scrolled && !open
              ? "bg-ink/80 backdrop-blur-xl border-snow/[0.08] shadow-[var(--nav-shadow)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <button
            onClick={toTop}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full p-1 transition-transform active:scale-95"
            aria-label={t("a11y.backToTop")}
          >
            <span className="relative inline-flex items-center justify-center">
              <LogoMark className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              <span
                className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-ink animate-pulse"
                aria-hidden="true"
              />
            </span>
            <span className="font-display font-extrabold tracking-tight text-snow text-lg sm:text-xl">
              loubna<span className="text-accent inline-block animate-bounce">.</span>aktar
            </span>
          </button>

          {/* Liens — desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <ul className="flex items-center gap-1 bg-snow/[0.03] p-1.5 rounded-full border border-snow/[0.06] backdrop-blur-md">
              {NAV_LINKS.map((l) => (
                <li key={l.id} className="relative">
                  <button
                    onClick={() => go(l.id)}
                    className={`relative px-4 py-1.5 text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${
                      active === l.id
                        ? "text-snow bg-snow/[0.06]"
                        : "text-mist hover:text-snow"
                    }`}
                  >
                    {t(`nav.${l.id}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cluster actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => downloadCv(lang)}
                className={CTA_CLASS}
                aria-label={t("a11y.downloadCv")}
              >
                <span className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-snow transition-colors duration-300 group-hover:bg-transparent">
                  <IconDownload className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  {t("nav.cv")}
                </span>
              </button>
              <button onClick={() => go("contact")} className={CTA_CLASS}>
                <span className="flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-snow transition-colors duration-300 group-hover:bg-transparent">
                  {t("nav.cta")}
                </span>
              </button>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent shadow-sm shadow-accent/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                {t("nav.availability")}
              </div>
            </div>

            {/* Burger — mobile */}
            <button
              className="lg:hidden relative z-[70] flex flex-col items-center justify-center w-10 h-10 rounded-full bg-snow/5 border border-snow/10 text-snow focus:outline-none"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t("a11y.menuClose") : t("a11y.menuOpen")}
              onClick={() => setOpen((v) => !v)}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-snow rounded-full transition-all duration-300 transform origin-left ${
                    open ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-snow rounded-full transition-all duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-snow rounded-full transition-all duration-300 transform origin-left ${
                    open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`lg:hidden fixed inset-0 z-[55] bg-ink/98 backdrop-blur-3xl overflow-y-auto transition-all duration-500 ease-in-out ${
          open ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"
        }`}
      >
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-[120px] pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative min-h-screen flex flex-col justify-between px-6 sm:px-12 pt-32 pb-12">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent font-semibold">
              Navigation
            </p>
            <ul className="mt-8 space-y-2">
              {NAV_LINKS.map((l, i) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="group flex items-center justify-between py-3 w-full border-b border-snow/5 text-left"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs font-bold text-accent/70">
                        0{i + 1}.
                      </span>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-snow transition-all duration-300 group-hover:text-accent group-hover:translate-x-2">
                        {t(`nav.${l.id}`)}
                      </span>
                    </div>
                    <span
                      className="text-xl text-accent opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => downloadCv(lang)}
                className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-[1px] font-mono text-xs font-bold shadow-lg shadow-primary/20 active:scale-95 group"
              >
                <span className="w-full flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-snow transition-colors duration-300 group-hover:bg-transparent">
                  <IconDownload className="w-4 h-4 text-accent group-hover:text-snow transition-colors" />
                  {t("nav.cv")}
                </span>
              </button>
              <button
                onClick={() => go("contact")}
                className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary via-accent to-secondary p-[1px] font-mono text-xs font-bold shadow-lg shadow-primary/20 active:scale-95 group"
              >
                <span className="w-full flex items-center justify-center gap-2 rounded-full bg-ink py-3.5 text-snow transition-colors duration-300 group-hover:bg-transparent">
                  {t("nav.cta")}
                </span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-snow/10">
              {socials.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                  className="w-11 h-11 rounded-full border border-snow/10 bg-snow/[0.02] flex items-center justify-center text-snow transition-all hover:text-accent hover:border-accent/40 active:scale-90"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
