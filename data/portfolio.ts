export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
] as const;

export const sideNavItems = [
  {
    label: "Experience",
    href: "/#experience",
    sectionId: "experience",
    icon: "research",
  },
  {
    label: "Projects",
    href: "/#projects",
    sectionId: "projects",
    icon: "projects",
  },
  { label: "Skills", href: "/#skills", sectionId: "skills", icon: "code" },
  { label: "Blog", href: "/blogs", icon: "archive" },
] as const;

export const contactLinks = [
  {
    label: "codersharma24251@gmail.com",
    href: "mailto:codersharma24251@gmail.com",
    icon: "mail",
  },
  { label: "+91 74772 13559", href: "tel:+917477213559", icon: "phone" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharmashiv24251/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/sharmashiv24251",
    icon: "github",
  },
] as const;

export const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sharmashiv24251/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/sharmashiv24251",
    icon: "github",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sharmashiv24251/",
    icon: "instagram",
  },
] as const;

export const profileHover = {
  initials: "SS",
  title: "Shivansh Sharma",
  subtitle: "Frontend / Product Engineer",
  summary:
    "I build and ship frontend features end-to-end using React, React Native, and Next.js,  from API integration to polished user experiences. I focus on clean architecture, real-world edge cases, and fast iteration to deliver reliable, production-ready interfaces.",
};

export const experiences = [
  {
    role: "Frontend Engineer",
    organization: "Envo",
    period: "Oct 2025 - Present",
    bullets: [
      "Building and shipping features for multiple products using React Native (Expo + NativeWind) and Next.js, handling API integration, UI, and production edge cases.",
      "Owned the frontend development of the Good For Us app, an AI-based ingredient scanner, implementing onboarding, scanning flow, and results experience.",
      "Worked with Supabase to modify database schemas and implement RPC/edge functions to support frontend requirements and optimize data fetching.",
      "Developed a Next.js admin dashboard for managing rewards, tracking user activity, and monitoring engagement.",
      "Collaborated on product decisions including feature design, data flow, and AI-driven UX.",
      "Built SEO-friendly landing pages and dynamic content pages to improve search visibility and indexing.",
    ],
    tags: ["React Native", "Expo", "NativeWind", "Next.js", "Supabase"],
  },
  {
    role: "Frontend Developer",
    organization: "Studio 137",
    period: "Jun 2025 - Sep 2025",
    bullets: [
      "Built responsive UIs from Figma using React + TypeScript, ensuring accurate and consistent implementation.",
      "Integrated REST APIs and handled loading, error, and state management flows.",
      "Developed dynamic questionnaire-based interfaces with state-driven UI logic.",
      "Focused on writing clean, maintainable, and type-safe frontend code in a service-based environment.",
    ],
    tags: ["React", "TypeScript", "Figma", "REST APIs"],
  },
  {
    role: "Frontend Intern",
    organization: "Tukidoo.ai",
    period: "Jan 2025 - Jun 2025",
    bullets: [
      "Rebuilt landing pages and dashboard UI from Figma using Next.js + TypeScript.",
      "Introduced React Query to optimize API usage and reduce redundant network calls.",
      "Collaborated with backend to define API structure and improve frontend-backend integration.",
      "Contributed to migration from React to Next.js and JavaScript to TypeScript.",
    ],
    tags: ["Next.js", "TypeScript", "React Query", "Figma"],
  },
];

export const companyProfiles = {
  Envo: {
    description:
      "Envo (Ireland). Product-focused work on consumer-facing apps and internal dashboards, including a sustainability rewards platform and an AI-powered ingredient scanner. Focused on building scalable React Native and Next.js interfaces, API integration, and supporting backend workflows with Supabase.",
    links: [
      { label: "ENVO", href: "https://www.envo.club/" },
      { label: "GudForUs", href: "https://gudforus.com/" },
    ],
  },
  "Studio 137": {
    description:
      "Studio 137 (South Africa). Worked on client-facing web applications in a service-based environment, translating Figma designs into responsive React + TypeScript interfaces and integrating APIs into production-ready features.",
    links: [{ label: "STUDIO 137", href: "https://www.studio137.co.za/" }],
  },
  "Tukidoo.ai": {
    description:
      "Tukidoo.ai (India). Contributed to building an AI-driven education platform by developing landing pages and dashboard interfaces using Next.js and TypeScript, while improving data-fetching efficiency and frontend architecture.",
    links: [{ label: "TUKIDOO", href: "https://stage.tukidoo.ai/" }],
  },
} as const;

export const projects = [
  {
    slug: "good-for-us",
    title: "Gud For Us — AI Ingredient Scanner",
    description:
      "A React Native app that analyzes food and cosmetic products using AI, providing ingredient breakdowns, health scores, and personalized compatibility insights.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Gud For Us AI Ingredient Scanner mobile app",
    video:
      "https://ihichdejyaeignzbnfgb.supabase.co/storage/v1/object/public/website-assets/hero-vid.mp4",
    liveHref: "https://gudforus.com/",
    playStoreHref:
      "https://play.google.com/store/apps/details?id=com.app.gudforus&hl=en",
    tags: ["React Native", "Expo", "TypeScript", "NativeWind", "Supabase", "React Query", "Gemini AI"],
    href: "/project/good-for-us",
    featured: true,
    details: [
      "Built the entire frontend using React Native (Expo + NativeWind) and TypeScript, including onboarding, scanning flow, and results UI.",
      "Designed a personalized onboarding system to tailor AI-driven results based on user health profile.",
      "Integrated Gemini AI to transform raw ingredient data into structured health scores and compatibility insights.",
      "Used React Query to manage API calls efficiently, reducing redundant requests and improving perceived performance.",
      "Worked with Supabase to update schemas, enable structured data access, and support a product deduplication pipeline.",
    ],
    caseStudy: {
      shortDescription:
        "AI-powered mobile app for analyzing food and cosmetic products, delivering ingredient insights, health scoring, and personalized compatibility.",
      valueProposition:
        "Helps users make better product choices by turning complex ingredient data into simple, personalized insights.",
      role: "Frontend Owner · Product Contributor",
      sections: [
        {
          title: "Core Contribution",
          items: [
            "Built the entire frontend using React Native (Expo + NativeWind) and TypeScript — from blank canvas to shipped app.",
            "Designed and implemented onboarding, product scanning flow, and results UI with a focus on clarity and speed.",
            "Implemented a personalized user flow that adjusts AI-generated results based on inputs collected during onboarding.",
          ],
        },
        {
          title: "Engineering Decisions",
          items: [
            "Adopted React Query for all API state — eliminated redundant network calls and gave the UI optimistic, cache-aware behavior.",
            "Designed product deduplication using unique slugs, preventing repeated scan entries and keeping the data layer clean.",
            "Structured Gemini AI responses into a consistent format before rendering, decoupling UI components from raw AI output variability.",
          ],
        },
        {
          title: "Product Thinking",
          items: [
            "Built a compatibility scoring system tied to the user's onboarding profile — same product, different result per user.",
            "Collaborated with backend to establish a product → article pipeline, enabling SEO-indexed content pages from scanned data.",
            "Simplified ingredient complexity into three clear UI categories (beneficial / neutral / concerning) to reduce cognitive load.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Ingredient data across product formats is highly inconsistent — solved by normalizing AI output through a strict response schema before it reaches the UI.",
            "AI responses can vary between calls for the same product — handled by caching structured results and flagging low-confidence outputs for review.",
          ],
        },
      ],
    },
  },
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
