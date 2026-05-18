import { MetadataRoute } from "next";
import { getAllBlogMetadata } from "@/lib/blogs";
import { absoluteUrl, SITE_UPDATED_AT } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogMetadata();

  const blogEntries = blogs.map((blog) => ({
    url: absoluteUrl(`/blog/${blog.slug}`),
    lastModified: blog.date ? new Date(blog.date) : new Date(SITE_UPDATED_AT),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    { url: absoluteUrl(), lastModified: new Date(SITE_UPDATED_AT), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/blog"), lastModified: new Date(SITE_UPDATED_AT), changeFrequency: "monthly", priority: 0.7 },
    ...blogEntries,
  ];
}
