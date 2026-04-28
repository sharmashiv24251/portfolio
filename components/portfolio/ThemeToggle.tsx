"use client";

import { Icon } from "./Icon";

type ThemeToggleProps = {
  variant?: "icon" | "switch";
};

export function ThemeToggle({ variant = "icon" }: ThemeToggleProps) {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";

    const applyTheme = () => {
      root.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem("portfolio-color-theme", nextTheme);
    };

    applyTheme();
  }

  if (variant === "switch") {
    return (
      <button
        aria-label="Toggle color theme"
        className="group flex h-12 w-full items-center justify-between border border-stone-950 bg-[#fdfcfb] px-4 text-stone-950 transition-colors hover:bg-stone-200 dark:border-[#333333] dark:bg-[#242424] dark:text-white dark:hover:bg-[#333333] 2xl:h-14 2xl:px-5"
        onClick={toggleTheme}
        type="button"
      >
        <span className="font-serif text-xs font-semibold uppercase tracking-[0.18em] 2xl:text-sm">
          Theme
        </span>
        <span className="relative h-6 w-11 border border-stone-950 bg-stone-100 transition-colors dark:border-[#333333] dark:bg-[#1a1a1a] 2xl:h-7 2xl:w-12">
          <span className="absolute left-0.5 top-0.5 flex h-4.5 w-4.5 items-center justify-center bg-stone-950 text-white transition-transform duration-500 ease-out group-hover:translate-x-0.5 dark:translate-x-5 dark:bg-white dark:text-[#1a1a1a] dark:group-hover:translate-x-[1.375rem] 2xl:h-5 2xl:w-5 2xl:dark:translate-x-5">
            <Icon className="hidden size-3 dark:block" name="moon" />
            <Icon className="size-3 dark:hidden" name="sun" />
          </span>
        </span>
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-stone-950 bg-[#fdfcfb] text-stone-950 transition-colors hover:bg-stone-200 dark:border-[#333333] dark:bg-[#242424] dark:text-white dark:hover:bg-[#333333] sm:h-10 sm:w-10"
      onClick={toggleTheme}
      type="button"
    >
      <Icon className="hidden size-4 dark:block" name="sun" />
      <Icon className="size-4 dark:hidden" name="moon" />
    </button>
  );
}
