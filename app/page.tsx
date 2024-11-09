import Intro from "@/components/Intro";
import ResumeLink from "@/components/ResumeLink";
import TechStack from "@/components/TechStack";
import { AuroraBackground } from "@/components/ui/aurora-background";

import React from "react";

export default function Home() {
  return (
    <AuroraBackground className="overflow-scroll">
      <div className="w-full h-full container mt-10">
        <Intro />
        <ResumeLink />
        <TechStack />
      </div>
      <span className="absolute bottom-24 hidden md:block text-white/50">
        navigate using 👇
      </span>
    </AuroraBackground>
  );
}
