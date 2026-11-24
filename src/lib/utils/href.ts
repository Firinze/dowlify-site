export function withBase(path: string): string {
  if (!path) return "/";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  ) {
    return path;
  }
  const rawBase = import.meta.env.BASE_URL || "/";
  const base = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;
  if (path.startsWith("#")) {
    return base ? `${base}/${path}` : `/${path}`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}
