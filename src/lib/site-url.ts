/** Return a public HTTPS origin, or undefined when configuration is unsafe. */
export function parseSiteUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value.trim());
    if (
      url.protocol !== "https:" ||
      url.username || url.password || url.pathname !== "/" || url.search || url.hash ||
      url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "[::1]"
    ) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}
