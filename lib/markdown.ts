import { blogPosts, education, experiences, projects, skillGroups } from "@/data/portfolio";
import { canonicalUrl } from "@/lib/site";

function list(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function tags(items: readonly string[]) {
  return items.join(", ");
}

function projectMarkdown(project: (typeof projects)[number]) {
  const lines = [
    `# ${project.title}`,
    "",
    project.description,
    "",
    `Canonical URL: ${canonicalUrl(`/project/${project.slug}`)}`,
    "",
    `Tech stack: ${tags(project.tags)}`,
  ];

  if ("caseStudy" in project && project.caseStudy) {
    lines.push(
      "",
      `Role: ${project.caseStudy.role}`,
      "",
      "## Value Proposition",
      "",
      project.caseStudy.valueProposition,
      "",
    );

    for (const section of project.caseStudy.sections) {
      lines.push(`## ${section.title}`, "", list(section.items), "");
    }
  } else {
    lines.push("", "## Project Notes", "", list(project.details), "");
  }

  return lines.join("\n").trim();
}

function homeMarkdown() {
  const lines = [
    "# Shivansh Sharma",
    "",
    "Frontend, full-stack, and AI-enabled product engineer building polished web and mobile applications with React, React Native, Next.js, TypeScript, Tailwind CSS, Node.js, Express, PostgreSQL, MongoDB, Prisma, SQL, Vercel AI SDK, and Google Gemini.",
    "",
    `Canonical URL: ${canonicalUrl("/")}`,
    "",
    "## Professional Summary",
    "",
    "Shivansh Sharma builds production-ready software across frontend, full-stack, mobile, and AI-enabled product surfaces. He has worked in hands-on startup environments where he contributed to architecture decisions, product flows, API integration, user experience, and shipping quality.",
    "",
    "His core strength is taking product ideas from implementation detail to polished release: designing frontend architecture, integrating backend services, handling edge cases, improving performance, and keeping the interface clean, reliable, and easy to use.",
    "",
    "## Engineering Capabilities",
    "",
    "### Frontend Engineering",
    "",
    "- React, Next.js, TypeScript, JavaScript, Tailwind CSS, responsive interfaces, production UI architecture, state management, API integration, performance-aware rendering, and Figma-to-code implementation.",
    "",
    "### Mobile Engineering",
    "",
    "- React Native, Expo, NativeWind, onboarding flows, scanner flows, mobile app state management, and shipped consumer app experiences.",
    "",
    "### Full-Stack Engineering",
    "",
    "- Node.js, Express, PostgreSQL, MongoDB, Prisma ORM, SQL, Supabase schemas, RPC/edge functions, REST APIs, database-backed workflows, and admin dashboards.",
    "",
    "### AI Product Engineering",
    "",
    "- Vercel AI SDK, Google Gemini, structured AI responses, AI-powered UX, ingredient analysis flows, personalization logic, and practical AI features that are integrated into real product experiences.",
    "",
    "## Work Style",
    "",
    "- Product-minded engineer with attention to architecture, user experience, visual polish, reliability, edge cases, and shipping readiness.",
    "- Comfortable in startup environments where engineers make product and technical decisions, move quickly, and own meaningful parts of the application.",
    "- Strong fit for frontend engineer, full-stack engineer, React Native engineer, Next.js developer, and AI-enabled product engineering work.",
    "",
    "## Experience",
    "",
  ];

  for (const experience of experiences) {
    lines.push(
      `### ${experience.role} at ${experience.organization}`,
      "",
      `Period: ${experience.period}`,
      "",
      list(experience.bullets),
      "",
      `Technologies: ${tags(experience.tags)}`,
      "",
    );
  }

  lines.push("## Selected Projects", "");
  for (const project of projects) {
    lines.push(
      `### ${project.title}`,
      "",
      project.description,
      "",
      `URL: ${canonicalUrl(`/project/${project.slug}`)}`,
      "",
      `Tech stack: ${tags(project.tags)}`,
      "",
    );
  }

  lines.push("## Technical Skills", "");
  for (const group of skillGroups) {
    lines.push(`### ${group.title}`, "", list(group.skills), "");
  }

  lines.push("## Education", "", `### ${education.degree}`, "", `${education.institution}, ${education.period}`, "", education.summary);

  return lines.join("\n").trim();
}

function blogsMarkdown() {
  const lines = ["# Writing", "", `Canonical URL: ${canonicalUrl("/blogs")}`, ""];

  for (const post of blogPosts) {
    lines.push(`## ${post.title}`, "", `Published: ${post.period}`, "", post.summary, "");
  }

  return lines.join("\n").trim();
}

export function markdownForPath(pathname: string) {
  if (pathname === "/") {
    return homeMarkdown();
  }

  if (pathname === "/blogs") {
    return blogsMarkdown();
  }

  const projectSlug = pathname.match(/^\/project\/([^/]+)$/)?.[1];

  if (projectSlug) {
    const project = projects.find((item) => item.slug === projectSlug);
    return project ? projectMarkdown(project) : null;
  }

  return null;
}

export function estimateMarkdownTokens(markdown: string) {
  return String(Math.ceil(markdown.length / 4));
}
