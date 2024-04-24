import { MetadataRoute } from "next";

export default function robots() {
  const baseUrl = "http://localhost:3000";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
