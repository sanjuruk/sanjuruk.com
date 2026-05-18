import Link from "next/link";
import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import {
  absoluteUrl,
  BLOG_DESCRIPTION,
  PERSON_ID,
  SITE_NAME,
  WEBSITE_ID,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_DESCRIPTION,
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description: BLOG_DESCRIPTION,
    url: absoluteUrl("/blog"),
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Blog | ${SITE_NAME}`,
    description: BLOG_DESCRIPTION,
  },
  alternates: { canonical: absoluteUrl("/blog") },
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${absoluteUrl("/blog")}#page`,
        url: absoluteUrl("/blog"),
        name: `Blog | ${SITE_NAME}`,
        description: BLOG_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": `${absoluteUrl("/blog")}#posts` },
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl("/blog")}#posts`,
        numberOfItems: blogs.length,
        itemListElement: blogs.map((blog, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/blog/${blog.slug}`),
          name: blog.title,
          description: blog.description,
        })),
      },
    ],
  };

  return (
    <main className="animate-[fadeIn_0.8s_ease-out_forwards] w-full max-w-[700px] flex flex-col gap-12 mt-20 mb-20 mx-auto px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="flex flex-col gap-2">
        <Link
          href="/"
          className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm mb-2 w-fit"
        >
          ← Back to home
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Blog</h1>
        <h2 className="text-lg font-normal text-zinc-500">
          Thoughts, ideas, and occasional ramblings
        </h2>
      </header>

      <section className="flex flex-col gap-6">
        {blogs.length === 0 ? (
          <p className="text-zinc-400 text-sm">No blog posts yet.</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {blogs.map((blog) => (
              <li key={blog.slug}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="block group"
                >
                  <div className="flex flex-col gap-1">
                    <h3 className="text-zinc-300 font-medium group-hover:text-white transition-colors duration-200">
                      {blog.title}
                    </h3>
                    {blog.date && (
                      <time className="text-zinc-500 text-sm">
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                    <p className="text-zinc-500 text-sm">{blog.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
