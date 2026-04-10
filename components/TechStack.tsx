import React from "react";
import {
  SiExpress,
  SiFigma,
  SiGit,
  SiJavascript,
  SiMantine,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import {
  TbApi,
  TbBrandFramerMotion,
  TbBrandReactNative,
  TbHierarchy3,
  TbStack2,
  TbTopologyComplex,
} from "react-icons/tb";

type SkillItem = {
  name: string;
  icon: React.ReactNode;
};

const skillGroups: {
  title: string;
  icon: React.ReactNode;
  accent: string;
  items: SkillItem[];
}[] = [
  {
    title: "Frontend",
    icon: <SiReact size={20} className="text-cyan-300" />,
    accent: "from-cyan-500/18 via-sky-500/10 to-transparent",
    items: [
      { name: "React.js", icon: <SiReact size={16} className="text-cyan-300" /> },
      { name: "Next.js", icon: <SiNextdotjs size={16} className="text-white" /> },
      {
        name: "React Native",
        icon: <TbBrandReactNative size={16} className="text-sky-300" />,
      },
      { name: "TypeScript", icon: <SiTypescript size={16} className="text-blue-300" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={16} className="text-cyan-300" /> },
      { name: "NativeWind", icon: <TbBrandFramerMotion size={16} className="text-teal-300" /> },
    ],
  },
  {
    title: "UI & State",
    icon: <TbStack2 size={20} className="text-emerald-300" />,
    accent: "from-emerald-500/18 via-teal-500/10 to-transparent",
    items: [
      { name: "Shadcn UI", icon: <TbStack2 size={16} className="text-zinc-200" /> },
      { name: "Mantine UI", icon: <SiMantine size={16} className="text-blue-200" /> },
      { name: "Redux", icon: <SiRedux size={16} className="text-fuchsia-300" /> },
      { name: "Zustand", icon: <TbTopologyComplex size={16} className="text-amber-200" /> },
      { name: "TanStack Query", icon: <TbApi size={16} className="text-orange-300" /> },
      { name: "JavaScript", icon: <SiJavascript size={16} className="text-yellow-300" /> },
    ],
  },
  {
    title: "Backend",
    icon: <SiNodedotjs size={20} className="text-lime-300" />,
    accent: "from-lime-500/18 via-green-500/10 to-transparent",
    items: [
      { name: "Node.js", icon: <SiNodedotjs size={16} className="text-green-300" /> },
      { name: "Express.js", icon: <SiExpress size={16} className="text-zinc-200" /> },
      { name: "Prisma", icon: <SiPrisma size={16} className="text-violet-300" /> },
      { name: "Supabase", icon: <SiSupabase size={16} className="text-emerald-300" /> },
      { name: "MongoDB", icon: <SiMongodb size={16} className="text-green-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={16} className="text-sky-300" /> },
      { name: "REST APIs", icon: <TbApi size={16} className="text-orange-300" /> },
    ],
  },
  {
    title: "Tooling",
    icon: <TbHierarchy3 size={20} className="text-amber-300" />,
    accent: "from-amber-500/18 via-orange-500/10 to-transparent",
    items: [
      { name: "Nx Monorepo", icon: <TbHierarchy3 size={16} className="text-amber-300" /> },
      { name: "Git", icon: <SiGit size={16} className="text-orange-300" /> },
      { name: "Figma", icon: <SiFigma size={16} className="text-pink-300" /> },
      { name: "Vite", icon: <SiVite size={16} className="text-violet-300" /> },
      { name: "Vercel", icon: <SiVercel size={16} className="text-white" /> },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="mt-6 md:mt-7">
      <div className="grid gap-3 md:gap-4 lg:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-4 md:p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-transform duration-200 ease-out hover:-translate-y-1"
          >
            <div
              className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${group.accent} opacity-90 transition-opacity duration-200 ease-out group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                  {group.icon}
                </div>
                <h3 className="text-[1.75rem] font-semibold leading-none text-white">
                  {group.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white/80 transition-colors duration-200 ease-out hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
