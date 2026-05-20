import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost, type BlogBlock, type RichTextContent } from "@/data/blogs";
import { Icon } from "@/components/portfolio/Icon";
import { canonicalUrl } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

function absoluteUrl(path: string) {
  return path.startsWith("http") ? path : canonicalUrl(path);
}

function RichText({ content }: { content: RichTextContent }) {
  return (
    <>
      {content.map((part, index) =>
        typeof part === "string" ? (
          <Fragment key={index}>{part}</Fragment>
        ) : (
          <code
            className="border border-stone-300 bg-stone-100 px-1.5 py-0.5 font-mono text-[0.85em] text-stone-950 dark:border-[#333333] dark:bg-[#242424] dark:text-white"
            key={index}
          >
            {part.code}
          </code>
        ),
      )}
    </>
  );
}

function CodeBlock({ block }: { block: Extract<BlogBlock, { kind: "code" }> }) {
  return (
    <figure className="my-8 overflow-hidden border border-stone-950 bg-[#111111] dark:border-[#333333] 2xl:my-10">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
          {block.language}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-stone-100 2xl:p-5 2xl:text-base">
        <code>{block.code}</code>
      </pre>
      {block.caption && (
        <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-stone-400 2xl:text-sm">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

function BlogContentBlock({ block }: { block: BlogBlock }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="mb-6 max-w-[70ch] text-lg leading-8 text-stone-700 dark:text-[#cccccc] 2xl:text-xl 2xl:leading-9">
          <RichText content={block.content} />
        </p>
      );
    case "heading":
      return (
        <h2 className="mb-5 mt-12 font-serif text-3xl font-semibold leading-tight text-stone-950 dark:text-white 2xl:mt-16 2xl:text-4xl">
          {block.text}
        </h2>
      );
    case "code":
      return <CodeBlock block={block} />;
    case "list":
      return (
        <ul className="my-8 space-y-3 2xl:my-10">
          {block.items.map((item, index) => (
            <li
              className="flex gap-4 border border-stone-950 bg-white p-4 text-stone-700 dark:border-[#333333] dark:bg-[#242424] dark:text-[#cccccc] 2xl:p-5 2xl:text-lg"
              key={index}
            >
              <span className="mt-0.5 shrink-0 font-mono text-xs text-stone-400 dark:text-[#666666]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="leading-relaxed">
                <RichText content={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="my-8 border border-stone-950 bg-stone-100 p-5 text-lg leading-8 text-stone-800 dark:border-[#333333] dark:bg-[#242424] dark:text-white 2xl:my-10 2xl:p-6 2xl:text-xl">
          <RichText content={block.content} />
        </aside>
      );
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Shivansh Sharma",
    };
  }

  const url = canonicalUrl(`/blogs/${post.slug}`);
  const imageUrl = absoluteUrl(post.thumbnailUrl);

  return {
    title: `${post.title} | Shivansh Sharma`,
    description: post.summary,
    alternates: {
      canonical: url,
    },
    authors: [{ name: post.author, url: canonicalUrl("/") }],
    keywords: [
      "TypeScript never type",
      "TypeScript exhaustive checks",
      "discriminated unions",
      "frontend type safety",
      ...post.tags,
    ],
    openGraph: {
      title: post.title,
      description: post.summary,
      url,
      siteName: "Shivansh Sharma",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1280,
          height: 720,
          alt: post.thumbnailAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const url = canonicalUrl(`/blogs/${post.slug}`);
  const imageUrl = absoluteUrl(post.thumbnailUrl);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.summary,
        image: imageUrl,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Person",
          name: post.author,
          url: canonicalUrl("/"),
        },
        publisher: {
          "@type": "Person",
          name: post.author,
          url: canonicalUrl("/"),
        },
        mainEntityOfPage: url,
        url,
        keywords: post.tags.join(", "),
      },
      {
        "@type": "VideoObject",
        name: post.title,
        description: post.summary,
        thumbnailUrl: [imageUrl],
        uploadDate: post.publishedAt,
        embedUrl: post.videoEmbedUrl,
        contentUrl: post.videoUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article className="mx-auto max-w-5xl">
        <div className="mb-8 2xl:mb-12">
          <Link
            className="inline-flex items-center gap-2 font-serif text-xs font-semibold uppercase tracking-[0.14em] text-stone-500 hover:text-stone-950 dark:text-[#a0a0a0] dark:hover:text-white"
            href="/blogs"
          >
            <Icon className="size-3.5" name="chevron-left" />
            Back to Blog
          </Link>
        </div>

        <header className="mb-8 border-b border-stone-950 pb-8 dark:border-[#333333] 2xl:mb-12 2xl:pb-12">
          <p className="mb-3 font-serif text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 dark:text-[#a0a0a0]">
            TypeScript Note
          </p>
          <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-stone-950 dark:text-white sm:text-5xl 2xl:text-[5.25rem]">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-600 dark:text-[#a0a0a0] 2xl:text-2xl 2xl:leading-10">
            {post.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-stone-500 dark:text-[#a0a0a0] 2xl:text-sm">
            <span>{post.period}</span>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                className="border border-stone-300 bg-stone-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-stone-950 dark:border-[#333333] dark:bg-[#242424] dark:text-white"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section className="overflow-hidden border border-stone-950 bg-white dark:border-[#333333] dark:bg-[#242424]">
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video w-full"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            src={post.videoEmbedUrl}
            title={post.title}
          />
          <div className="flex flex-col gap-2 border-t border-stone-950 px-4 py-4 dark:border-[#333333] sm:flex-row sm:items-center sm:justify-between 2xl:px-5">
            <span className="font-serif text-sm font-semibold uppercase tracking-[0.14em] text-stone-950 dark:text-white">
              YouTube video
            </span>
            <a
              className="break-all font-mono text-xs text-stone-500 hover:text-stone-950 dark:text-[#a0a0a0] dark:hover:text-white"
              href={post.videoUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {post.videoUrl}
            </a>
          </div>
        </section>

        <div className="mt-12 grid gap-10 xl:grid-cols-[minmax(0,1fr)_220px] 2xl:mt-16 2xl:gap-14">
          <div>
            {post.blocks.map((block, index) => (
              <BlogContentBlock block={block} key={index} />
            ))}
          </div>

          <aside className="hidden xl:block">
            <div className="sticky top-20 border-t border-stone-950 pt-4 dark:border-[#333333]">
              <p className="mb-4 font-serif text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-[#a0a0a0]">
                In This Note
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    className="border border-stone-300 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-600 dark:border-[#333333] dark:text-[#a0a0a0]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                className="inline-flex w-full items-center justify-between gap-3 border border-stone-950 bg-white px-4 py-3 font-serif text-xs font-semibold uppercase tracking-[0.12em] text-stone-950 hover:bg-stone-100 dark:border-[#333333] dark:bg-[#242424] dark:text-white dark:hover:bg-[#333333]"
                href={post.videoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Watch Video
                <Icon className="size-3.5" name="external" />
              </a>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
