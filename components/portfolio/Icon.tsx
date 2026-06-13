import {
  Archive,
  Briefcase,
  ChevronLeft,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  Link,
  Mail,
  Microscope,
  Moon,
  PenTool,
  Phone,
  Printer,
  Rocket,
  Smartphone,
  Sun,
  User,
  type LucideIcon,
} from "lucide-react";

const icons = {
  archive: Archive,
  briefcase: Briefcase,
  "chevron-left": ChevronLeft,
  code: Code2,
  curriculum: FileText,
  external: ExternalLink,
  figma: PenTool,
  github: Code2,
  globe: Globe,
  instagram: Link,
  linkedin: Link,
  link: Link,
  mail: Mail,
  moon: Moon,
  phone: Phone,
  print: Printer,
  projects: GitBranch,
  research: Microscope,
  rocket: Rocket,
  smartphone: Smartphone,
  sun: Sun,
  user: User,
} satisfies Record<string, LucideIcon>;

export type PortfolioIconName = keyof typeof icons;

type IconProps = {
  name: PortfolioIconName;
  className?: string;
};

export function Icon({ name, className = "" }: IconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon aria-hidden="true" className={className} strokeWidth={1.8} />;
}
