import { Reveal } from "../lib/hooks";
import { PROJECTS } from "../lib/data";
import SectionHeading from "./SectionHeading";
import { IconArrowUpRight, IconGitHub, IconSpark } from "./Icons";

const REPOS: Record<string, string> = {
  healthcare: "https://github.com/ENAA-School-Student/HealthCare-.git",
  xtrade: "https://github.com/loubnaaktar/XTrade.git",
  bancaire: "https://github.com/loubnaaktar/ebank.git",
};

export default function Projects() {
  return (
    <section id="projets" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Portfolio"
          title={
            <>
              Mes <span className="text-grad">projets</span>
            </>
          }
          desc="Trois projets qui illustrent ma progression : une API REST de niveau production, une application métier complète et une base orientée objet solide."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 130} className={i === 0 ? "md:col-span-2 xl:col-span-1" : ""}>
              <article className="glass-card card-sheen group rounded-xl overflow-hidden h-full flex flex-col">
                {/* Visuel */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`Aperçu du projet ${p.title}`}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    loading="lazy"
                    width={640}
                    height={400}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80"
                    aria-hidden="true"
                  />
                  {p.featured && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-primary/90 backdrop-blur px-3 py-1 font-mono text-[11px] font-medium text-snow shadow-glow">
                      <IconSpark className="w-3 h-3" />
                      Projet phare
                    </span>
                  )}
                  <span
                    className="absolute top-4 right-4 font-display font-extrabold text-3xl text-snow/25 transition-colors duration-500 group-hover:text-accent/60"
                    aria-hidden="true"
                  >
                    {p.index}
                  </span>
                  <span className="absolute bottom-4 left-4 font-mono text-[12px] tracking-wide text-accent">
                    {p.tag}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-2xl text-snow group-hover:text-accent transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-mist text-sm leading-relaxed flex-1">{p.description}</p>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies utilisées">
                    {p.techs.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-snow/10 bg-snow/[0.04] px-3 py-1 font-mono text-[11px] text-snow/75 transition-colors duration-300 hover:border-accent/60 hover:text-accent"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 pt-5 border-t border-snow/[0.07] flex items-center gap-3">
                    <a
                      href={REPOS[p.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-snow"
                    >
                      Voir le projet
                      <IconArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={REPOS[p.id]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-snow"
                      aria-label={`Code source GitHub du projet ${p.title}`}
                    >
                      <IconGitHub className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-14 text-center">
          <a
            href="https://github.com/loubnaaktar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-mono text-sm text-snow"
          >
            <IconGitHub className="w-4.5 h-4.5" />
            Explorer tous mes dépôts sur GitHub
            <IconArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
