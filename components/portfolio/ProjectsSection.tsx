"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

type Project = (typeof projects)[number];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-stone-300 bg-stone-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white 2xl:px-2.5 2xl:text-[11px]">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const liveHref = "liveHref" in project ? (project.liveHref as string) : undefined;
  const repoHref = "repositoryHref" in project ? (project.repositoryHref as string) : undefined;

  return (
    <Link
      className="group flex h-full flex-col border border-stone-950 bg-white [transition:transform_150ms_cubic-bezier(0.23,1,0.32,1)] hover:bg-stone-50 active:scale-[0.98] dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a]"
      href={project.href}
      prefetch
    >
      <div className="relative aspect-video overflow-hidden bg-stone-100 dark:bg-[#333333]">
        <Image
          alt={project.imageAlt}
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          src={project.image}
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 2xl:p-6">
        <h3 className="mb-2 font-serif text-xl font-semibold text-stone-950 underline-offset-4 group-hover:underline dark:text-white 2xl:text-[1.65rem]">
          {project.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-base">
          {project.description}
        </p>

        <div className="mt-auto space-y-4 border-t border-stone-200 pt-4 dark:border-[#333333] 2xl:pt-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          {(liveHref || repoHref) && (
            <div className="flex flex-wrap gap-3">
              {liveHref && (
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-stone-500 dark:text-[#666666]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(liveHref, "_blank", "noreferrer");
                  }}
                >
                  <Icon name="globe" className="size-3" />
                  Live
                </span>
              )}
              {repoHref && (
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-stone-500 dark:text-[#666666]"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(repoHref, "_blank", "noreferrer");
                  }}
                >
                  <Icon name="github" className="size-3" />
                  Source
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  const personalProjects = projects.filter(
    (p) => !("featured" in p && p.featured),
  );

  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:gap-8">
        {personalProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
