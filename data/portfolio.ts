export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Freelance", href: "#freelance" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
] as const;

export const sideNavItems = [
  { label: "Work", href: "/#work", sectionId: "work", icon: "briefcase" },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: "projects" },
  { label: "Freelance", href: "/#freelance", sectionId: "freelance", icon: "rocket" },
  { label: "Stack", href: "/#stack", sectionId: "stack", icon: "code" },
  { label: "About", href: "/#about", sectionId: "about", icon: "user" },
  { label: "Blog", href: "/blogs", icon: "archive" },
] as const;

export const contactLinks = [
  { label: "hi@shivansh.pro", href: "mailto:hi@shivansh.pro", icon: "mail" },
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
  subtitle: "AI Product Engineer",
  summary:
    "I build and ship AI-powered apps end to end — React Native, Next.js, TypeScript, Supabase. Currently at Envo, building Gud For Us.",
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

export const featuredWork = {
  title: "Gud For Us",
  company: "Envo",
  companyHref: "https://www.envo.club/",
  role: "Frontend Engineer",
  liveHref: "https://gudforus.com/",
  playStoreHref:
    "https://play.google.com/store/apps/details?id=com.app.gudforus&hl=en",
  video:
    "https://ihichdejyaeignzbnfgb.supabase.co/storage/v1/object/public/website-assets/hero-vid.mp4",
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Gud For Us AI ingredient scanner mobile app",
  tags: [
    "React Native",
    "Expo",
    "TypeScript",
    "NativeWind",
    "Supabase",
    "React Query",
    "Gemini AI",
  ],
  description:
    "A consumer-facing mobile app that scans food and cosmetic products and delivers AI-generated ingredient analysis, personalized health scores, and compatibility insights. Built and shipped at Envo.",
  contributions: [
    "Built the entire frontend using React Native (Expo + NativeWind) and TypeScript — from blank canvas to shipped app.",
    "Designed a personalized onboarding system that tailors AI-generated health scores to each user's profile.",
    "Integrated Gemini AI responses into a structured UI, normalizing variable output into consistent ingredient breakdowns.",
    "Managed all API state with React Query, reducing redundant requests and enabling optimistic, cache-aware interactions.",
  ],
  caseStudyHref: "/project/good-for-us",
};

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
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Supabase",
      "React Query",
      "Gemini AI",
    ],
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
      role: "Frontend Engineer · Built at Envo",
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
    slug: "no-stress-agents",
    title: "No Stress Agents — AI Outbound Sales Platform",
    description:
      "An AI-assisted outbound prospecting platform that finds decision-makers, researches a timely reason to reach out, verifies contact details, and drafts personalized cold email for review before it sends.",
    image: "/projects/no-stress-agents-landing.webp",
    imageAlt: "No Stress Agents marketing site hero",
    tags: ["Next.js", "TypeScript", "Supabase", "Vercel AI SDK", "Bun", "React Query", "Gemini AI"],
    href: "/project/no-stress-agents",
    liveHref: "https://nostressagents.com",
    details: [
      "Built the entire outreach dashboard (Outreach Feed, Funnel, Setup) and marketing site in Next.js, end to end.",
      "Designed and built the AI agent pipeline — discovery, ICP fit-checking, verification, research, and guardrail-checked drafting — with the Vercel AI SDK on Bun.",
      "Made Supabase the single source of truth so the product is tuned by editing data, not redeploying code.",
    ],
    caseStudy: {
      shortDescription:
        "An AI-assisted outbound prospecting platform that finds the right decision-maker, researches a timely reason to contact them, verifies their contact details, and drafts personalized cold email — with a dashboard to review, approve, and send.",
      valueProposition:
        "Replaces the manual research-and-drafting grind behind cold outbound with an autonomous agent pipeline, while keeping a human in the loop before anything goes out.",
      role: "Full-Stack Engineer · Sole Developer — frontend, AI agent, and Supabase architecture",
      gallery: [
        {
          src: "/projects/no-stress-agents-dashboard.webp",
          alt: "No Stress Agents Outreach Feed dashboard with prospect research and a drafted intro email",
        },
      ],
      sections: [
        {
          title: "Core Contribution",
          items: [
            "Built the entire outreach dashboard in Next.js — Command Center, Outreach Feed, Funnel (drag-and-drop Kanban), and Setup — plus the public marketing site, from scratch.",
            "Designed and built the AI agent pipeline (Vercel AI SDK, Bun) that runs discovery, ICP fit-checking, email verification, per-prospect research, fact-checking, and guardrail-checked drafting end to end.",
            "Built a Telegram bot integration so an operator can trigger runs and pull prospect summaries without opening the dashboard.",
          ],
        },
        {
          title: "Engineering Decisions",
          items: [
            "Made Supabase the single source of truth for both frontend and backend worker — after the initial build, behaviour changes by editing a row, not redeploying.",
            "Modeled scheduling through Postgres (pg_cron plus a run_requests queue) instead of the compute worker, so the worker only ever drains a queue and holds no scheduling logic of its own.",
            "Structured per-prospect research so every claim is either VERIFIED — source-cited and fact-checked against the actual page — or dropped before drafting.",
            "Kept the dashboard's feed and funnel views on keyset-paginated, purpose-built queries instead of one unbounded fetch, so the UI stays fast as prospect volume grows.",
          ],
        },
        {
          title: "Product Thinking",
          items: [
            "Built a self-serve onboarding flow — voice sample, offer, audience, optional site scan — that turns a few typed answers into a structured campaign brief and one real researched prospect while the user is still watching.",
            "Designed a review-before-send model: every draft opens in the user's own Gmail/Outlook or goes through an explicit approve step, so the product earns trust instead of asking users to hand over their sending reputation blind.",
            "Added a Kanban funnel and per-prospect notes and threading so a lead's status is visible at a glance across the whole pipeline.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "An AI-drafted claim about a company is only useful if it's true — solved with a fact-check pass that re-opens each cited source and downgrades any claim the page doesn't actually support.",
            "Bounding cost on grounded search meant capping discovery rounds and carrying unused 'spare' candidates into the next round instead of re-querying, since every round is real API spend.",
            "Running two independent job lanes (onboarding vs. daily outreach) on one small VM without either blocking the other required a strict one-child-per-lane concurrency model enforced at the database level.",
          ],
        },
      ],
    },
  },
  {
    slug: "imagesize-org",
    title: "imagesize.org — Image Sizing & Compression Toolkit",
    description:
      "A client-side toolkit for cropping, resizing, and compressing images to exact platform, print, and KB-limit targets — LinkedIn, social covers, exam photos — with nothing ever uploaded to a server.",
    image: "/projects/imagesize-org-home.webp",
    imageAlt: "imagesize.org homepage with the crop-and-resize tool",
    tags: ["Astro", "TypeScript", "Preact", "Tailwind CSS", "Cloudflare Workers", "nanostores"],
    href: "/project/imagesize-org",
    liveHref: "https://imagesize.org/",
    repositoryHref: "https://github.com/sharmashiv24251/imagesize.org",
    details: [
      "Built a client-side (Canvas API) crop, resize, and compression toolkit — no image ever leaves the browser.",
      "Programmatically generated dozens of SEO-targeted tool pages (platform sizes, KB compression targets, exam photo sizes) from typed content collections.",
      "Shipped on Astro's island architecture with Preact for the interactive tools, keeping most pages at close to zero JS.",
    ],
    caseStudy: {
      shortDescription:
        "A privacy-first image sizing and compression toolkit: crop and resize to an exact platform size, compress to a target file size, or just check an image's dimensions — entirely client-side, nothing uploaded.",
      valueProposition:
        "Turns a fiddly, repetitive question — what size does LinkedIn, Twitter/X, or a government exam form actually want? — into a one-click tool built to rank on the long-tail queries people actually search.",
      role: "Solo Developer — product, build, and SEO architecture",
      sections: [
        {
          title: "Core Contribution",
          items: [
            "Built the entire product solo: the crop/resize/compress tools, the platform and paper-size reference data, and the site architecture around them.",
            "Implemented all image processing client-side with the Canvas API — resize, crop, fit/stretch, and compress to a target KB — so no file is ever sent to a server.",
            "Built a ZIP export flow (JSZip) for downloading multiple resized or cropped variants of one image in a single click.",
          ],
        },
        {
          title: "Engineering Decisions",
          items: [
            "Chose Astro's island architecture specifically so tool pages ship close to zero JS by default, hydrating only the interactive crop/resize widget — keeping Core Web Vitals green without hand-tuning bundles.",
            "Used Preact and nanostores for the interactive islands instead of a full framework, sharing state (selected platform, dimensions, crop mode) across otherwise-independent islands on the same page.",
            "Modeled platforms, devices, paper sizes, and exam-photo specs as typed content collections, so the same data drives both the UI and the programmatically generated tool pages.",
            "Deployed to Cloudflare via Wrangler for edge delivery and effectively free static hosting.",
          ],
        },
        {
          title: "Product Thinking",
          items: [
            "Built dedicated pages per real intent instead of one generic calculator — compress image for LinkedIn, compress image to 100KB, Indian exam photo size — because that's how people actually search.",
            "Added an Indian-exam-specific size hub (NEET, UPSC, SSC, PAN card, signature) after noticing how rigid and inconsistent those photo requirements are across government portals.",
            "Kept the crop/resize tool's ratio, platform, and exact-size modes switchable without losing the loaded image, so exploring 'what size do I actually need' doesn't restart the user's work each time.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Generating dozens of near-duplicate size and compression pages without them reading as thin SEO spam meant giving each one a real working tool and distinct on-page copy, not just a templated number.",
            "Client-side compression to a hard KB target — rather than a quality percentage — needed an iterative encode-and-measure loop against the Canvas/WebP encoder instead of a single-pass setting.",
          ],
        },
      ],
    },
  },
];

export const freelanceWork = [
  {
    slug: "give-give",
    title: "Give-Give — Toy Exchange App",
    company: "Freelance client",
    role: "Full-Stack Mobile Engineer · Sole Developer",
    description:
      "A playful toy-exchange app for families: scan a toy with the camera, sort it into a collection, and swap it toward a real-world meetup. Built end to end from a client-provided Figma file, character and all.",
    href: "/freelance/give-give",
    mediaBackground: "#baaed2",
    images: [
      {
        src: "/freelance/give-give-home.png",
        alt: "Give-Give home screen with four chunky action buttons — eat toys, check it, swap it, meet up",
      },
      {
        src: "/freelance/give-give-collection.png",
        alt: "Give-Give toy collection screen with category chips and item rows",
      },
    ],
    tags: ["React Native", "Expo", "TypeScript", "iOS VisionKit", "Supabase", "Figma to app"],
    contributions: [
      "Built the entire React Native (Expo + TypeScript) app end to end from a provided Figma file — onboarding, camera scan, toy collection, and exchange flow.",
      "Integrated iOS VisionKit to recognize toys from real photos, turning scanning into a playful moment instead of a cold utility screen.",
      "Kept every screen's chunky, character-driven personality faithful to the Figma while wiring it to Supabase for real app data underneath.",
    ],
  },
] as const;

export const stack = {
  core: [
    "React Native · Expo · NativeWind",
    "Next.js",
    "TypeScript",
    "Supabase",
    "React Query · TanStack",
    "Redux Toolkit",
    "Tailwind CSS",
    "LLM APIs · Gemini",
  ],
  secondary: [
    "Node.js · Express",
    "Prisma · PostgreSQL",
    "D3.js · Konva.js",
    "Figma · Vercel",
  ],
};

export const about =
  "I'm a product engineer based in India, building and shipping AI-powered applications remotely. I work across the full frontend stack — React Native for mobile, Next.js for web, TypeScript, Supabase — and I own features end to end, from the first onboarding screen to production. I use AI tooling heavily to ship faster, and I care about clean architecture as much as fast delivery.";

export const education = {
  degree: "B.Tech in Electronics and Communication",
  institution: "Rewa Engineering College",
  period: "Graduated 2025",
  summary:
    "Focused on signal processing and embedded systems. Developed a deep understanding of hardware-software abstraction, which informs my current approach to performant web architectures.",
};

// Keep skillGroups as an alias for any code that references it during transition
export const skillGroups = [
  { title: "Core", skills: stack.core },
  { title: "Also", skills: stack.secondary },
];
