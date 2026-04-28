import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PortfolioShell>
      <article>
        <div className="mb-8 border-b border-stone-950 pb-8 dark:border-[#333333] 2xl:mb-12">
          <p className="mb-3 font-serif text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-[#a0a0a0]">
            Selected Project
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-stone-950 dark:text-white 2xl:text-[5.25rem]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-4xl leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-2xl">
            {project.description}
          </p>
        </div>

        <div className="relative mb-12 aspect-video overflow-hidden border border-stone-950 bg-stone-100 dark:border-[#333333] dark:bg-[#242424] 2xl:mb-16">
          <Image
            alt={project.imageAlt}
            className="object-cover grayscale"
            fill
            priority
            sizes="(min-width: 768px) 80vw, 100vw"
            src={project.image}
          />
        </div>

        <SectionHeading>Project Notes</SectionHeading>

        <div className="grid gap-4 md:grid-cols-3 2xl:gap-6">
          {project.details.map((detail) => (
            <div
              className="border border-stone-950 bg-white p-5 text-stone-600 dark:border-[#333333] dark:bg-[#242424] dark:text-[#a0a0a0] 2xl:p-6 2xl:text-xl"
              key={detail}
            >
              {detail}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 2xl:mt-12 2xl:gap-3">
          {project.tags.map((tag) => (
            <span
              className="border border-stone-300 bg-stone-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </PortfolioShell>
  );
}
