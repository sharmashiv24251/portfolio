import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { CaseStudyLayout, type CaseStudySection } from "@/components/portfolio/CaseStudyLayout";
import { Icon } from "@/components/portfolio/Icon";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type CaseStudyData = {
  shortDescription: string;
  valueProposition: string;
  role: string;
  sections: CaseStudySection[];
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

  const video = "video" in project ? (project.video as string | undefined) : undefined;
  const liveHref = "liveHref" in project ? (project.liveHref as string | undefined) : undefined;
  const playStoreHref = "playStoreHref" in project ? (project.playStoreHref as string | undefined) : undefined;
  const githubHref = "repositoryHref" in project ? (project.repositoryHref as string | undefined) : undefined;
  const figmaHref = "figmaHref" in project ? (project.figmaHref as string | undefined) : undefined;
  const caseStudy = "caseStudy" in project ? (project.caseStudy as CaseStudyData) : undefined;

  if (caseStudy) {
    return (
      <PortfolioShell>
        <CaseStudyLayout
          figmaHref={figmaHref}
          githubHref={githubHref}
          image={project.image}
          imageAlt={project.imageAlt}
          liveHref={liveHref}
          playStoreHref={playStoreHref}
          role={"role" in caseStudy ? (caseStudy.role as string) : undefined}
          sections={caseStudy.sections}
          shortDescription={caseStudy.shortDescription}
          tags={project.tags}
          title={project.title}
          valueProposition={caseStudy.valueProposition}
          video={video}
        />
      </PortfolioShell>
    );
  }

  return (
    <PortfolioShell>
      <article>
        <div className="mb-8 2xl:mb-12">
          <Link
            className="inline-flex items-center gap-2 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 hover:text-stone-950 dark:text-[#a0a0a0] dark:hover:text-white"
            href="/#projects"
            transitionTypes={["portfolio-page"]}
          >
            <Icon className="size-3.5" name="chevron-left" />
            Back to Projects
          </Link>
        </div>
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

          {(liveHref || playStoreHref) && (
            <div className="mt-6 flex flex-wrap gap-5">
              {playStoreHref && (
                <a
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-950 underline underline-offset-4 hover:text-stone-600 dark:text-white dark:hover:text-[#a0a0a0]"
                  href={playStoreHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Google Play Store ↗
                </a>
              )}
              {liveHref && (
                <a
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-950 underline underline-offset-4 hover:text-stone-600 dark:text-white dark:hover:text-[#a0a0a0]"
                  href={liveHref}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Site ↗
                </a>
              )}
            </div>
          )}
        </div>

        <div className="relative mb-12 aspect-video overflow-hidden border border-stone-950 bg-stone-100 dark:border-[#333333] dark:bg-[#242424] 2xl:mb-16">
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
              className="object-cover grayscale"
              fill
              priority
              sizes="(min-width: 768px) 80vw, 100vw"
              src={project.image}
            />
          )}
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
