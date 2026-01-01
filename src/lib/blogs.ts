import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const blogsDirectory = path.join(process.cwd(), "src/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  htmlContent: string;
}

function titleFromMarkdown(markdown: string): string | null {
  // Prefer the first H1 line: "# Title"
  const match = markdown.match(/^#\s+(.+)\s*$/m);
  if (!match) return null;
  const title = match[1]?.trim();
  return title ? title : null;
}

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkHtml).process(content);
  const htmlContent = processedContent.toString();

  const inferredTitle = titleFromMarkdown(content);
  const title = (typeof data.title === "string" && data.title.trim()) ? data.title.trim() : (inferredTitle ?? slug);
  const date = (typeof data.date === "string" && data.date.trim()) ? data.date.trim() : "";

  return {
    slug,
    title,
    date,
    content,
    htmlContent,
  };
}

export async function getAllBlogs(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const blogs = await Promise.all(
    slugs.map(async (slug) => {
      const blog = await getBlogBySlug(slug);
      return blog!;
    })
  );

  // Sort by date, most recent first
  return blogs.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date < b.date ? 1 : -1;
  });
}

