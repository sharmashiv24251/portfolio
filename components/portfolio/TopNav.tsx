import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function TopNav() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-stone-950 bg-[#fdfcfb]/95 backdrop-blur dark:border-[#333333] dark:bg-[#1a1a1a]/95 md:hidden">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          className="font-serif text-sm font-bold uppercase tracking-[0.22em] text-stone-950 dark:text-white sm:text-xl"
          href="/"
          prefetch
          transitionTypes={["portfolio-page"]}
        >
          Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <a
            className="flex h-9 shrink-0 items-center border border-stone-950 px-3 font-serif text-xs uppercase tracking-wide transition-all hover:bg-stone-200 dark:border-[#333333] dark:text-white dark:hover:bg-[#242424] sm:h-10 sm:px-4 sm:text-sm"
            href="https://opfjwckyarxymdkzuwdk.supabase.co/storage/v1/object/public/temp-blue-bnb/shivansh-sharma-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
