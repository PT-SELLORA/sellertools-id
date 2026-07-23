import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sellertools.id/sitemap.xml",
    host: "https://sellertools.id",
  };
}
