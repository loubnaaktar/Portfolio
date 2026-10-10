import { Reveal, useCountUp, useInView } from "../lib/hooks";
import { useI18n } from "../i18n";
import { STATS } from "../lib/data";
import SectionHeading from "./SectionHeading";
import { IconCheck } from "./Icons";

const TRAIT_KEYS = ["adaptation", "analyse", "curiosite", "pratiques"] as const;

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
  const { t } = useI18n();
  return (
    <section id="a-propos" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow={t("about.eyebrow")}
          title={
            <>
              {t("about.titlePre")}
              <span className="text-grad">{t("about.titleAccent")}</span>
            </>
          }
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
          {/* Texte */}
          <div className="space-y-6">
            <Reveal variant="left">
              <p className="text-snow/90 text-lg sm:text-xl leading-relaxed">
                {t("about.p1a")}
                <span className="text-primary font-semibold">{t("about.p1b")}</span>
                {t("about.p1c")}
                <span className="text-snow font-semibold">{t("about.p1d")}</span>
                {t("about.p1e")}
              </p>
            </Reveal>
            <Reveal variant="left" delay={120}>
              <p className="text-mist text-base sm:text-lg leading-relaxed">
                {t("about.p2a")}
                <span className="text-accent font-semibold">{t("about.p2b")}</span>
                {t("about.p2c")}
                <span className="text-snow">{t("about.p2d")}</span>
                {t("about.p2e")}
              </p>
            </Reveal>

            <Reveal variant="left" delay={220}>
              <ul className="pt-2 space-y-3.5">
                {TRAIT_KEYS.map((k) => (
                  <li key={k} className="flex items-center gap-3.5 group">
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-110 group-hover:rotate-6">
                      <IconCheck className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-snow/85 font-medium">{t(`about.traits.${k}`)}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="left" delay={320}>
              <blockquote className="relative mt-8 rounded-xl border-l-2 border-accent bg-snow/[0.03] px-6 py-5">
                <p className="font-mono text-sm text-mist italic leading-relaxed">
                  {t("about.quote")}
                </p>
              </blockquote>
            </Reveal>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6 lg:pt-4">
            {STATS.map((s, i) => (
              <StatCard
                key={s.id}
                value={s.value}
                suffix={s.suffix}
                label={t(`about.stats.${s.id}`)}
                delay={i * 110}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
