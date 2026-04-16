import MyProjects from "@/components/MyProjects";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects by Shivansh Sharma – Full Stack Developer from Rewa, India. Includes Gud For Us (AI health scanner), ImageLayoutBuilder (canvas design tool), Token Portfolio (crypto tracker), and Blue-BnB (Airbnb clone).",
  alternates: {
    canonical: "/projects",
  },
};

const Projects = () => {
  return (
    <div className="w-full h-full container mt-10">
      <TextGenerateEffect words="My Projects" />
      <MyProjects />
    </div>
  );
};

export default Projects;
