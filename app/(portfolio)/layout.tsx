import { PortfolioShell } from "@/components/portfolio/PortfolioShell";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PortfolioShell>{children}</PortfolioShell>;
}
