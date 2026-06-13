import { companyProfiles, experiences } from "@/data/portfolio";
import { HoverCard } from "./HoverCard";
import { SectionHeading } from "./SectionHeading";

function highlightTags(text: string, tags: string[]) {
  const matches = tags.filter((tag) => text.includes(tag));

  if (matches.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${matches.map(escapeRegExp).join("|")})`, "g");

  return text.split(pattern).map((part, index) =>
    matches.includes(part) ? (
      <span key={`${part}-${index}`} className="bg-stone-100 px-1 font-mono text-stone-950 dark:bg-[#242424] dark:text-white">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function ExperienceSection() {
  return (
    <section className="mb-12 scroll-mt-24 2xl:mb-16" id="work">
      <SectionHeading>Work</SectionHeading>

      <div className="space-y-10 2xl:space-y-14">
        {experiences.map((experience) => (
          <article key={`${experience.role}-${experience.organization}`}>
            <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between 2xl:mb-3">
              <h3 className="font-serif text-xl font-semibold text-stone-950 dark:text-white 2xl:text-[1.75rem]">
                {experience.role} @{" "}
                <CompanyHover name={experience.organization} />
              </h3>
              <span className="font-mono text-sm text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">{experience.period}</span>
            </div>

            <ul className="ml-5 list-disc space-y-2 leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:ml-6 2xl:space-y-3 2xl:text-xl">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{highlightTags(bullet, experience.tags)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompanyHover({ name }: { name: string }) {
  const company = companyProfiles[name as keyof typeof companyProfiles];

  if (!company) {
    return name;
  }

  return (
    <HoverCard
      align="left"
      content={
        <div>
          <h4 className="font-serif text-xl font-semibold text-stone-950 dark:text-white 2xl:text-2xl">
            {name}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-base">
            {company.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {company.links.map((link) => (
              <a
                className="border border-stone-950 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#333333] dark:text-white dark:hover:bg-[#333333]"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      }
    >
      <span className="underline decoration-stone-300 decoration-dotted underline-offset-4 transition-colors hover:text-blue-700 dark:decoration-[#333333] dark:hover:text-white">
        {name}
      </span>
    </HoverCard>
  );
}
