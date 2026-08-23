import { AboutSection } from "@/components/portfolio/AboutSection";
import { ContributionsSection } from "@/components/portfolio/ContributionsSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { FeaturedWorkSection } from "@/components/portfolio/FeaturedWorkSection";
import { Hero } from "@/components/portfolio/Hero";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWorkSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <EducationSection />
      <ContributionsSection />
    </>
  );
}
