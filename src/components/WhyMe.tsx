import type { ComponentType } from "react";
import { Reveal } from "../lib/hooks";
import { WHY_CARDS } from "../lib/data";
import SectionHeading from "./SectionHeading";
import {
  IconBolt,
  IconChat,
  IconCode,
  IconFlame,
  IconPuzzle,
  IconShield,
  IconSpark,
  IconTeam,
} from "./Icons";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  code: IconCode,
  shield: IconShield,
  team: IconTeam,
  chat: IconChat,
  puzzle: IconPuzzle,
  spark: IconSpark,
  bolt: IconBolt,
  flame: IconFlame,
};

const ACCENTS = ["#3B82F6", "#06B6D4", "#8B5CF6"];

export default function WhyMe() {
  return (
    <section id="pourquoi" className="relative py-28 sm:py-36">
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent/8 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Valeur ajoutée"
          title={
            <>
              Pourquoi travailler <span className="text-grad">avec moi ?</span>
            </>
          }
          desc="Au-delà des technologies, ce sont les attitudes qui font la différence dans une équipe. Voici ce que j'apporte, chaque jour."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon];
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <Reveal key={card.title} delay={(i % 4) * 100 + Math.floor(i / 4) * 140}>
                <div
                  className="glass-card card-sheen group rounded-xl p-6 h-full relative overflow-hidden"
                  data-cursor
                >
                  <span
                    className="absolute -top-3 -right-2 font-display font-extrabold text-6xl text-snow/[0.04] select-none transition-colors duration-500 group-hover:text-snow/[0.08]"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="relative w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                    style={{
                      color: accent,
                      background: `${accent}14`,
                      borderColor: `${accent}45`,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <h3 className="relative mt-5 font-display font-bold text-lg text-snow">
                    {card.title}
                  </h3>
                  <p className="relative mt-2 text-mist text-[13.5px] leading-relaxed">
                    {card.desc}
                  </p>
                  <span
                    className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
