import { useScrollTo } from "../lib/hooks";
import { NAV_LINKS } from "../lib/data";
import { IconArrowUp, IconGitHub, IconLinkedIn, IconMail, LogoMark } from "./Icons";
import { CONTACT } from "../lib/data";

export default function Footer() {
  const scrollTo = useScrollTo();
  return (
    <footer className="relative border-t border-snow/[0.06] bg-abyss/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <LogoMark className="w-10 h-10" />
            <div>
              <p className="font-display font-bold text-snow leading-tight">LOUBNA AKTAR</p>
              <p className="font-mono text-[12px] text-mist">
                Développeuse Full Stack Java&thinsp;|&thinsp;React
              </p>
            </div>
          </div>

          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="font-mono text-[12.5px] text-mist hover:text-accent transition-colors duration-300"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil GitHub"
              className="w-10 h-10 rounded-full border border-snow/10 flex items-center justify-center text-mist hover:text-accent hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <IconGitHub className="w-4.5 h-4.5" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Profil LinkedIn"
              className="w-10 h-10 rounded-full border border-snow/10 flex items-center justify-center text-mist hover:text-accent hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <IconLinkedIn className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              aria-label="Envoyer un email"
              className="w-10 h-10 rounded-full border border-snow/10 flex items-center justify-center text-mist hover:text-accent hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <IconMail className="w-4.5 h-4.5" />
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Retour en haut de page"
              className="btn-primary ml-2 w-11 h-11 rounded-full flex items-center justify-center text-snow"
            >
              <IconArrowUp className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-7 border-t border-snow/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[12.5px] text-dim">
            © 2026 <span className="text-snow">LOUBNA AKTAR</span> — Développeuse Full Stack
            Java&thinsp;|&thinsp;React
          </p>
          <p className="font-mono text-[12px] text-dim">
            Conçue &amp; codée avec <span className="text-primary">Java</span>,{" "}
            <span className="text-accent">React</span> et beaucoup de café
          </p>
        </div>
      </div>
    </footer>
  );
}
