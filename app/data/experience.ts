// data/experience.ts
export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  startDate: string; // "YYYY-MM"
  endDate?: string;  // "YYYY-MM" or "present"
  location?: string;
  isRemote?: boolean;
  isFreelance?: boolean;
  tech?: string[];
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "trust-gym",
    company: "Trust-gym",
    role: "Full Stack Developer",
    startDate: "2024-06",
    endDate: "2025-08",
    location: "Tunis, Tunisia",
    isFreelance: true,
    tech: ["NestJS", "PostgreSQL", "Next.js", "NextAuth", "i18n"],
    bullets: [
      "Built a multitenant gym membership & store management app.",
      "Implemented secure authentication and RBAC with NextAuth.",
      "Designed RESTful APIs for subscriptions, invoices, and products.",
      "Added full i18n support (Arabic & French).",
    ],
  },
  {
    id: "aigot",
    company: "Aigot",
    role: "Full Stack Developer",
    startDate: "2022-12",
    endDate: "2024-03",
    location: "Italy",
    isRemote: true,
    tech: ["Express.js", "Google APIs", "Meta Pages API"],
    bullets: [
      "Migrated .NET microservices to Express.js, reducing hosting costs.",
      "Maintained and upgraded Google APIs (Maps, Analytics, Search Console, etc.).",
      "Implemented META Pages API for marketing insights.",
      "Built restaurant reservation & seating management module for production.",
    ],
  },
  {
    id: "groupado",
    company: "Groupado",
    role: "Frontend Developer Intern",
    startDate: "2022-08",
    endDate: "2022-11",
    location: "Tunis, Tunisia",
    tech: ["Next.js", "documentation.js"],
    bullets: [
      "Developed E-learning certification dashboard in Next.js.",
      "Documented frontend with documentation.js.",
    ],
  },
  {
    id: "attijari",
    company: "Attijari Bank",
    role: "Full Stack Developer Intern",
    startDate: "2020-02",
    endDate: "2020-09",
    location: "Tunis, Tunisia",
    tech: ["Spring", "PrimeFaces", "Hibernate", "PL/SQL", "JasperReports"],
    bullets: [
      "Developed document management module using Spring, Primefaces, Hibernate, JasperReports, and PLSQL.",
    ],
  },
];
