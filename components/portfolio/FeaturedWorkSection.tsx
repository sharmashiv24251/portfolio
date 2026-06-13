import Image from "next/image";
import Link from "next/link";
import { featuredWork } from "@/data/portfolio";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-stone-300 bg-stone-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white 2xl:px-2.5 2xl:text-[11px]">
      {children}
    </span>
  );
}

export function FeaturedWorkSection() {
  return (
    <section className="mb-12 2xl:mb-16" id="featured">
      <SectionHeading>Featured Work</SectionHeading>

      <div className="border border-stone-950 bg-white dark:border-[#333333] dark:bg-[#242424]">
        <div className="flex flex-col gap-0 md:flex-row">
          {/* Media */}
          <div className="relative aspect-square shrink-0 overflow-hidden bg-stone-100 dark:bg-[#333333] md:w-72 lg:w-80 2xl:w-96">
            <Image
              alt={featuredWork.imageAlt}
              className="object-cover"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              src={featuredWork.image}
            />
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              loop
              muted
              playsInline
              src={featuredWork.video}
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 2xl:p-10">
            <div>
              {/* Company / role badge */}
              <div className="mb-4 flex flex-wrap items-center gap-3 2xl:mb-5">
                <span className="border border-stone-950 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-950 dark:border-[#444444] dark:text-[#a0a0a0] 2xl:text-xs">
                  {featuredWork.role}
                </span>
                <a
                  href={featuredWork.companyHref}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500 underline decoration-stone-300 underline-offset-4 hover:text-stone-950 dark:text-[#666666] dark:decoration-[#444444] dark:hover:text-white 2xl:text-xs"
                >
                  @ {featuredWork.company}
                </a>
              </div>

              {/* Title */}
              <h3 className="mb-2 font-serif text-3xl font-bold text-stone-950 dark:text-white 2xl:text-[2.5rem]">
                {featuredWork.title}
              </h3>

              {/* Description */}
              <p className="mb-6 max-w-prose leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">
                {featuredWork.description}
              </p>

              {/* Contributions */}
              <ul className="mb-6 space-y-2 2xl:mb-8 2xl:space-y-3">
                {featuredWork.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-base"
                  >
                    <span className="mt-1.5 block size-1.5 shrink-0 bg-stone-400 dark:bg-[#555555]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2 2xl:mb-8">
                {featuredWork.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 border-t border-stone-200 pt-5 dark:border-[#333333] 2xl:pt-6">
              <a
                href={featuredWork.liveHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-stone-950 px-4 py-2.5 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#444444] dark:text-white dark:hover:bg-[#333333] 2xl:text-sm"
              >
                <Icon name="globe" className="size-3.5" />
                Live site
              </a>
              <a
                href={featuredWork.playStoreHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-stone-950 px-4 py-2.5 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#444444] dark:text-white dark:hover:bg-[#333333] 2xl:text-sm"
              >
                <Icon name="smartphone" className="size-3.5" />
                Play Store
              </a>
              <Link
                href={featuredWork.caseStudyHref}
                prefetch
                className="inline-flex items-center gap-1.5 px-4 py-2.5 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 transition-colors hover:text-stone-950 dark:text-[#666666] dark:hover:text-white 2xl:text-sm"
              >
                Full case study
                <Icon name="external" className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
