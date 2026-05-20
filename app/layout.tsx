import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";
import { canonicalUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl("/")),
  title:
    "Shivansh Sharma | Frontend & Product Engineer — React, Next.js, React Native",
  description:
    "Shivansh Sharma is a Frontend and Product Engineer building production-grade apps with React, Next.js, and React Native. Currently at Envo, building Gud For Us.",
  keywords: [
    "Shivansh Sharma",
    "Shivansh Sharma Frontend Engineer",
    "Shivansh Sharma Full Stack Engineer",
    "Shivansh Sharma React Developer",
    "Shivansh Sharma Next.js Developer",
    "Shivansh Sharma AI Engineer",
    "Frontend Engineer",
    "Full Stack Engineer",
    "React Native Engineer",
  ],
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title:
      "Shivansh Sharma | Frontend & Product Engineer — React, Next.js, React Native",
    description:
      "Shivansh Sharma is a Frontend, Full-Stack, and Product Engineer building production-grade web, mobile, and AI-enabled apps with React, Next.js, React Native, TypeScript, and Node.js.",
    url: canonicalUrl("/"),
    siteName: "Shivansh Sharma",
    type: "profile",
    images: [
      {
        url: "/shivansh-og.webp",
        width: 1200,
        height: 630,
        alt: "Shivansh Sharma — Frontend & Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shivansh Sharma | Frontend & Product Engineer — React, Next.js, React Native",
    description:
      "Frontend, Full-Stack, and Product Engineer building production-grade web, mobile, and AI-enabled apps with React, Next.js, React Native, TypeScript, and Node.js.",
    images: ["/shivansh-og.webp"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivansh Sharma",
  url: canonicalUrl("/"),
  jobTitle: "Frontend / Product Engineer",
  description:
    "Frontend, full-stack, and AI-enabled product engineer building production-grade apps with React, Next.js, React Native, TypeScript, and Node.js.",
  worksFor: { "@type": "Organization", name: "Envo" },
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Vercel AI SDK",
    "Google Gemini",
  ],
  sameAs: [
    "https://www.linkedin.com/in/sharmashiv24251/",
    "https://github.com/sharmashiv24251",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${notoSerif.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const storedTheme = localStorage.getItem("portfolio-color-theme");
                if (storedTheme === "light") {
                  document.documentElement.classList.remove("dark");
                } else {
                  document.documentElement.classList.add("dark");
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <PortfolioShell>{children}</PortfolioShell>
      </body>
    </html>
  );
}
