import { blogPosts } from "@/data/portfolio";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";
import { SectionHeading } from "@/components/portfolio/SectionHeading";

export default function BlogsPage() {
  return (
    <PortfolioShell>
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
            <article
              className="border border-stone-950 bg-white p-5 dark:border-[#333333] dark:bg-[#242424] sm:p-6 2xl:p-8"
              key={post.title}
            >
              <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h2 className="font-serif text-2xl font-semibold text-stone-950 dark:text-white 2xl:text-[1.75rem]">
                  {post.title}
                </h2>
                <span className="font-mono text-sm text-stone-600 dark:text-[#a0a0a0] 2xl:text-lg">
                  {post.period}
                </span>
              </div>
              <p className="leading-relaxed text-stone-600 dark:text-[#a0a0a0] 2xl:text-xl">
                {post.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PortfolioShell>
  );
}
