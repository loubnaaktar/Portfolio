import { Reveal, useScramble, useScrollTo } from "../lib/hooks";
import { downloadCv } from "../lib/cv";
import { CONTACT } from "../lib/data";
import { IconArrowRight, IconDownload, IconPin } from "./Icons";

const ORBIT_CHIPS = [
  { label: "Java", pos: "top-[6%] -left-3 sm:-left-8", delay: "0s", color: "#3B82F6" },
  { label: "React", pos: "top-[38%] -right-10 sm:-right-24", delay: "1.7s", color: "#8B5CF6" },
  { label: "Spring Boot", pos: "bottom-[16%] -left-2 sm:-left-14", delay: "0.9s", color: "#06B6D4" },
];

export default function Hero() {
  const scrollTo = useScrollTo();
  const line1 = useScramble("LOUBNA", true, 36);
  const line2 = useScramble("AKTAR", true, 52);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Couches d'arrière-plan */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-primary/25 blur-[130px] orb-1"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-44 w-[480px] h-[480px] rounded-full bg-secondary/20 blur-[130px] orb-2"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-48 left-1/3 w-[420px] h-[420px] rounded-full bg-accent/15 blur-[120px] orb-3"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 lg:gap-10 items-center">
        {/* Colonne texte */}
        <div>
          <Reveal variant="fade" delay={100}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.07] px-4 py-1.5 font-mono text-[12px] tracking-wide text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              Disponible pour de nouvelles opportunités
            </span>
          </Reveal>

          <h1 className="mt-7 font-display font-extrabold tracking-tight leading-[0.98] text-snow">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">{line1 || "\u00A0"}</span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-grad">
              {line2 || "\u00A0"}
            </span>
          </h1>

          <Reveal delay={260}>
            <p className="caret mt-6 font-mono text-sm sm:text-base text-accent tracking-wide">
              Développeuse Full Stack Java&thinsp;|&thinsp;Spring Boot&thinsp;|&thinsp;React
            </p>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-6 max-w-xl text-mist text-base sm:text-lg leading-relaxed">
              Développeuse Full Stack passionnée par la création d'applications web{" "}
              <span className="text-snow font-semibold">modernes, performantes et sécurisées</span>.
              J'aime concevoir des solutions robustes en{" "}
              <span className="text-primary font-semibold">Java Spring Boot</span> et développer des
              interfaces utilisateur intuitives avec{" "}
              <span className="text-accent font-semibold">React</span>.
            </p>
          </Reveal>

          <Reveal delay={470}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("projets")}
                className="btn-primary inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-[15px] text-snow"
              >
                Voir mes projets
                <IconArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="btn-outline inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-[15px] text-snow"
              >
                Me contacter
              </button>
              <button
                onClick={downloadCv}
                className="btn-outline group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 font-semibold text-[15px] text-snow"
                aria-label="Télécharger mon CV au format PDF"
              >
                <IconDownload className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Télécharger CV
              </button>
            </div>
          </Reveal>

          <Reveal delay={580} variant="fade">
            <p className="mt-8 flex items-center gap-2 font-mono text-[13px] text-dim">
              <IconPin className="w-4 h-4 text-primary" />
              {CONTACT.location} — réponse garantie sous 24&nbsp;h
            </p>
          </Reveal>
        </div>

        {/* Colonne visuelle */}
        <Reveal variant="zoom" delay={300} className="relative mx-auto lg:mx-0 justify-self-center lg:justify-self-end">
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
            {/* Anneaux orbitaux */}
            <div
              className="absolute -inset-7 rounded-full border border-dashed border-primary/30 animate-spin-slow"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-16 rounded-full border border-secondary/20 animate-spin-reverse"
              aria-hidden="true"
            >
              <span className="absolute top-1/2 -left-1.5 w-3 h-3 rounded-full bg-secondary shadow-[0_0_14px_2px_rgba(139,92,246,0.8)]" />
            </div>

            {/* Photo + halo */}
            <div className="portrait-halo absolute inset-0 rounded-full overflow-hidden bg-surface">
              <img
                src="images/portrait.png"
                alt="Portrait de Loubna Aktar, développeuse Full Stack"
                className="w-full h-full object-cover"
                width={400}
                height={400}
              />
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/25 via-transparent to-accent/20"
                aria-hidden="true"
              />
            </div>

            {/* Badges flottants */}
            {ORBIT_CHIPS.map((chip) => (
              <span
                key={chip.label}
                className={`absolute ${chip.pos} animate-float rounded-full border border-snow/10 bg-ink/85 backdrop-blur-md px-4 py-2 font-mono text-[12px] font-medium text-snow shadow-[0_8px_30px_-8px_rgba(2,6,23,0.9)]`}
                style={{ animationDelay: chip.delay }}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
                  style={{ background: chip.color, boxShadow: `0 0 8px ${chip.color}` }}
                />
                {chip.label}
              </span>
            ))}
          </div>

          {/* Mini terminal */}
          <Reveal delay={650} variant="up" className="mt-12 sm:mt-8 sm:-ml-10 relative z-10 w-[290px] sm:w-[330px]">
            <div className="glass-card rounded-xl overflow-hidden shadow-lift">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-snow/[0.06] bg-snow/[0.03]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-mono text-[11px] text-dim">loubna@dev — zsh</span>
              </div>
              <div className="px-4 py-4 font-mono text-[12.5px] leading-6">
                <p className="text-mist">
                  <span className="text-accent">$</span> whoami
                </p>
                <p className="text-snow">loubna.aktar</p>
                <p className="text-mist">
                  <span className="text-accent">$</span> cat stack.txt
                </p>
                <p>
                  <span className="text-primary">backend</span>
                  <span className="text-dim">: </span>
                  <span className="text-snow">java · spring boot</span>
                </p>
                <p>
                  <span className="text-primary">frontend</span>
                  <span className="text-dim">: </span>
                  <span className="text-snow">react · js</span>
                </p>
                <p className="text-mist">
                  <span className="text-accent">$</span> <span className="caret" />
                </p>
              </div>
            </div>
          </Reveal>
        </Reveal>
      </div>

      {/* Indicateur de scroll */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2.5"
        aria-hidden="true"
      >
        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-dim">scroll</span>
        <span className="w-px h-12 bg-gradient-to-b from-accent to-transparent animate-pulse" />
      </div>
    </section>
  );
}
