import { Reveal, useCountUp, useInView } from "../lib/hooks";
import { STATS } from "../lib/data";
import SectionHeading from "./SectionHeading";
import { IconCheck } from "./Icons";

const TRAITS = [
  "Forte capacité d'adaptation",
  "Esprit d'analyse affûté",
  "Curiosité & veille technologique",
  "Recherche constante des bonnes pratiques",
];

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const count = useCountUp(value, inView);
  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="glass-card card-sheen rounded-xl p-6 sm:p-7 h-full relative overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-secondary opacity-70"
          aria-hidden="true"
        />
        <p className="font-display font-extrabold text-4xl sm:text-5xl text-grad tabular-nums">
          {String(count).padStart(2, "0")}
          <span className="text-accent">{suffix}</span>
        </p>
        <p className="mt-3 text-mist text-sm leading-snug font-medium">{label}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="a-propos" className="relative py-28 sm:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="À propos"
          title={
            <>
              Derrière le code, <span className="text-grad">une passion</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
          {/* Texte */}
          <div className="space-y-6">
            <Reveal variant="left">
              <p className="text-snow/90 text-lg sm:text-xl leading-relaxed">
                Développeuse <span className="text-primary font-semibold">Web Junior</span> en
                devenir senior dans l'exigence, je suis issue d'une reconversion assumée : après
                une licence en archéologie, j'ai choisi de fouiller un autre terrain —{" "}
                <span className="text-snow font-semibold">celui du code</span>. Une formation Full
                Stack intensive m'a donné les armes : Java, Spring Boot, React, MySQL, Docker.
              </p>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <p className="text-mist text-base sm:text-lg leading-relaxed">
                Ce que je perds en années d'expérience, je le compense en{" "}
                <span className="text-accent font-semibold">motivation</span>, en rigueur et en
                soif d'apprendre. Je lis la documentation, je teste, je casse, je reconstruis —
                toujours avec l'obsession du <span className="text-snow">code propre</span> et des
                architectures qui tiennent la route.
              </p>
            </Reveal>

            <Reveal variant="left" delay={220}>
              <ul className="pt-2 space-y-3.5">
                {TRAITS.map((t) => (
                  <li key={t} className="flex items-center gap-3.5 group">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110 group-hover:rotate-6">
                      <IconCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-snow/85 font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="left" delay={320}>
              <blockquote className="relative mt-8 rounded-xl border-l-2 border-accent bg-snow/[0.03] px-6 py-5">
                <p className="font-mono text-sm text-mist italic leading-relaxed">
                  « Je ne cherche pas seulement à écrire du code qui fonctionne — je cherche à
                  écrire du code qu'on a plaisir à relire. »
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6 lg:pt-4">
            {STATS.map((s, i) => (
              <StatCard
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
                delay={i * 110}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
