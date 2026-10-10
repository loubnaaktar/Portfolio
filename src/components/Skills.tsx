import type { ComponentType } from "react";
import { Reveal } from "../lib/hooks";
import { useI18n } from "../i18n";
import { SKILLS } from "../lib/data";
import SectionHeading from "./SectionHeading";
import {
  IconContainer,
  IconDatabase,
  IconLayout,
  IconServer,
  IconToolbox,
} from "./Icons";

const CATEGORY_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  backend: IconServer,
  frontend: IconLayout,
  database: IconDatabase,
  devops: IconContainer,
  outils: IconToolbox,
};

function SkillItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent shrink-0" />
      <span className="text-sm font-semibold text-snow/90">{name}</span>
    </div>
  );
}

export default function Skills() {
  const { t, tCount } = useI18n();
  return (
    <section id="competences" className="relative py-16 sm:py-20">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("skills.eyebrow")}
          title={
            <>
              {t("skills.titlePre")}
              <span className="text-grad">{t("skills.titleAccent")}</span>
            </>
          }
          desc={t("skills.desc")}
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILLS.map((cat, ci) => {
            const Icon = CATEGORY_ICONS[cat.id];
            return (
              <Reveal key={cat.id} delay={ci * 90} className={cat.id === "backend" ? "md:col-span-2 xl:col-span-1" : ""}>
                <div className="glass-card card-sheen rounded-xl p-7 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3.5">
                      <span
                        className="w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-500 hover:rotate-6"
                        style={{
                          color: cat.accent,
                          background: `${cat.accent}1a`,
                          borderColor: `${cat.accent}55`,
                        }}
                      >
                        <Icon className="w-5.5 h-5.5" />
                      </span>
                      <div>
                        <h3 className="font-display font-bold text-xl text-snow">{t(`skills.${cat.id}.title`)}</h3>
                        <p className="font-mono text-[11px] text-dim mt-0.5">
                          {cat.skills.length} {tCount("skills.count", cat.skills.length)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-mist text-[13px] leading-relaxed mb-6">
                    {t(`skills.${cat.id}.desc`)}
                  </p>
                  <div className="space-y-3">
                    {cat.skills.map((s) => (
                      <SkillItem key={s.name} name={s.name} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}

          {/* Carte bonus écosystème */}
          <Reveal delay={450}>
            <div className="rounded-xl h-full p-7 border border-dashed border-primary/30 bg-primary/[0.04] flex flex-col justify-between">
              <div>
                <p className="font-mono text-[12px] text-accent tracking-[0.2em] uppercase mb-3">
                  {t("skills.practice.eyebrow")}
                </p>
                <p className="text-mist text-sm leading-relaxed">
                  {t("skills.practice.body")}
                </p>
              </div>
              <p className="mt-6 font-mono text-[12px] text-dim">
                <span className="text-primary">$</span>{t("skills.practice.line")}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
