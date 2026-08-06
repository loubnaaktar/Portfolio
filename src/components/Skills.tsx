import type { ComponentType } from "react";
import { Reveal } from "../lib/hooks";
import { SKILLS } from "../lib/data";
import SectionHeading from "./SectionHeading";
import {
  IconContainer,
  IconDatabase,
  IconLayout,
  IconServer,
  IconToolbox,
} from "./Icons";

const CATEGORY_META: Record<
  string,
  { icon: ComponentType<{ className?: string }>; desc: string }
> = {
  backend: {
    icon: IconServer,
    desc: "API REST robustes, sécurité JWT, persistance JPA",
  },
  frontend: {
    icon: IconLayout,
    desc: "Interfaces réactives et accessibles centrées utilisateur",
  },
  database: {
    icon: IconDatabase,
    desc: "Modélisation relationnelle et requêtes optimisées",
  },
  devops: {
    icon: IconContainer,
    desc: "Conteneurisation et workflow de versioning propre",
  },
  outils: {
    icon: IconToolbox,
    desc: "Un environnement de travail productif et documenté",
  },
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
  return (
    <section id="competences" className="relative py-28 sm:py-36">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-secondary/10 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Compétences"
          title={
            <>
              Ma stack <span className="text-grad">technique</span>
            </>
          }
          desc="Des technologies choisies pour leur robustesse en entreprise : l'écosystème Java Spring côté serveur, React côté client, et tout l'outillage pour livrer proprement."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {SKILLS.map((cat, ci) => {
            const meta = CATEGORY_META[cat.id];
            const Icon = meta.icon;
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
                        <h3 className="font-display font-bold text-xl text-snow">{cat.title}</h3>
                        <p className="font-mono text-[11px] text-dim mt-0.5">
                          {cat.skills.length} technologie{cat.skills.length > 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-mist text-[13px] leading-relaxed mb-6">{meta.desc}</p>
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
                  Et en pratique
                </p>
                <p className="text-mist text-sm leading-relaxed">
                  Architecture en couches, DTO &amp; MapStruct, migrations Flyway, tests avec
                  Postman, documentation Swagger — chaque projet suit un flux de travail
                  professionnel de bout en bout.
                </p>
              </div>
              <p className="mt-6 font-mono text-[12px] text-dim">
                <span className="text-primary">$</span> mvn clean install && git push ✓
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
