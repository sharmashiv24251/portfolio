import { contactLinks, profileHover } from "@/data/portfolio";
import { HoverCard } from "./HoverCard";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="mb-16 text-center 2xl:mb-20" id="hero">
      <h1 className="mb-4 font-serif text-5xl font-bold leading-tight tracking-normal text-stone-950 dark:text-white sm:text-[3.5rem] 2xl:mb-6 2xl:text-[5.25rem]">
        <HoverCard
          content={
            <div className="flex gap-4">
              <div className="flex size-20 shrink-0 items-center justify-center border border-stone-950 bg-stone-100 font-serif text-2xl font-bold text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white 2xl:size-24 2xl:text-3xl">
                {profileHover.initials}
              </div>
              <div>
                <h2 className="font-serif text-xl font-semibold text-stone-950 dark:text-white 2xl:text-2xl">
                  {profileHover.title}
                </h2>
                <p className="mt-1 text-sm italic text-stone-600 dark:text-[#a0a0a0] 2xl:text-base">
                  {profileHover.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-base">
                  {profileHover.summary}
                </p>
              </div>
            </div>
          }
        >
          Shivansh Sharma
        </HoverCard>
      </h1>

      <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-stone-600 dark:text-[#a0a0a0] 2xl:mb-10 2xl:gap-x-8 2xl:text-lg">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            className="flex items-center gap-1.5 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-blue-700 dark:decoration-[#333333] dark:hover:text-white 2xl:gap-2"
            href={link.href}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            target={link.href.startsWith("http") ? "_blank" : undefined}
          >
            <Icon className="size-4 shrink-0 2xl:size-5" name={link.icon} />
            {link.label}
          </a>
        ))}
      </div>

      <div className="h-px w-full bg-stone-950/20 dark:bg-[#333333]" />
    </section>
  );
}
