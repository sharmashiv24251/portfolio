import { stack } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="stack">
      <SectionHeading>Stack</SectionHeading>

      <div className="grid gap-8 sm:grid-cols-[2fr_1fr] 2xl:gap-10">
        {/* Core stack */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400 dark:text-[#555555] 2xl:mb-4 2xl:text-xs">
            Core
          </h4>
          <ul className="space-y-2.5 2xl:space-y-3">
            {stack.core.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-stone-950 dark:text-white 2xl:text-base"
              >
                <span className="block size-1.5 shrink-0 bg-stone-950 dark:bg-white" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Secondary stack */}
        <div>
          <h4 className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400 dark:text-[#555555] 2xl:mb-4 2xl:text-xs">
            Also
          </h4>
          <ul className="space-y-2.5 2xl:space-y-3">
            {stack.secondary.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-stone-600 dark:text-[#a0a0a0] 2xl:text-base"
              >
                <span className="block size-1.5 shrink-0 bg-stone-300 dark:bg-[#444444]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
