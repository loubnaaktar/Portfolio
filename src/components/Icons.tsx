type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

/* ------- Catégories de compétences ------- */
export const IconServer = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="4" width="18" height="7" rx="1.5" />
    <rect x="3" y="13" width="18" height="7" rx="1.5" />
    <circle cx="7" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="7" cy="16.5" r="0.6" fill="currentColor" stroke="none" />
    <path d="M14 7.5h4M14 16.5h4" />
  </svg>
);

export const IconLayout = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M3 9h18M9.5 9v11" />
    <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const IconDatabase = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
    <path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13" />
    <path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8" />
  </svg>
);

export const IconContainer = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7L12 2.8Z" />
    <path d="M3.5 7 12 11.2 20.5 7M12 11.2v10" />
  </svg>
);

export const IconToolbox = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M14.5 6.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v1.5" />
    <rect x="3" y="6.5" width="18" height="13" rx="2" />
    <path d="M3 12h18M12 10.8v2.4" />
  </svg>
);

/* ------- Cartes "Pourquoi moi" ------- */
export const IconCode = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
    <path d="m13.5 4.5-3 15" />
  </svg>
);

export const IconShield = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 2.8 4.8 5.6v5.6c0 4.6 3 7.9 7.2 9.6 4.2-1.7 7.2-5 7.2-9.6V5.6L12 2.8Z" />
    <path d="m8.8 11.8 2.3 2.3 4.3-4.4" />
  </svg>
);

export const IconTeam = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.2 20c.6-3.4 3-5.2 5.8-5.2s5.2 1.8 5.8 5.2" />
    <circle cx="16.8" cy="9.5" r="2.4" />
    <path d="M15.7 14.6c2.6 0 4.5 1.6 5.1 4.4" />
  </svg>
);

export const IconChat = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M21 11.5a7.5 7.5 0 0 1-11 6.6L4 20l1.9-5A7.5 7.5 0 1 1 21 11.5Z" />
    <path d="M9 10.5h7M9 13.5h4.5" />
  </svg>
);

export const IconPuzzle = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M10 3.5a2 2 0 1 1 4 0V5h4.5A1.5 1.5 0 0 1 20 6.5V11h-1.5a2 2 0 1 0 0 4H20v2.5a1.5 1.5 0 0 1-1.5 1.5H14v-1.5a2 2 0 1 0-4 0V19H5.5A1.5 1.5 0 0 1 4 17.5V13h1.5a2 2 0 1 0 0-4H4V6.5A1.5 1.5 0 0 1 5.5 5H10V3.5Z" />
  </svg>
);

export const IconSpark = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 2.5 14 9l6.5 2L14 13l-2 6.5L10 13l-6.5-2L10 9l2-6.5Z" />
    <path d="M19 17.5v3M17.5 19h3" />
  </svg>
);

export const IconBolt = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M13 2.5 4.5 13.5H11l-1 8L18.5 10H12l1-7.5Z" />
  </svg>
);

export const IconFlame = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 21.5c3.9 0 6.5-2.6 6.5-6.3 0-2.7-1.5-4.6-3-6.4-1.3-1.6-2.6-3.2-3-5.3-2.4 1.6-3.4 4-3.1 6.3-1-.3-1.7-1-2-2-1.2 1.6-1.9 3.6-1.9 5.4 0 4.7 2.6 8.3 6.5 8.3Z" />
    <path d="M12 21.5c-1.8 0-3-1.5-3-3.2 0-1.8 1.4-2.9 3-4.6 1.6 1.7 3 2.8 3 4.6 0 1.7-1.2 3.2-3 3.2Z" />
  </svg>
);

/* ------- Contact & UI ------- */
export const IconPhone = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M6.8 3.5h2.6l1.4 4-2.1 1.6a12.5 12.5 0 0 0 5.7 5.7l1.6-2.1 4 1.4v2.6c0 1-.8 1.9-1.9 1.8C10.5 18 5.9 13.5 5.3 5.9c-.1-1 .6-2.4 1.5-2.4Z" />
  </svg>
);

export const IconMail = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const IconLinkedIn = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
    <path d="M7.5 10.5v6M7.5 7.4v.1M11.5 16.5v-6m0 2.4c0-1.5 1.1-2.5 2.5-2.5s2.5 1 2.5 2.6v3.5" />
  </svg>
);

export const IconGitHub = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.6-.2.6-.4v-1.7c-2.6.6-3.1-1.1-3.1-1.1-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2-.2-4.2-1-4.2-4.6 0-1 .4-1.8 1-2.5-.1-.2-.4-1.1.1-2.4 0 0 .8-.2 2.5 1a8.6 8.6 0 0 1 4.6 0c1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.7 1 1.5 1 2.5 0 3.5-2.2 4.3-4.2 4.6.3.3.6.8.6 1.7v2.4c0 .2.1.5.6.4A9.2 9.2 0 0 0 12 2.8Z" />
  </svg>
);

export const IconArrowRight = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
  </svg>
);

export const IconArrowUpRight = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M7 17 17 7m0 0H8.5M17 7v8.5" />
  </svg>
);

export const IconDownload = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 3.5v11m0 0 4.5-4.5M12 14.5 7.5 10" />
    <path d="M4 16.5v2.5A1.5 1.5 0 0 0 5.5 20.5h13a1.5 1.5 0 0 0 1.5-1.5v-2.5" />
  </svg>
);

export const IconCheck = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
);

export const IconMenu = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const IconClose = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const IconArrowUp = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 20V4m0 0-6 6m6-6 6 6" />
  </svg>
);

export const IconPin = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M12 21.5s7-6.1 7-11.5a7 7 0 1 0-14 0c0 5.4 7 11.5 7 11.5Z" />
    <circle cx="12" cy="9.8" r="2.6" />
  </svg>
);

export const IconSend = ({ className = "w-4 h-4" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="M21 3.5 3 10.8l7 2.5m11-9.8-7.5 17-2.5-7m10-10-10 10" />
  </svg>
);

export const IconTerminal = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <path d="m7 9.5 3.5 3L7 15.5M12.5 15.5H17" />
  </svg>
);

export const IconCap = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <path d="m12 4 10 4.5L12 13 2 8.5 12 4Z" />
    <path d="M6.5 10.8v4.7c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.7M22 8.5v5" />
  </svg>
);

export const IconBriefcase = ({ className = "w-5 h-5" }: IconProps) => (
  <svg {...base} className={className} aria-hidden="true">
    <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
  </svg>
);

/* ------- Thème ------- */
export const IconSun = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
    <defs>
      <linearGradient id="sun-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fef3c7" />
        <stop offset="0.45" stopColor="#fbbf24" />
        <stop offset="1" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="4" fill="url(#sun-grad)" stroke="none" />
    <circle cx="12" cy="12" r="6.4" stroke="url(#sun-grad)" strokeWidth="1" strokeOpacity="0.4" />
    <path
      d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M18.5 5.5L17 7M7 17l-1.5 1.5"
      stroke="url(#sun-grad)"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

export const IconMoon = ({ className = "w-5 h-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
    <defs>
      <linearGradient id="moon-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#e0e7ff" />
        <stop offset="0.55" stopColor="#a5b4fc" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path
      d="M20.6 14.3A8.6 8.6 0 0 1 9.7 3.4a8.6 8.6 0 1 0 10.9 10.9Z"
      fill="url(#moon-grad)"
      stroke="#e0e7ff"
      strokeOpacity="0.55"
      strokeWidth="0.5"
    />
    <path d="M17.5 5l.55 1.45L19.5 7l-1.45.55L17.5 9l-.55-1.45L15.5 7l1.45-.55L17.5 5Z" fill="#67e8f9" stroke="none" />
    <path d="M20.8 9.8l.35.95.95.35-.95.35-.35.95-.35-.95-.95-.35.95-.35.35-.95Z" fill="#c7d2fe" stroke="none" />
  </svg>
);

/* Logo monogramme */
export const LogoMark = ({ className = "w-9 h-9" }: IconProps) => (
  <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
    <rect x="1" y="1" width="38" height="38" rx="10" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.5)" />
    <path d="M12 28V12h3.6V24.6h7.6V28H12Z" fill="#3B82F6" />
    <path d="M25 12l5 8-5 8-2.8-2 3.8-6-3.8-6 2.8-2Z" fill="#06B6D4" />
  </svg>
);
