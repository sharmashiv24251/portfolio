export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
] as const;

export const sideNavItems = [
  { label: "Work", href: "/#work", sectionId: "work", icon: "briefcase" },
  { label: "Projects", href: "/#projects", sectionId: "projects", icon: "projects" },
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
    slug: "image-layout-builder",
    title: "ImageLayoutBuilder",
    description:
      "Canvas-based layout editor built with Konva.js and Redux, handling real-time interactions, layered state, and undo/redo systems.",
    image:
      "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/canvas-project.png",
    imageAlt: "ImageLayoutBuilder canvas layout editor interface",
    tags: ["Next.js", "Konva.js", "Redux Toolkit", "Tailwind CSS"],
    href: "/project/image-layout-builder",
    liveHref: "https://canvas-app-konva.vercel.app",
    repositoryHref: "https://github.com/sharmashiv24251/canvas-app-konva",
    details: [
      "Built a canvas-based editor using Konva.js for real-time rendering and element manipulation.",
      "Implemented centralized state management using Redux Toolkit to manage elements, selection, and history.",
      "Designed interaction systems for drag, resize, rotate, and layer ordering.",
    ],
    caseStudy: {
      shortDescription:
        "A browser-based canvas editor for creating structured visual layouts with real-time interactions, layer management, and persistent state.",
      valueProposition:
        "Demonstrates handling of complex frontend state, real-time UI interactions, and performance-sensitive rendering in the browser.",
      role: "Frontend Engineer · Sole Developer",
      sections: [
        {
          title: "Core Contribution",
          items: [
            "Built a canvas-based editor using Konva.js for real-time rendering and element manipulation.",
            "Implemented centralized state management using Redux Toolkit to manage elements, selection, and history.",
            "Designed interaction systems for drag, resize, rotate, and selection across canvas elements.",
            "Developed layer management with ordering and z-index control.",
          ],
        },
        {
          title: "Engineering Decisions",
          items: [
            "Used Redux for predictable state synchronization across canvas, sidebar, and inspector panels.",
            "Implemented undo/redo using full state history tracking — each action snapshots the canvas state.",
            "Used JSON serialization for saving and restoring layouts, keeping persistence simple and portable.",
            "Leveraged Konva.js for hardware-accelerated canvas rendering to keep interactions smooth.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Maintaining consistent state across multiple UI panels (canvas, inspector, sidebar) required strict unidirectional data flow.",
            "Designing undo/redo without breaking UI synchronization — solved by snapshotting normalized Redux state slices.",
            "Managing high-frequency drag/resize events while keeping the UI responsive required debounced state commits.",
          ],
        },
        {
          title: "Key Highlights",
          items: [
            "Non-trivial interactive system built entirely in the browser — not just static UI.",
            "Demonstrates strong frontend architecture: centralized state, layered rendering, and interaction design.",
            "Persistent layout state via JSON serialization, enabling save/restore workflows without a backend.",
          ],
        },
      ],
    },
  },
  {
    slug: "token-portfolio",
    title: "Token Portfolio",
    description:
      "Interactive crypto dashboard for tracking token holdings, live prices, portfolio value, and watchlist data in a clean responsive interface.",
    image:
      "https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/token.png",
    imageAlt: "Token Portfolio crypto dashboard interface",
    tags: [
      "React + Vite",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Wagmi",
      "RainbowKit",
    ],
    href: "/project/token-portfolio",
    liveHref: "https://crypto-dashboard-taupe-theta.vercel.app/",
    repositoryHref: "https://github.com/sharmashiv24251/crypto-dashboard",
    figmaHref:
      "https://www.figma.com/design/ICYVun3vhMh7nIHzMGUqdw/Token-Portfolio?node-id=0-1&p=f&t=PMbRHAZfRdMSztS3-0",
    details: [
      "Built the dashboard UI for portfolio value, holdings, and watchlist management.",
      "Implemented token search, add-token flow, and editable holdings with live price data.",
      "Persisted user watchlist and portfolio state in local storage for cross-session continuity.",
    ],
    caseStudy: {
      shortDescription:
        "Interactive crypto dashboard for tracking token holdings, live prices, portfolio value, and watchlist data.",
      valueProposition:
        "Helps users monitor a personalized portfolio with live data, visual summaries, and real-time updates.",
      role: "Frontend Engineer · Sole Developer",
      sections: [
        {
          title: "Core Contribution",
          items: [
            "Built the dashboard UI for portfolio value, holdings, and watchlist management.",
            "Implemented token search, add-token flow, and editable holdings.",
            "Created responsive views with a clean Figma-to-code implementation.",
            "Designed the watchlist and portfolio summary interface for clarity and fast scanning.",
          ],
        },
        {
          title: "Engineering Decisions",
          items: [
            "Used Redux Toolkit for centralized state management across portfolio and watchlist.",
            "Used TanStack Query for caching and reducing unnecessary API calls to CoinGecko.",
            "Integrated CoinGecko API for live token data and price updates.",
            "Persisted user watchlist and portfolio data in local storage for cross-session continuity.",
            "Used Wagmi + RainbowKit for wallet connection flow.",
          ],
        },
        {
          title: "Product Thinking",
          items: [
            "Built a portfolio overview with a donut chart for quick visual understanding of asset allocation.",
            "Added last-updated metadata to make refresh state visible and reduce user uncertainty.",
            "Designed the watchlist for fast comparison of price, change percentage, and holdings.",
            "Focused on keeping the UI readable and efficient for data-heavy usage.",
          ],
        },
        {
          title: "Technical Highlights",
          items: [
            "Reusable UI components for buttons, modals, and inputs.",
            "Infinite scrolling search for tokens.",
            "Responsive layout with clean mobile and desktop behavior.",
            "Custom donut chart implementation for portfolio allocation.",
            "Smooth state transitions and price refresh behavior.",
          ],
        },
        {
          title: "Challenges",
          items: [
            "Keeping portfolio and watchlist state in sync across interactions.",
            "Handling live API data without unnecessary rerenders.",
            "Maintaining a clean and readable layout while showing many token metrics.",
            "Ensuring local persistence worked reliably after refresh.",
          ],
        },
      ],
    },
  },
];

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
