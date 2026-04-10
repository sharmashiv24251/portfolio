import React from "react";
import ButtonLink from "./ButtonLink";
import { Download, Github, LucideLinkedin } from "lucide-react";

const ResumeLink = () => {
  return (
    <div className="flex gap-2">
      <ButtonLink
        animation
        link="https://drive.google.com/file/d/1Sf8hw6p6TFGOjX0xsJQ3Uzc87uuamvV1/view?usp=sharing"
      >
        <Download className="mr-2" />
        Download Resume
      </ButtonLink>
      <ButtonLink
        className="md:hidden"
        link="https://github.com/sharmashiv24251"
      >
        <Github className="text-green-400" />
      </ButtonLink>
      <ButtonLink
        className="md:hidden"
        link="https://www.linkedin.com/in/sharmashiv24251/"
      >
        <LucideLinkedin className="text-blue-400" />
      </ButtonLink>
    </div>
  );
};

export default ResumeLink;
