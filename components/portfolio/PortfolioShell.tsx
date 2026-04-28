import { ViewTransition } from "react";
import { Footer } from "./Footer";
import { RoutePreloader } from "./RoutePreloader";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";

type PortfolioShellProps = {
  children: React.ReactNode;
};

export function PortfolioShell({ children }: PortfolioShellProps) {
  return (
    <div className="min-h-screen bg-[#fdfcf8] text-stone-950 selection:bg-blue-100 selection:text-blue-950 dark:bg-[#1a1a1a] dark:text-white dark:selection:bg-[#333333] dark:selection:text-white">
      <RoutePreloader />
      <TopNav />
      <SideNav />

      <div className="md:ml-56 lg:ml-64 xl:ml-72 2xl:ml-[22rem]">
        <ViewTransition default="portfolio-page">
          <main className="relative min-h-screen w-full overflow-visible bg-[#faf9f5] px-5 py-14 text-base dark:bg-[#1a1a1a] sm:px-8 md:px-10 md:py-16 lg:px-12 xl:px-16 2xl:px-24 2xl:py-20 2xl:text-xl">
            {children}
          </main>
        </ViewTransition>

        <Footer />
      </div>
    </div>
  );
}
