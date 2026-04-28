import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function EducationSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="education">
      <SectionHeading>Education</SectionHeading>

      <div className="border border-stone-950 bg-stone-100 p-5 dark:border-[#333333] dark:bg-[#242424] sm:p-6 2xl:p-8">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center 2xl:gap-6">
          <div>
            <h3 className="font-serif text-xl font-semibold text-stone-950 dark:text-white 2xl:text-[1.75rem]">{education.degree}</h3>
            <p className="italic text-stone-950 dark:text-white 2xl:text-xl">{education.institution}</p>
          </div>
          <span className="border border-stone-300 bg-white px-3 py-1 font-mono text-sm text-stone-600 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-[#a0a0a0] 2xl:px-4 2xl:py-1.5 2xl:text-lg">
            {education.period}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:mt-5 2xl:text-xl">{education.summary}</p>
      </div>
    </section>
  );
}
