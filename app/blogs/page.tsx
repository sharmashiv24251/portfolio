import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";
import { Icon } from "@/components/portfolio/Icon";
import { SectionHeading } from "@/components/portfolio/SectionHeading";
import { canonicalUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Shivansh Sharma",
  description:
    "Engineering notes from Shivansh Sharma on TypeScript, React, Next.js, frontend architecture, and practical product engineering.",
  alternates: {
    canonical: canonicalUrl("/blogs"),
  },
  openGraph: {
    title: "Blog | Shivansh Sharma",
    description:
      "Engineering notes on TypeScript, React, Next.js, frontend architecture, and practical product engineering.",
    url: canonicalUrl("/blogs"),
    siteName: "Shivansh Sharma",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Blog | Shivansh Sharma",
    description:
      "Engineering notes on TypeScript, React, Next.js, frontend architecture, and practical product engineering.",
  },
};

export default function BlogsPage() {
  return (
    <>
      <section className="mb-12">
        <div className="mb-12 border-b border-stone-950 pb-8 dark:border-[#333333] 2xl:mb-16">
          <p className="mb-3 font-serif text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-[#a0a0a0]">
            Writing
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight text-stone-950 dark:text-white 2xl:text-[5.25rem]">
            Blogs
          </h1>
        </div>

        <SectionHeading>Recent Notes</SectionHeading>

        <div className="space-y-6 2xl:space-y-8">
          {blogPosts.map((post) => (
            <Link
              className="group block border border-stone-950 bg-white p-5 dark:border-[#333333] dark:bg-[#242424] sm:p-6 2xl:p-8"
              href={`/blogs/${post.slug}`}
              key={post.slug}
            >
              <article>
                <div className="mb-3 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-[#a0a0a0] 2xl:text-sm">
                  <span>{post.period}</span>
                  <span aria-hidden="true">/</span>
                  <span>{post.readingTime}</span>
                  <span aria-hidden="true">/</span>
                  <span>Video note</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold text-stone-950 dark:text-white 2xl:text-[1.75rem]">
                  {post.title}
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-xl">
                  {post.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      className="border border-stone-300 bg-stone-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#1a1a1a] dark:text-white 2xl:text-xs"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-950 group-hover:text-stone-600 dark:text-white dark:group-hover:text-[#a0a0a0]">
                  Open article
                  <Icon className="size-3.5" name="link" />
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
