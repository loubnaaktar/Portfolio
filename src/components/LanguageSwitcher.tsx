import { useI18n, type Language } from "../i18n";

const LANGS: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

/** Sélecteur de langue FR / EN, visible en toutes tailles dans la barre de navigation. */
export default function LanguageSwitcher() {
  const { lang, setLanguage, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("a11y.language")}
      title={t("a11y.language")}
      className="inline-flex items-center gap-0.5 rounded-full border border-snow/10 bg-surface/50 px-1 py-1 backdrop-blur"
    >
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLanguage(l.code)}
            aria-pressed={active}
            title={l.code === "fr" ? "Français" : "English"}
            className={`rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide transition-all duration-300 ${
              active
                ? "bg-accent/20 text-accent border border-accent/40 shadow-[0_0_12px_-4px_var(--accent)]"
                : "text-mist hover:text-snow border border-transparent"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}