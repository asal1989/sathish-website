/**
 * Returns the basePath-aware URL for static assets in /public.
 * Required because next/image with `unoptimized: true` doesn't auto-prepend basePath.
 *
 * Usage: <Image src={asset("/logo.png")} ... />
 */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : process.env.NODE_ENV === "production"
      ? "/sathish-website"
      : "";

export function asset(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
