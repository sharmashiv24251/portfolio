export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;

export const sideNavItems = [
  { label: "Experience", href: "/#experience", sectionId: "experience", icon: "research" },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: "projects" },
  { label: "Skills", href: "/#skills", sectionId: "skills", icon: "code" },
  { label: "Blog", href: "/blogs", icon: "archive" },
] as const;

export const contactLinks = [
  { label: "codersharma24251@gmail.com", href: "mailto:codersharma24251@gmail.com", icon: "mail" },
  { label: "+91 74772 13559", href: "tel:+917477213559", icon: "phone" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sharmashiv24251/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/sharmashiv24251", icon: "github" },
] as const;

export const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sharmashiv24251/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/sharmashiv24251", icon: "github" },
  { label: "Instagram", href: "https://www.instagram.com/sharmashiv24251/", icon: "instagram" },
] as const;

export const profileHover = {
  initials: "SS",
  title: "Shivansh Sharma",
  subtitle: "Frontend and full-stack engineer",
  summary:
    "I like building precise, readable interfaces with strong systems thinking, fast iteration, and a bias toward polished user experience.",
};

export const experiences = [
  {
    role: "Frontend Lead",
    organization: "Envo",
    period: "2023 - Present",
    bullets: [
      "Architected a scalable design system using React and Tailwind CSS, reducing UI development time by 40%.",
      "Spearheaded the migration of legacy dashboards to Next.js, improving PageSpeed Insights scores from 65 to 98.",
      "Mentored a team of 4 junior developers through rigorous code reviews and weekly technical seminars on state management.",
    ],
    tags: ["React", "Tailwind CSS", "Next.js"],
  },
  {
    role: "Full Stack Developer",
    organization: "Studio 137",
    period: "2021 - 2023",
    bullets: [
      "Developed a custom CMS for boutique digital agencies using Prisma and Node.js.",
      "Optimized database queries in PostgreSQL, resulting in a 2s reduction in API response latency for high-traffic endpoints.",
      "Implemented complex data visualizations using D3.js for real-time analytics dashboards.",
    ],
    tags: ["Prisma", "Node.js", "PostgreSQL", "D3.js"],
  },
  {
    role: "Software Engineering Intern",
    organization: "Tukidoo.ai",
    period: "2020 - 2021",
    bullets: [
      "Assisted in building the core UI components for an AI-driven educational platform using TypeScript.",
      "Automated end-to-end testing suites with Cypress, capturing 15+ critical bugs before production release.",
    ],
    tags: ["TypeScript", "Cypress"],
  },
];

export const companyProfiles = {
  Envo: {
    description:
      "Product engineering work focused on scalable interfaces, design systems, and dashboard performance.",
    links: [
      { label: "ENVO", href: "https://workenvo.com/" },
      { label: "GudForUs", href: "https://gudforus.com/" },
    ],
  },
  "Studio 137": {
    description:
      "Boutique full-stack development across CMS tooling, data-heavy product surfaces, and agency workflows.",
    links: [{ label: "Studio 137", href: "https://www.studio137.co.za/" }],
  },
  "Tukidoo.ai": {
    description:
      "AI education platform work with TypeScript UI components and end-to-end quality automation.",
    links: [{ label: "Tukidoo", href: "https://stage.tukidoo.ai/" }],
  },
} as const;

export const projects = [
  {
    slug: "image-layout-builder",
    title: "ImageLayoutBuilder",
    description:
      "A sophisticated grid layout engine that allows users to create print-ready layouts with sub-pixel precision. Built with React Canvas.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Code editor interface with colorful syntax highlighting",
    tags: ["React", "Canvas"],
    href: "/project/image-layout-builder",
    details: [
      "Built a precise layout editor for print-ready image compositions.",
      "Designed canvas interactions for sizing, spacing, and export flows.",
      "Focused on predictable rendering and a fast editorial workflow.",
    ],
  },
  {
    slug: "blue-bnb",
    title: "Blue BnB",
    description:
      "Full-stack luxury rental platform featuring real-time booking, secure payments through Stripe, and advanced map filtering.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern minimalist rental home with clean architecture",
    tags: ["Next.js", "Prisma"],
    href: "/project/blue-bnb",
    details: [
      "Created booking flows, listing pages, and map-driven discovery patterns.",
      "Integrated secure payment and reservation state across the stack.",
      "Optimized the interface for repeat browsing and quick comparison.",
    ],
  },
  {
    slug: "token-portfolio",
    title: "Token Portfolio",
    description:
      "A high-performance crypto asset tracker integrating multiple exchange APIs. Features automated tax reporting and tax-loss harvesting suggestions.",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Abstract digital finance visualization",
    tags: ["Redux Toolkit", "Chart.js", "Node.js"],
    href: "/project/token-portfolio",
    repositoryHref: "#",
    featured: true,
    details: [
      "Aggregated exchange data into a consolidated portfolio interface.",
      "Built performance-minded charting and reporting surfaces.",
      "Explored automated tax reporting and loss-harvesting suggestions.",
    ],
  },
];

export const blogPosts = [
  {
    title: "Designing Dense Interfaces Without Making Them Feel Heavy",
    period: "April 2026",
    summary:
      "Notes on typography, spacing, and rhythm for portfolio and product surfaces that need to carry a lot of information.",
  },
  {
    title: "What AI Coding Tools Change About Frontend Craft",
    period: "April 2026",
    summary:
      "A practical look at using assisted development workflows while keeping taste and review judgment firmly in the loop.",
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "D3.js / Canvas"],
  },
  {
    title: "UI / State",
    skills: ["Shadcn/UI", "Redux Toolkit", "Zustand", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js / Express", "Prisma ORM", "PostgreSQL", "REST / GraphQL"],
  },
  {
    title: "Tooling",
    skills: ["Figma", "Git / GitHub", "Docker", "Vercel / AWS"],
  },
];

export const education = {
  degree: "B.Tech in Electronics and Communication",
  institution: "Rewa Engineering College",
  period: "Graduated 2021",
  summary:
    "Focused on signal processing and embedded systems. Developed a deep understanding of hardware-software abstraction, which informs my current approach to performant web architectures.",
};
