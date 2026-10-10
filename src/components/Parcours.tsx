import { Reveal, useInView } from "../lib/hooks";
import { useI18n } from "../i18n";
import { TIMELINE } from "../lib/data";
import SectionHeading from "./SectionHeading";
import { IconCap, IconTerminal } from "./Icons";

export default function Parcours() {
  const { t } = useI18n();
  const [lineRef, lineIn] = useInView<HTMLDivElement>(0.05);

  return (
    <section id="parcours" className="relative py-16 sm:py-20 overflow-hidden">
      <div
        className="absolute top-1/4 -left-40 w-[460px] h-[460px] rounded-full bg-primary/12 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("parcours.eyebrow")}
          title={
            <>
              {t("parcours.titlePre")}
              <span className="text-grad">{t("parcours.titleAccent")}</span>
              {t("parcours.titlePost")}
            </>
          }
          desc={t("parcours.desc")}
        />

        <div className="relative" ref={lineRef}>
          {/* Ligne verticale */}
          <div
            className={`timeline-line ${lineIn ? "is-in" : ""} absolute left-[19px] lg:left-1/2 lg:-translate-x-px top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-accent to-secondary/40`}
            aria-hidden="true"
          />

          <ol className="space-y-14 lg:space-y-20">
            {TIMELINE.map((item, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={item.id}
                  className={`relative grid lg:grid-cols-2 gap-6 lg:gap-16 ${
                    left ? "" : "lg:[direction:rtl]"
                  }`}
                >
                  {/* Point sur la ligne */}
                  <span
                    className="absolute left-[19px] lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_0_5px_rgba(6,182,212,0.15),0_0_18px_2px_rgba(6,182,212,0.6)]"
                    aria-hidden="true"
                  />

                  <Reveal
                    variant={left ? "left" : "right"}
                    delay={120}
                    className={`pl-14 lg:pl-0 ${left ? "lg:pr-4 lg:text-right" : "lg:col-start-2 lg:pl-4"} lg:[direction:ltr]`}
                  >
                    <div className="glass-card card-sheen rounded-xl p-7 sm:p-8 relative overflow-hidden inline-block w-full text-left">
                      <div
                        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent"
                        aria-hidden="true"
                      />
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3.5 py-1 font-mono text-[12px] text-primary font-medium">
                          {item.period}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full px-3.5 py-1 font-mono text-[11px] font-medium ${
                            item.id === "fullstack"
                              ? "bg-accent/10 border border-accent/40 text-accent"
                              : "bg-secondary/10 border border-secondary/40 text-secondary"
                          }`}
                        >
                          {t(`parcours.${item.id}.status`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3.5 mb-2">
                        <span className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 text-accent flex items-center justify-center flex-shrink-0">
                          {i === 0 ? <IconTerminal className="w-5 h-5" /> : <IconCap className="w-5 h-5" />}
                        </span>
                        <div>
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-snow">
                            {t(`parcours.${item.id}.title`)}
                          </h3>
                          <p className="font-mono text-[12px] text-mist mt-0.5">{item.place}</p>
                        </div>
                      </div>
                      <p className="text-mist text-sm leading-relaxed mt-3">
                        {t(`parcours.${item.id}.desc`)}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full bg-snow/[0.05] border border-snow/10 px-3 py-1 font-mono text-[11px] text-snow/70"
                          >
                            {tag.includes(".") ? t(tag) : tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
