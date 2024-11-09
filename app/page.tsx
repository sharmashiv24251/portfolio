"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import React from "react";

export default function Home() {
  const DESC = `Frontend Developer with a flair for design, crafting beautiful, responsive interfaces using React and Tailwind CSS. Enthusiast of modern UI libraries for efficient & reusable components. Why reinvent the wheel? Let's build something stunning together!`;
  const HEADING = "Shivansh Sharma";
  return (
    <AuroraBackground className="overflow-scroll font-worksans">
      <div className="w-full h-full container mt-10 font-worksans">
        <TextGenerateEffect words={HEADING} />
        <p className="text-white text-lg lg:text:xl xl:text-2xl font-bold mt-4 font-worksans">
          {DESC}
        </p>
      </div>
    </AuroraBackground>
  );
}
