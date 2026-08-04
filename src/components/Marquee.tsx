import { MARQUEE_ITEMS } from "../lib/data";

/** Bandeau défilant des technologies, signature visuelle entre le hero et le contenu. */
export default function Marquee() {
  const row = (ariaHidden: boolean) => (
    <ul
      className="flex items-center gap-10 pr-10 shrink-0"
      aria-hidden={ariaHidden || undefined}
    >
      {MARQUEE_ITEMS.map((item) => (
        <li
          key={`${item}${ariaHidden ? "-dup" : ""}`}
          className="flex items-center gap-10 font-mono text-sm tracking-[0.18em] uppercase text-mist/80 whitespace-nowrap"
        >
          {item}
          <svg viewBox="0 0 8 8" className="w-2 h-2 text-primary" aria-hidden="true">
            <path d="M4 0 8 4 4 8 0 4Z" fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative border-y border-snow/[0.06] bg-surface/40 backdrop-blur-sm py-5 overflow-hidden marquee-mask">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
