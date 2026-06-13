import { profileHover } from "@/data/portfolio";
import { HoverCard } from "./HoverCard";
import { Icon } from "./Icon";

export function Hero() {
  return (
    <section className="mb-16 2xl:mb-20" id="hero">
      <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-[#666666] 2xl:mb-5 2xl:text-xs">
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
          <span className="cursor-help underline decoration-stone-300 decoration-dotted underline-offset-4 hover:text-stone-700 dark:decoration-[#444444] dark:hover:text-stone-300">
            Shivansh Sharma
          </span>
        </HoverCard>
        {" · Product Engineer · India · Remote"}
      </div>

      <h1 className="mb-5 font-serif text-5xl font-bold leading-[1.1] tracking-tight text-stone-950 dark:text-white sm:text-[3.5rem] 2xl:mb-7 2xl:text-[5.25rem]">
        I build AI-powered<br className="hidden sm:block" /> products that ship.
      </h1>

      <p className="mb-8 max-w-xl leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:mb-10 2xl:max-w-2xl 2xl:text-xl">
        I help founders build and launch AI MVPs in weeks, not months.
        React Native · Next.js · TypeScript · Supabase.
      </p>

      <div className="mb-10 flex flex-wrap items-center gap-3 2xl:mb-12">
        <a
          href="mailto:hi@shivansh.pro"
          className="inline-flex items-center gap-2 border border-stone-950 bg-stone-950 px-5 py-3 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-stone-700 dark:border-white dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 2xl:px-6 2xl:py-3.5 2xl:text-sm"
        >
          Building something? Let&apos;s talk
          <Icon name="external" className="size-3.5 2xl:size-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/sharmashiv24251/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-[46px] items-center gap-2 border border-stone-950 px-4 font-serif text-xs uppercase tracking-[0.14em] text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#333333] dark:text-white dark:hover:bg-[#242424] 2xl:h-[52px] 2xl:text-sm"
        >
          <Icon name="linkedin" className="size-4 2xl:size-5" />
          LinkedIn
        </a>
        <a
          href="https://github.com/sharmashiv24251"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-[46px] items-center gap-2 border border-stone-950 px-4 font-serif text-xs uppercase tracking-[0.14em] text-stone-950 transition-colors hover:bg-stone-100 dark:border-[#333333] dark:text-white dark:hover:bg-[#242424] 2xl:h-[52px] 2xl:text-sm"
        >
          <Icon name="github" className="size-4 2xl:size-5" />
          GitHub
        </a>
      </div>

      <div className="h-px w-full bg-stone-950/20 dark:bg-[#333333]" />
    </section>
  );
}
