import { ContributionsSection } from "@/components/portfolio/ContributionsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { Hero } from "@/components/portfolio/Hero";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <PortfolioShell>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContributionsSection />
    </PortfolioShell>
  );
}
