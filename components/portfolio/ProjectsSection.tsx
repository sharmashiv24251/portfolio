import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/portfolio";
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
  const video = "video" in project ? (project.video as string | undefined) : undefined;

  if ("featured" in project && project.featured) {
    return (
      <Link
        className="group flex h-full flex-col border border-stone-950 bg-white p-5 [transition:transform_150ms_cubic-bezier(0.23,1,0.32,1)] hover:bg-stone-50 active:scale-[0.98] dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a] sm:p-6"
        href={project.href}
        prefetch
        transitionTypes={["portfolio-page"]}
      >
        <div className="flex flex-1 flex-col gap-6 md:flex-row 2xl:flex-col">
          <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-[#333333] md:w-2/5 md:self-start 2xl:w-full">
            {video ? (
              <video
                autoPlay
                className="absolute inset-0 h-full w-full object-cover"
                loop
                muted
                playsInline
                src={video}
              />
            ) : (
              <Image
                alt={project.imageAlt}
                className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                src={project.image}
              />
            )}
          </div>

          <div className="flex flex-1 flex-col">
            <h3 className="mb-2 font-serif text-xl font-semibold text-stone-950 underline-offset-4 group-hover:underline dark:text-white 2xl:text-[1.65rem]">
              {project.title}
            </h3>
            <p className="mb-6 flex-1 leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">
              {project.description}
            </p>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      className="group flex h-full flex-col border border-stone-950 bg-white p-5 [transition:transform_150ms_cubic-bezier(0.23,1,0.32,1)] hover:bg-stone-100 active:scale-[0.98] dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a] sm:p-6 2xl:p-6"
      href={project.href}
      prefetch
      transitionTypes={["portfolio-page"]}
    >
      <div className="relative mb-4 aspect-video overflow-hidden bg-stone-100 dark:bg-[#333333]">
        <Image
          alt={project.imageAlt}
          className="object-cover"
          fill
          sizes="(min-width: 768px) 360px, 100vw"
          src={project.image}
        />
      </div>

      <h3 className="mb-2 font-serif text-xl font-semibold text-stone-950 underline-offset-4 group-hover:underline dark:text-white 2xl:text-[1.65rem]">{project.title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">{project.description}</p>

      <div className="mt-auto border-t border-stone-200 pt-4 dark:border-[#333333] 2xl:pt-5">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function ProjectsSection() {
  const featuredProject = projects.find((p) => "featured" in p && p.featured);
  const regularProjects = projects.filter((p) => !("featured" in p && p.featured)).slice(0, 2);

  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="projects">
      <SectionHeading>Selected Projects</SectionHeading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-6">
        {featuredProject && (
          <div className="md:col-span-2 2xl:col-span-1 2xl:contents">
            <ProjectCard project={featuredProject} />
          </div>
        )}
        {regularProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
