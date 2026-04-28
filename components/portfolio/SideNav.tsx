"use client";

import { useEffect, useState } from "react";
import { sideNavItems } from "@/data/portfolio";
import { Icon } from "./Icon";
import { ThemeToggle } from "./ThemeToggle";

type SideNavHref = (typeof sideNavItems)[number]["href"];

export function SideNav() {
  const [activeHref, setActiveHref] = useState<SideNavHref>(sideNavItems[0].href);

  useEffect(() => {
    const sectionIds = sideNavItems.map((item) => item.href.slice(1));

    function updateActiveSection() {
      const readingLine = window.innerHeight * 0.32;
      const activeSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return current;
        }

        const sectionTop = section.getBoundingClientRect().top;
        return sectionTop <= readingLine ? sectionId : current;
      }, sectionIds[0]);

      setActiveHref(`#${activeSection}` as SideNavHref);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <aside className="no-print fixed left-0 top-0 hidden h-full w-56 flex-col border-r border-stone-950 bg-[#fdfcfb] pt-7 dark:border-[#333333] dark:bg-[#1a1a1a] md:flex lg:w-64 xl:w-72 xl:pt-8 2xl:w-[22rem] 2xl:pt-12">
      <div className="px-5 lg:px-6 2xl:px-8">
        <a
          className="font-serif text-lg font-bold uppercase tracking-[0.18em] text-stone-950 dark:text-white lg:text-xl lg:tracking-[0.22em] 2xl:text-2xl"
          href="#hero"
        >
          Portfolio
        </a>
      </div>

      <nav className="mt-8 2xl:mt-10">
        {sideNavItems.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <a
              aria-current={isActive ? "true" : undefined}
              key={item.href}
              className={`flex items-center gap-2 px-5 py-3 font-serif text-xs uppercase tracking-[0.14em] transition-all lg:gap-3 lg:px-6 lg:tracking-[0.18em] 2xl:gap-4 2xl:px-8 2xl:py-4 2xl:text-sm ${
                isActive
                  ? "border-l-4 border-stone-950 bg-stone-100 font-bold text-stone-950 dark:border-white dark:bg-[#242424] dark:text-white"
                  : "border-l-4 border-transparent text-stone-500 hover:bg-stone-100 dark:text-[#a0a0a0] dark:hover:bg-[#242424] dark:hover:text-white"
              }`}
              href={item.href}
            >
              <Icon className="size-4 shrink-0 2xl:size-5" name={item.icon} />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-auto space-y-3 px-5 pb-7 lg:px-6 lg:pb-8 2xl:space-y-4 2xl:px-8 2xl:pb-12">
        <a
          className="flex h-12 w-full items-center justify-center border border-stone-950 bg-[#fdfcfb] px-4 font-serif text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition-colors hover:bg-stone-200 dark:border-[#333333] dark:bg-[#242424] dark:text-white dark:hover:bg-[#333333] 2xl:h-14 2xl:text-sm"
          href="#"
        >
          Download Resume
        </a>
        <ThemeToggle variant="switch" />
      </div>
    </aside>
  );
}
