import type { ComponentType } from "react";
import { useI18n } from "../i18n";
import { CONTACT } from "../lib/data";
import { IconGitHub, IconLinkedIn, IconMail, IconPhone } from "./Icons";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

type DockItem = {
  key: string;
  labelKey: string;
  Icon: ComponentType<{ className?: string }>;
  href: string;
  color: string;
  external?: boolean;
};

const DOCK: DockItem[] = [
  {
    key: "phone",
    labelKey: "contact.channelPhone",
    Icon: IconPhone,
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
    color: "#3B82F6",
  },
  {
    key: "email",
    labelKey: "contact.channelEmail",
    Icon: IconMail,
    href: `mailto:${CONTACT.email}`,
    color: "#06B6D4",
  },
  {
    key: "linkedin",
    labelKey: "contact.channelLinkedin",
    Icon: IconLinkedIn,
    href: CONTACT.linkedin,
    color: "#8B5CF6",
    external: true,
  },
  {
    key: "github",
    labelKey: "contact.channelGithub",
    Icon: IconGitHub,
    href: CONTACT.github,
    color: "#06B6D4",
    external: true,
  },
];

/** Dock bas : contacts rapides + langue + thème. */
export default function ContactDock() {
  const { t } = useI18n();
  return (
    <nav
      aria-label={t("a11y.quickContact")}
      className="fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[calc(100vw-0.75rem)]"
    >
      <div className="glass-card rounded-full px-2 py-2 sm:px-2.5 flex items-center gap-1.5 sm:gap-2 shadow-glow">
        <ul className="flex items-center gap-1 sm:gap-1.5">
          {DOCK.map((d) => {
            const Icon = d.Icon;
            return (
              <li key={d.key} className="relative group">
                <a
                  href={d.href}
                  {...(d.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={t(d.labelKey)}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110"
                  style={{
                    color: d.color,
                    background: `${d.color}14`,
                    borderColor: `${d.color}45`,
                  }}
                >
                  <Icon className="w-5 h-5" />
                </a>
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-snow/10 bg-ink/90 backdrop-blur px-3 py-1 font-mono text-[11px] text-snow opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  {t(d.labelKey)}
                </span>
              </li>
            );
          })}
        </ul>

        <span className="w-px h-6 bg-snow/10 mx-0.5 sm:mx-1" aria-hidden="true" />

        <div className="flex items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
