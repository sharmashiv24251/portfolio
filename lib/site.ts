export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.shivansh.pro";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Prefixes a root-relative local asset path with the deploy basePath
 * (e.g. "/portfolio" on GitHub Pages). `next/image` only does this
 * automatically for static imports, not string srcs, and images.unoptimized
 * (required for static export) drops the prefix entirely otherwise.
 */
export function assetPath(path: string) {
  return path.startsWith("http") ? path : `${basePath}${path}`;
}

const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");

export function canonicalUrl(path = "/") {
  const normalizedPath = path.replace(/^\/+/, "");

  return normalizedPath
    ? `${normalizedSiteUrl}/${normalizedPath}`
    : `${normalizedSiteUrl}/`;
}
