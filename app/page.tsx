import Intro from "@/components/Intro";
import ResumeLink from "@/components/ResumeLink";
import { AuroraBackground } from "@/components/ui/aurora-background";

import React from "react";

export default function Home() {
  return (
    <AuroraBackground className="overflow-scroll font-worksans">
      <div className="w-full h-full container mt-10 font-worksans">
        <Intro />
        <ResumeLink />
      </div>
    </AuroraBackground>
  );
}
