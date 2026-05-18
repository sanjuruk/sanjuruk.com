import { getAllBlogMetadata } from "@/lib/blogs";
import { absoluteUrl, BLOG_DESCRIPTION, SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const blogs = getAllBlogMetadata();
  const blogLinks = blogs.map((blog) => `- [${blog.title}](${absoluteUrl(`/blog/${blog.slug}`)}): ${blog.description}`);

  const lines = [
    `# ${SITE_NAME}`,
    `> ${SITE_TAGLINE} ${SITE_DESCRIPTION}`,
    "",
    "## Core pages",
    `- [Home](${absoluteUrl()}): Personal profile, current work, beliefs, and links.`,
    `- [Blog](${absoluteUrl("/blog")}): ${BLOG_DESCRIPTION}`,
    "",
    "## Blog posts",
    ...(blogLinks.length > 0 ? blogLinks : ["- No posts published yet."]),
    "",
    "## About",
    "- Sanju Lokuhitige is Cofounder & CTO at Mythril in San Francisco.",
    "- Mythril builds AI tools for creative publishing.",
    "- Topics: AI product engineering, creative publishing, startup engineering, SaaS, embedded systems.",
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
