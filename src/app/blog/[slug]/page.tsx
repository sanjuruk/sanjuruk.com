import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blogs";

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const markdownHasH1 = /^#\s+.+$/m.test(blog.content);

  return (
    <main className="animate-[fadeIn_0.8s_ease-out_forwards] w-full max-w-[700px] flex flex-col gap-6 mt-20 mb-20 mx-auto px-8">
      <header className="flex flex-col gap-2">
        <Link
          href="/blog"
          className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm mb-2 w-fit"
        >
          ← Back to blog
        </Link>
        {!markdownHasH1 && (
          <h1 className="text-3xl font-semibold tracking-tight">{blog.title}</h1>
        )}
        {blog.date && (
          <time className="text-zinc-500 text-sm">
            {new Date(blog.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>

      <article
        className="text-zinc-400 text-sm leading-relaxed [&_p]:mb-4 [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-zinc-300 [&_h1]:mt-0 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-300 [&_h2]:mt-6 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-300 [&_h3]:mt-4 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-1 [&_a]:text-zinc-500 [&_a]:hover:text-white [&_a]:border-b [&_a]:border-transparent [&_a]:hover:border-white [&_a]:transition-colors [&_code]:bg-zinc-900 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-zinc-300 [&_pre]:bg-zinc-900 [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-4 [&_blockquote]:border-l-4 [&_blockquote]:border-zinc-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-zinc-500 [&_blockquote]:mb-4"
        dangerouslySetInnerHTML={{ __html: blog.htmlContent }}
      />
    </main>
  );
}

