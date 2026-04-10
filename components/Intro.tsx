import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { workSans } from "@/app/fonts";

const Intro = () => {
  const DESC = `Frontend-leaning Full-Stack Developer building polished web and mobile products with React, Next.js, React Native, Node.js, and Tailwind CSS. I care about thoughtful UI, scalable systems, and shipping fast, responsive experiences that feel clean and reliable.`;
  const HEADING = "Shivansh Sharma";
  return (
    <>
      <TextGenerateEffect words={HEADING} />
      <p
        className={`mt-3 max-w-6xl text-white text-lg lg:text:xl xl:text-2xl font-bold leading-snug ${workSans.className}`}
      >
        {DESC}
      </p>
    </>
  );
};

export default Intro;
