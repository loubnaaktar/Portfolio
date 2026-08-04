export const NAV_LINKS = [
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "contact", label: "Contact" },
];

export const CONTACT = {
  phone: "+212 6 61 23 45 67",
  email: "loubnaakt13@gmail.com",
  linkedin: "https://www.linkedin.com/in/loubna-aktar-706b6b33b/",
  github: "https://github.com/loubnaaktar",
  location: "Rabat, Maroc",
};

export type SkillCategory = {
  id: string;
  title: string;
  accent: string;
  skills: { name: string; level: number }[];
};

export const SKILLS: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend",
    accent: "#3B82F6",
    skills: [
      { name: "Java", level: 88 },
      { name: "Spring Boot", level: 85 },
      { name: "Spring Security", level: 80 },
      { name: "Spring Data JPA", level: 82 },
      { name: "Hibernate", level: 80 },
      { name: "REST API", level: 86 },
      { name: "Maven", level: 78 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    accent: "#06B6D4",
    skills: [
      { name: "React", level: 82 },
      { name: "JavaScript", level: 80 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
    ],
  },
  {
    id: "database",
    title: "Base de données",
    accent: "#8B5CF6",
    skills: [{ name: "MySQL", level: 82 }],
  },
  {
    id: "devops",
    title: "DevOps",
    accent: "#06B6D4",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 86 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    id: "outils",
    title: "Outils",
    accent: "#3B82F6",
    skills: [
      { name: "IntelliJ IDEA", level: 86 },
      { name: "VS Code", level: 88 },
      { name: "Swagger", level: 80 },
      { name: "Postman", level: 82 },
      { name: "Figma", level: 70 },
    ],
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Technologies maîtrisées" },
  { value: 3, suffix: "", label: "Projets réalisés" },
  { value: 1, suffix: "", label: "Formation Full Stack" },
  { value: 3, suffix: "", label: "Langues parlées" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  tag: string;
  description: string;
  techs: string[];
  image: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "healthcare",
    index: "01",
    title: "HealthCare+",
    tag: "API REST · Spring Boot",
    description:
      "API REST de gestion médicale développée avec Java 21 et Spring Boot intégrant Spring Security, JWT, CRUD, DTO, MapStruct, Flyway, Docker, Swagger et MySQL.",
    techs: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "JPA",
      "JWT",
      "Docker",
      "MySQL",
      "Swagger",
      "Git",
    ],
    image: "images/project-healthcare.jpg",
    featured: true,
  },
  {
    id: "xtrade",
    index: "02",
    title: "XTrade",
    tag: "Application Java · Trading",
    description:
      "Application Java simulant une plateforme de trading avec gestion des traders, portefeuilles, transactions et statistiques de performance.",
    techs: ["Java", "Streams API", "POO", "Generics", "Git"],
    image: "images/project-xtrade.jpg",
  },
  {
    id: "bancaire",
    index: "03",
    title: "Gestion Bancaire",
    tag: "Application Console · POO",
    description:
      "Application console permettant la gestion des comptes bancaires avec dépôt, retrait, transfert d'argent et architecture orientée objet.",
    techs: ["Java", "POO", "Git"],
    image: "images/project-banking.jpg",
  },
];

export const TIMELINE = [
  {
    period: "2025 — 2026",
    title: "Formation Full Stack",
    place: "École Numérique Ahmed Al Hansali",
    status: "En cours",
    description:
      "Développement web complet : Java, Spring Boot, React, MySQL, Docker. Conception d'API REST sécurisées, bases de données relationnelles et bonnes pratiques du génie logiciel.",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    period: "2023 — 2024",
    title: "Licence en Archéologie Islamique",
    place: "Institut National des Sciences de l'Archéologie et du Patrimoine",
    status: "Diplômée",
    description:
      "Formation universitaire exigeante ayant forgé mon esprit d'analyse, ma rigueur méthodologique et ma capacité de recherche — des atouts que j'applique aujourd'hui au code.",
    tags: ["Analyse", "Rigueur", "Recherche"],
  },
];

export type WhyCard = { title: string; desc: string; icon: string };

export const WHY_CARDS: WhyCard[] = [
  {
    title: "Code propre",
    desc: "Un code lisible, structuré et documenté, pensé pour être maintenu et relu par toute une équipe.",
    icon: "code",
  },
  {
    title: "Bonnes pratiques",
    desc: "SOLID, DTO, tests, sécurité JWT : je m'appuie sur les standards de l'industrie, pas sur l'improvisation.",
    icon: "shield",
  },
  {
    title: "Travail en équipe",
    desc: "Git flow, revues de code et entraide : je m'intègre rapidement dans une dynamique collective.",
    icon: "team",
  },
  {
    title: "Communication",
    desc: "Des échanges clairs et réguliers, pour aligner le code sur les vrais besoins métier.",
    icon: "chat",
  },
  {
    title: "Résolution de problèmes",
    desc: "Décomposer, analyser, résoudre : chaque bug est une enquête, chaque erreur une leçon.",
    icon: "puzzle",
  },
  {
    title: "Curiosité",
    desc: "Toujours en veille : nouvelles versions de Spring, écosystème React, outils émergents.",
    icon: "spark",
  },
  {
    title: "Apprentissage rapide",
    desc: "De l'archéologie au code : j'ai prouvé que je peux changer de domaine et monter en compétence vite.",
    icon: "bolt",
  },
  {
    title: "Motivation",
    desc: "Une énergie constante, l'envie de livrer des projets solides et de progresser chaque jour.",
    icon: "flame",
  },
];

export const MARQUEE_ITEMS = [
  "Java 21",
  "Spring Boot",
  "Spring Security",
  "Hibernate",
  "REST API",
  "React",
  "JavaScript",
  "MySQL",
  "Docker",
  "Git",
  "Swagger",
  "Postman",
];
