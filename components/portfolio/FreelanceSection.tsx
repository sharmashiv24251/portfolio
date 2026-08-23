import Image from "next/image";
import Link from "next/link";
import { freelanceWork } from "@/data/portfolio";
import { assetPath } from "@/lib/site";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-stone-300 bg-stone-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white 2xl:px-2.5 2xl:text-[11px]">
      {children}
    </span>
  );
}

export function FreelanceSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="freelance">
      <SectionHeading>Freelance</SectionHeading>
      <div className="space-y-6 2xl:space-y-8">
        {freelanceWork.map((item) => (
          <Link
            className="group flex flex-col border border-stone-950 bg-white [transition:transform_150ms_cubic-bezier(0.23,1,0.32,1)] hover:bg-stone-50 active:scale-[0.99] dark:border-[#333333] dark:bg-[#242424] dark:hover:bg-[#2a2a2a] md:flex-row"
            href={item.href}
            key={item.slug}
            prefetch
          >
            {/* Media: square panel, two overlapping phone mockups */}
            <div
              className="relative aspect-square shrink-0 overflow-hidden md:w-72 lg:w-80 2xl:w-96"
              style={{ background: item.mediaBackground }}
            >
              <div className="absolute left-[38%] top-1/2 h-[80%] -translate-x-1/2 -translate-y-1/2 -rotate-6 aspect-[1419/2796] drop-shadow-xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[54%] group-hover:rotate-[-9deg]">
                <Image
                  alt={item.images[0].alt}
                  className="object-contain"
                  fill
                  sizes="200px"
                  src={assetPath(item.images[0].src)}
                />
              </div>
              <div className="absolute left-[64%] top-[54%] h-[80%] -translate-x-1/2 -translate-y-1/2 rotate-6 aspect-[1419/2796] drop-shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[-46%] group-hover:rotate-[9deg]">
                <Image
                  alt={item.images[1].alt}
                  className="object-contain"
                  fill
                  sizes="200px"
                  src={assetPath(item.images[1].src)}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 2xl:p-10">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3 2xl:mb-5">
                  <span className="border border-stone-950 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-950 dark:border-[#444444] dark:text-[#a0a0a0] 2xl:text-xs">
                    {item.role}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-500 dark:text-[#666666] 2xl:text-xs">
                    {item.company}
                  </span>
                </div>

                <h3 className="mb-2 font-serif text-3xl font-bold text-stone-950 underline-offset-4 group-hover:underline dark:text-white 2xl:text-[2.5rem]">
                  {item.title}
                </h3>

                <p className="mb-6 max-w-prose leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">
                  {item.description}
                </p>

                <ul className="mb-6 space-y-2 2xl:mb-8 2xl:space-y-3">
                  {item.contributions.map((point) => (
                    <li
                      className="flex gap-3 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-base"
                      key={point}
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 bg-stone-400 dark:bg-[#555555]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mb-6 flex flex-wrap gap-2 2xl:mb-8">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 border-t border-stone-200 pt-5 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 transition-colors group-hover:text-stone-950 dark:border-[#333333] dark:text-[#666666] dark:group-hover:text-white 2xl:pt-6 2xl:text-sm">
                See the build
                <Icon className="size-3.5" name="external" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
