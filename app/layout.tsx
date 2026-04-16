import type { Metadata } from "next";
import { sourceCodePro } from "./fonts";
import "./globals.css";
import { Dock } from "@/components/Dock";
import { ThemeProvider } from "@/components/theme-provider";

const BASE_URL = "https://sharmashiv24251.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shivansh Sharma – Full Stack Developer",
    template: "%s | Shivansh Sharma",
  },
  description:
    "Shivansh Sharma is a Frontend-leaning Full Stack Developer from Rewa, Madhya Pradesh, India. Building polished web and mobile products with React, Next.js, React Native, Node.js, and Tailwind CSS.",
  keywords: [
    "Shivansh Sharma",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Rewa",
    "Madhya Pradesh",
    "India",
    "shivanshsharma",
    "sharmashiv24251",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "Shivansh Sharma", url: BASE_URL }],
  creator: "Shivansh Sharma",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Shivansh Sharma – Full Stack Developer",
    title: "Shivansh Sharma – Full Stack Developer",
    description:
      "Portfolio of Shivansh Sharma, a Full Stack Developer from Rewa, Madhya Pradesh, India. Specializing in React, Next.js, React Native, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Sharma – Full Stack Developer",
    description:
      "Portfolio of Shivansh Sharma, a Full Stack Developer from Rewa, Madhya Pradesh, India.",
    creator: "@sharmashiv24251",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shivansh Sharma",
  jobTitle: "Full Stack Developer",
  description:
    "Frontend-leaning Full Stack Developer building polished web and mobile products with React, Next.js, React Native, Node.js, and Tailwind CSS.",
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rewa",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/sharmashiv24251",
    "https://www.linkedin.com/in/sharmashiv24251/",
    "https://www.youtube.com/@shivuwuu",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Prisma",
    "Redux",
    "Zustand",
    "Full Stack Development",
    "Frontend Development",
    "Mobile Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${sourceCodePro.className} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className={`min-h-screen text-white`}>{children}</main>
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
