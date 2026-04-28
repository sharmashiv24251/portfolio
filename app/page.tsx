import { EducationSection } from "@/components/portfolio/EducationSection";
import { EditorialCursor } from "@/components/portfolio/EditorialCursor";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SideNav } from "@/components/portfolio/SideNav";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { TopNav } from "@/components/portfolio/TopNav";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfcf8] text-stone-950 selection:bg-blue-100 selection:text-blue-950 dark:bg-[#1a1a1a] dark:text-white dark:selection:bg-[#333333] dark:selection:text-white">
      <EditorialCursor />
      <TopNav />
      <SideNav />

      <div className="md:ml-56 lg:ml-64 xl:ml-72 2xl:ml-[22rem]">
        <main className="relative min-h-screen w-full overflow-visible bg-[#faf9f5] px-5 py-14 text-base dark:bg-[#1a1a1a] sm:px-8 md:px-10 md:py-16 lg:px-12 xl:px-16 2xl:px-24 2xl:py-20 2xl:text-xl">
          <Hero />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
