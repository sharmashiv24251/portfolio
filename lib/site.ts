export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.shivansh.pro";

const normalizedSiteUrl = siteUrl.replace(/\/+$/, "");

export function canonicalUrl(path = "/") {
  const normalizedPath = path.replace(/^\/+/, "");

  return normalizedPath
    ? `${normalizedSiteUrl}/${normalizedPath}`
    : `${normalizedSiteUrl}/`;
}
