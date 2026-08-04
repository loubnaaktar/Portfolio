import { Reveal } from "../lib/hooks";

type Props = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
};

export default function SectionHeading({ index, eyebrow, title, desc }: Props) {
  return (
    <div className="max-w-3xl mb-14 sm:mb-20">
      <Reveal variant="fade">
        <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-accent mb-4">
          <span className="text-primary/80 mr-2">{index} //</span>
          {eyebrow}
        </p>
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
        <div className="mt-7 h-px w-28 bg-gradient-to-r from-primary via-accent to-transparent" />
      </Reveal>
    </div>
  );
}
