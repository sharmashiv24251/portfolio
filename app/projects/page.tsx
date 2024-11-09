import MyProjects from "@/components/MyProjects";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-full container mt-10">
      <TextGenerateEffect words="My Projects" />
      <MyProjects />
    </div>
  );
};

export default Projects;
