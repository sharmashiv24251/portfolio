import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBrandYoutube,
  IconTerminal2,
} from "@tabler/icons-react";
import { DockLink } from "@/lib/types";

export function Dock() {
  const links: DockLink[] = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full scale-150 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full scale-150 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full scale-150 text-neutral-500 dark:text-blue-500" />
      ),
      href: "https://www.linkedin.com/in/sharmashiv24251/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full scale-150 text-neutral-500 dark:text-green-500" />
      ),
      href: "https://github.com/sharmashiv24251?tab=repositories",
    },
    {
      title: "Youtube",
      icon: (
        <IconBrandYoutube className="h-full w-full scale-150 text-neutral-500 dark:text-red-500" />
      ),
      href: "https://www.youtube.com/@shivuwuu",
    },
  ];
  return (
    <div className="fixed bottom-5 z-50 left-1/2 transform -translate-x-1/2 md:left-1/2 md:bottom-5 max-md:right-5 max-md:translate-x-0 max-md:left-auto">
      <FloatingDock items={links} />
    </div>
  );
}
