import {
  Archive,
  Code2,
  ExternalLink,
  FileText,
  GitBranch,
  Globe,
  Link,
  Mail,
  Microscope,
  Moon,
  Phone,
  Printer,
  Rocket,
  Smartphone,
  Sun,
  type LucideIcon,
} from "lucide-react";

const icons = {
  archive: Archive,
  code: Code2,
  curriculum: FileText,
  external: ExternalLink,
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
