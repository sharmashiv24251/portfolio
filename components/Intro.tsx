import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { workSans } from "@/app/fonts";

const Intro = () => {
  const DESC = `Frontend Developer with a flair for design, crafting beautiful, responsive interfaces using React and Tailwind CSS. Enthusiast of modern UI libraries for efficient & reusable components. Why reinvent the wheel? Let's build something stunning together!`;
  const HEADING = "Shivansh Sharma";
  return (
    <>
      <TextGenerateEffect words={HEADING} />
      <p
        className={`text-white text-lg lg:text:xl xl:text-2xl font-bold mt-4 ${workSans.className}`}
      >
        {DESC}
      </p>
    </>
  );
};

export default Intro;
