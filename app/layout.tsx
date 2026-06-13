import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import Script from "next/script";
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

const googleAnalyticsId = "G-4N79KF9DQN";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl("/")),
  title: "Shivansh Sharma | AI Product Engineer — React Native, Next.js, TypeScript",
  description:
    "Shivansh Sharma is an AI product engineer who builds and ships production AI-powered apps fast. React Native, Next.js, TypeScript, Supabase. Available for remote work.",
  keywords: [
    "Shivansh Sharma",
    "AI Product Engineer",
    "Shivansh Sharma AI Engineer",
    "Shivansh Sharma React Native Developer",
    "Shivansh Sharma Next.js Developer",
    "AI MVP Engineer",
    "React Native Engineer",
    "Frontend Engineer India",
    "Remote AI Product Engineer",
  ],
  alternates: {
    canonical: canonicalUrl("/"),
  },
  openGraph: {
    title: "Shivansh Sharma | AI Product Engineer — React Native, Next.js, TypeScript",
    description:
      "I build AI-powered products that ship. React Native · Next.js · TypeScript · Supabase. Available for founders building AI MVPs.",
    url: canonicalUrl("/"),
    siteName: "Shivansh Sharma",
    type: "profile",
    images: [
      {
        url: canonicalUrl("/shivansh-og.webp"),
        width: 1200,
        height: 630,
        alt: "Shivansh Sharma — AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Sharma | AI Product Engineer — React Native, Next.js, TypeScript",
    description:
      "I build AI-powered products that ship. React Native · Next.js · TypeScript · Supabase. Available for founders building AI MVPs.",
    images: [
      {
        url: canonicalUrl("/shivansh-og.webp"),
        width: 1200,
        height: 630,
        alt: "Shivansh Sharma — AI Product Engineer",
      },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivansh Sharma",
  url: canonicalUrl("/"),
  jobTitle: "AI Product Engineer",
  description:
    "AI product engineer building and shipping production-grade apps with React Native, Next.js, TypeScript, and Supabase.",
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
      </head>
      <body className="flex min-h-full flex-col">
        <PortfolioShell>{children}</PortfolioShell>
      </body>
      <Script id="theme-init" strategy="beforeInteractive">{`
        try {
          const storedTheme = localStorage.getItem("portfolio-color-theme");
          if (storedTheme === "light") {
            document.documentElement.classList.remove("dark");
          } else {
            document.documentElement.classList.add("dark");
          }
        } catch {}
      `}</Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}');
        `}
      </Script>
    </html>
  );
}
