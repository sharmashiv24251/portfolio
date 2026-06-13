import { about } from "@/data/portfolio";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="about">
      <SectionHeading>About</SectionHeading>

      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:gap-12 2xl:gap-16">
        {/* About text */}
        <p className="max-w-prose leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-xl">
          {about}
        </p>

        {/* Contact CTA */}
        <div className="flex flex-col gap-4 md:min-w-[220px] md:max-w-xs 2xl:min-w-[260px]">
          <div className="border border-stone-950 p-5 dark:border-[#333333] 2xl:p-6">
            <p className="mb-4 font-serif text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 dark:text-white 2xl:text-sm">
              Building an AI product?
            </p>
            <a
              href="mailto:hi@shivansh.pro"
              className="mb-4 flex items-center justify-between gap-2 border border-stone-950 bg-stone-950 px-4 py-3 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-stone-700 dark:border-white dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 2xl:text-sm"
            >
              hi@shivansh.pro
              <Icon name="mail" className="size-3.5 shrink-0" />
            </a>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/sharmashiv24251/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 flex-1 items-center justify-center border border-stone-950 text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#333333] dark:text-white dark:hover:bg-[#333333] 2xl:h-10"
              >
                <Icon name="linkedin" className="size-4 2xl:size-5" />
              </a>
              <a
                href="https://github.com/sharmashiv24251"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 flex-1 items-center justify-center border border-stone-950 text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#333333] dark:text-white dark:hover:bg-[#333333] 2xl:h-10"
              >
                <Icon name="github" className="size-4 2xl:size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
