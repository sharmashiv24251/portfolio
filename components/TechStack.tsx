import React from "react";
import Tech from "./Tech";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const techData = [
  { name: "React", icon: <SiReact size={30} className="text-teal-400" /> },
  { name: "Next.js", icon: <SiNextdotjs size={30} /> },
  {
    name: "Supabase",
    icon: <RiSupabaseFill size={30} className="text-green-500" />,
  },
  { name: "Prisma", icon: <SiPrisma size={30} /> },
  {
    name: "TypeScript",
    icon: <SiTypescript size={30} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={30} className="text-yellow-500" />,
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss size={30} className="text-blue-600" />,
  },
  { name: "GitHub", icon: <SiGit size={30} className="text-red-500" /> },
  { name: "Vercel", icon: <SiVercel size={30} /> },
];

const TechStack = () => {
  return (
    <div className=" bg-zinc-800 mt-6 min-h-40 rounded-xl py-4 border border-neutral-50/20">
      <h2 className="text-white text-3xl font-bold p-4">Tech Stack</h2>
      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-none sm:flex sm:flex-wrap sm:justify-center lg:justify-start pb-4">
        {techData.map((tech) => (
          <Tech key={tech.name} name={tech.name} icon={tech.icon} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
