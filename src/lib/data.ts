export const NAV_LINKS = [{ id: "a-propos" }, { id: "competences" }, { id: "projets" }, { id: "parcours" }, { id: "contact" }];

export const CONTACT = {
  phone: "+212 6 61 23 45 67",
  email: "loubnaakt13@gmail.com",
  linkedin: "https://www.linkedin.com/in/loubna-aktar-706b6b33b/",
  github: "https://github.com/loubnaaktar",
};

export type SkillCategory = {
  id: string;
  accent: string;
  skills: { name: string; level: number }[];
};

export const SKILLS: SkillCategory[] = [
  {
    id: "backend",
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
    accent: "#8B5CF6",
    skills: [{ name: "MySQL", level: 82 }],
  },
  {
    id: "devops",
    accent: "#06B6D4",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Git", level: 86 },
      { name: "GitHub", level: 85 },
    ],
  },
  {
    id: "outils",
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
  { id: "tech", value: 15, suffix: "+" },
  { id: "projects", value: 3, suffix: "" },
  { id: "training", value: 1, suffix: "" },
  { id: "languages", value: 3, suffix: "" },
];

export type Project = {
  id: string;
  index: string;
  techs: string[];
  image: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "healthcare",
    index: "01",
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
    id: "logitrack",
    index: "02",
    techs: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "MySQL",
      "React",
      "Docker",
      "Prometheus",
      "Grafana",
      "Loki",
      "Spring Boot Actuator",
    ],
    image: "images/project-logitrack.jpg",
  },
  {
    id: "assetpilot",
    index: "03",
    techs: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "React",
      "MySQL",
      "Docker",
      "Docker Compose",
    ],
    image: "images/project-assetpilot.jpg",
  },
];

export type TimelineItem = {
  id: string;
  period: string;
  place: string;
  tags: string[];
};

export const TIMELINE: TimelineItem[] = [
  {
    id: "fullstack",
    period: "2025 — 2026",
    place: "École Numérique Ahmed Al Hansali",
    tags: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    id: "licence",
    period: "2023 — 2024",
    place: "Institut National des Sciences de l'Archéologie et du Patrimoine",
    tags: ["parcours.skills.analyse", "parcours.skills.rigueur", "parcours.skills.recherche"],
  },
];

export type WhyCard = { icon: string };

export const WHY_CARDS: WhyCard[] = [
  { icon: "code" },
  { icon: "shield" },
  { icon: "team" },
  { icon: "chat" },
  { icon: "puzzle" },
  { icon: "spark" },
  { icon: "bolt" },
  { icon: "flame" },
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