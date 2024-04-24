import { MetadataRoute } from "next";

export default function robots() {
  const baseUrl = "https://good-housekeeping-clone-red.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
