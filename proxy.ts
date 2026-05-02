import type { NextRequest } from "next/server";
import { estimateMarkdownTokens, markdownForPath } from "@/lib/markdown";

function acceptsMarkdown(request: NextRequest) {
  return request.headers
    .get("accept")
    ?.split(",")
    .some((value) => value.trim().toLowerCase().startsWith("text/markdown"));
}

export function proxy(request: NextRequest) {
  if (!acceptsMarkdown(request)) {
    return;
  }

  const markdown = markdownForPath(request.nextUrl.pathname);

  if (!markdown) {
    return;
  }

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept",
      "x-markdown-tokens": estimateMarkdownTokens(markdown),
    },
  });
}

export const config = {
  matcher: ["/", "/blogs", "/project/:slug"],
};
