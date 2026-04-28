"use client";

import Image from "next/image";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export type CaseStudySection = {
  title: string;
  items: string[];
};

export type CaseStudyProps = {
  title: string;
  shortDescription: string;
  valueProposition: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  video?: string;
  liveHref?: string;
  playStoreHref?: string;
  githubHref?: string;
  figmaHref?: string;
  role?: string;
  sections: CaseStudySection[];
};

function extractHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function TechPill({ label }: { label: string }) {
  return (
    <span className="border border-stone-300 bg-stone-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white 2xl:text-xs">
      {label}
    </span>
  );
}

function MetaLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-[#555555]">
      {children}
    </p>
  );
}

function SectionItem({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <li className="group flex gap-4 border border-stone-950 bg-white p-4 text-stone-600 transition-colors hover:bg-stone-50 dark:border-[#333333] dark:bg-[#242424] dark:text-[#a0a0a0] dark:hover:bg-[#2a2a2a] 2xl:p-5 2xl:text-lg">
      <span className="mt-0.5 shrink-0 font-serif text-[10px] font-semibold tracking-widest text-stone-300 dark:text-[#444444]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export function CaseStudyLayout({
  title,
  shortDescription,
  valueProposition,
  tags,
  image,
  imageAlt,
  video,
  liveHref,
  playStoreHref,
  githubHref,
  figmaHref,
  role,
  sections,
}: CaseStudyProps) {
  const isShippedProduct = !!playStoreHref;

  return (
    <article>
      {/* ── Hero ── */}
      <div className={`mb-14 grid grid-cols-1 items-start 2xl:mb-20 ${video ? "gap-10 md:grid-cols-[minmax(0,420px)_1fr] md:gap-12 lg:gap-16 2xl:gap-20" : "gap-8 xl:grid-cols-[minmax(0,420px)_1fr] xl:gap-12 2xl:gap-20"}`}>
        {/* Left — media: video or image */}
        <div
          className={`group w-full overflow-hidden border border-stone-950 bg-stone-100 dark:border-[#333333] dark:bg-[#242424] ${video ? "aspect-square mx-auto max-w-[420px] md:mx-0" : "relative aspect-video"}`}
        >
          {video ? (
            <video
              autoPlay
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              src={video}
            />
          ) : image ? (
            <Image
              alt={imageAlt || title}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              fill
              priority
              sizes="(min-width: 1280px) 420px, 100vw"
              src={image}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-stone-400 dark:text-[#555555]">
              No preview available
            </div>
          )}
        </div>

        {/* Right — meta stack */}
        <div className="flex max-w-2xl flex-col gap-5 2xl:gap-6">
          <p className="font-serif text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-[#666666]">
            {isShippedProduct ? "Case Study · Shipped Product" : "Case Study · Personal Project"}
          </p>

          <h1 className="font-serif text-4xl font-bold leading-tight text-stone-950 dark:text-white 2xl:text-5xl">
            {title}
          </h1>

          <p className="leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">
            {shortDescription}
          </p>

          <p className="border-l-2 border-stone-950 pl-4 text-sm leading-relaxed text-stone-700 dark:border-[#a0a0a0] dark:text-[#cccccc] 2xl:text-base">
            {valueProposition}
          </p>

          {/* Tech stack */}
          <div>
            <MetaLabel>Tech Stack</MetaLabel>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TechPill key={tag} label={tag} />
              ))}
            </div>
          </div>

          {/* Role */}
          {role && (
            <div>
              <MetaLabel>Role</MetaLabel>
              <p className="text-sm text-stone-700 dark:text-[#cccccc]">{role}</p>
            </div>
          )}
        </div>
      </div>

      {/* ── Links ── */}
      {(liveHref || playStoreHref || githubHref || figmaHref) && (
        <div className="mb-14 2xl:mb-20">
          <SectionHeading>Links</SectionHeading>
          <div className="flex flex-wrap gap-3">
            {playStoreHref && (
              <a
                className="group flex items-center gap-3 border border-stone-950 bg-white px-5 py-4 hover:bg-stone-50 dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a]"
                href={playStoreHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4 shrink-0 text-stone-500 dark:text-[#a0a0a0]" name="smartphone" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-stone-950 dark:text-white">
                    Google Play Store
                  </p>
                  <p className="text-[10px] text-stone-400 dark:text-[#555555]">
                    {extractHostname(playStoreHref)}
                  </p>
                </div>
                <Icon className="ml-2 size-3 shrink-0 text-stone-300 group-hover:text-stone-500 dark:text-[#444444] dark:group-hover:text-[#a0a0a0]" name="external" />
              </a>
            )}
            {liveHref && (
              <a
                className="group flex items-center gap-3 border border-stone-950 bg-white px-5 py-4 hover:bg-stone-50 dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a]"
                href={liveHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4 shrink-0 text-stone-500 dark:text-[#a0a0a0]" name="globe" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-stone-950 dark:text-white">
                    Live Demo
                  </p>
                  <p className="text-[10px] text-stone-400 dark:text-[#555555]">
                    {extractHostname(liveHref)}
                  </p>
                </div>
                <Icon className="ml-2 size-3 shrink-0 text-stone-300 group-hover:text-stone-500 dark:text-[#444444] dark:group-hover:text-[#a0a0a0]" name="external" />
              </a>
            )}
            {githubHref && (
              <a
                className="group flex items-center gap-3 border border-stone-950 bg-white px-5 py-4 hover:bg-stone-50 dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a]"
                href={githubHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4 shrink-0 text-stone-500 dark:text-[#a0a0a0]" name="github" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-stone-950 dark:text-white">
                    Source Code
                  </p>
                  <p className="text-[10px] text-stone-400 dark:text-[#555555]">
                    {extractHostname(githubHref)}
                  </p>
                </div>
                <Icon className="ml-2 size-3 shrink-0 text-stone-300 group-hover:text-stone-500 dark:text-[#444444] dark:group-hover:text-[#a0a0a0]" name="external" />
              </a>
            )}
            {figmaHref && (
              <a
                className="group flex items-center gap-3 border border-stone-950 bg-white px-5 py-4 hover:bg-stone-50 dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a]"
                href={figmaHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4 shrink-0 text-stone-500 dark:text-[#a0a0a0]" name="figma" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-stone-950 dark:text-white">
                    Figma Design
                  </p>
                  <p className="text-[10px] text-stone-400 dark:text-[#555555]">
                    figma.com
                  </p>
                </div>
                <Icon className="ml-2 size-3 shrink-0 text-stone-300 group-hover:text-stone-500 dark:text-[#444444] dark:group-hover:text-[#a0a0a0]" name="external" />
              </a>
            )}
          </div>
        </div>
      )}

      {/* ── Case study sections ── */}
      <div className="space-y-12 2xl:space-y-14">
        {sections.map((section) => (
          <div key={section.title}>
            <SectionHeading>{section.title}</SectionHeading>
            <ul className="space-y-2.5 2xl:space-y-3">
              {section.items.map((item, j) => (
                <SectionItem index={j} key={j}>
                  {item}
                </SectionItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
