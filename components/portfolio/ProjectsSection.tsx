import Image from "next/image";
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
  if (project.featured) {
    return (
      <article className="group border border-stone-950 bg-white p-5 transition-all hover:bg-stone-100 dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a] sm:p-6 md:col-span-2 2xl:col-span-1 2xl:p-6">
        <div className="flex flex-col gap-6 md:flex-row 2xl:flex-col">
          <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-[#333333] md:w-1/3 2xl:aspect-video 2xl:w-full">
            <Image
              alt={project.imageAlt}
              className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
              fill
              sizes="(min-width: 768px) 260px, 100vw"
              src={project.image}
            />
          </div>

          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 font-serif text-xl font-semibold text-stone-950 dark:text-white 2xl:text-[1.65rem]">{project.title}</h3>
            <p className="mb-6 leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">{project.description}</p>

            <div className="mt-auto flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between 2xl:items-start">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="flex gap-4">
                {project.repositoryHref ? (
                  <a className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] hover:underline dark:text-white 2xl:text-xs" href={project.repositoryHref}>
                    GitHub <Icon className="size-3.5" name="github" />
                  </a>
                ) : null}
                <a className="flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.08em] hover:underline dark:text-white 2xl:text-xs" href={project.href}>
                  Live Demo <Icon className="size-3.5" name="rocket" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col border border-stone-950 bg-white p-5 transition-all hover:bg-stone-100 dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a] sm:p-6 2xl:p-6">
      <div className="relative mb-4 aspect-video overflow-hidden bg-stone-100 dark:bg-[#333333]">
        <Image
          alt={project.imageAlt}
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          src={project.image}
        />
      </div>

      <h3 className="mb-2 font-serif text-xl font-semibold text-stone-950 dark:text-white 2xl:text-[1.65rem]">{project.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">{project.description}</p>

      <div className="mt-auto flex items-center justify-between border-t border-stone-200 pt-4 dark:border-[#333333] 2xl:pt-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <a aria-label={`Open ${project.title}`} className="text-stone-950 transition-colors hover:text-blue-700 dark:text-white dark:hover:text-[#a0a0a0]" href={project.href}>
          <Icon className="size-5 2xl:size-5" name="external" />
        </a>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="projects">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
