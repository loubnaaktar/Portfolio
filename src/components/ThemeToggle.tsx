import { useRef } from "react";
import { useTheme } from "../lib/theme";
import { useI18n } from "../i18n";
import { IconMoon, IconSun } from "./Icons";

type Props = { className?: string };

/**
 * Bouton de bascule de thème : soleil / lune animés.
 * La révélation circulaire démarre depuis le centre du bouton.
 */
export default function ThemeToggle({ className = "" }: Props) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useI18n();
  const ref = useRef<HTMLButtonElement>(null);
  const isDark = theme === "dark";

  const onClick = () => {
    const rect = ref.current?.getBoundingClientRect();
    toggleTheme(
      rect
        ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
        : undefined
    );
  };

  const ariaLabel = isDark ? t("theme.darkAria") : t("theme.lightAria");
  const title = isDark ? t("theme.darkTitle") : t("theme.lightTitle");

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={ariaLabel}
      title={title}
      onClick={onClick}
      className={`theme-switch ${className}`}
    >
      <span className="theme-switch__stars" aria-hidden="true" />
      <span className="theme-switch__thumb" aria-hidden="true">
        <IconSun className="theme-switch__icon theme-switch__sun" />
        <IconMoon className="theme-switch__icon theme-switch__moon" />
      </span>
    </button>
  );
}
