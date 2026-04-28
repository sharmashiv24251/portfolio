import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function SkillsSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="skills">
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 2xl:gap-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 border-b border-stone-600 pb-1 text-xs font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:text-white 2xl:mb-4 2xl:text-base">
              {group.title}
            </h4>
            <ul className="space-y-1 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:space-y-2 2xl:text-xl">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
