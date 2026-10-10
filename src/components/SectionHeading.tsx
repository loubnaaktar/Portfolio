import { Reveal } from "../lib/hooks";

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
};

export default function SectionHeading({ eyebrow, title, desc }: Props) {
  return (
    <div className="max-w-3xl mb-14 sm:mb-20">
      <Reveal variant="fade">
        <div className="mb-5">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.07] px-4 py-1.5 text-[13px] tracking-[0.15em] uppercase text-accent font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-snow">
          {title}
        </h2>
      </Reveal>
      {desc && (
        <Reveal delay={180}>
          <p className="mt-5 text-mist text-lg leading-relaxed max-w-2xl">{desc}</p>
        </Reveal>
      )}
      <Reveal delay={240} variant="fade">
        <div className="mt-7 flex items-center gap-3">
          <div className="h-px w-28 bg-gradient-to-r from-primary via-accent to-transparent" />
          <span
            className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            aria-hidden="true"
          />
        </div>
      </Reveal>
    </div>
  );
}
