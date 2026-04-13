import { Nav } from "@/components/nav";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import { format, parseISO } from "date-fns";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

function metaDescription(title: string, content: string): string {
  const oneLine = content.replace(/\s+/g, " ").trim();
  if (!oneLine) return title;
  return oneLine.length > 160 ? `${oneLine.slice(0, 157)}…` : oneLine;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: metaDescription(post.title, post.content),
  };
}

function formatPostDate(iso: string) {
  try {
    return format(parseISO(iso), "MMMM d, yyyy");
  } catch {
    return iso;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col items-center justify-center px-6 py-20">
      <Nav />

      <article className="flex w-full max-w-2xl flex-col items-center text-center">
        <header className="mb-10 space-y-3">
          <h1 className="text-2xl font-mono text-foreground">{post.title}</h1>
          <p className="text-xs font-mono text-muted-foreground">
            {formatPostDate(post.date)}
          </p>
        </header>

        <div
          className="w-full text-center font-mono text-sm leading-relaxed text-muted-foreground [&_p]:mb-4 [&_p:last-child]:mb-0 [&_strong]:text-foreground [&_ul]:list-inside [&_ul]:text-center"
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-14">
          <Link
            href="/blog"
            className="text-primary font-mono text-sm hover:opacity-70 transition-opacity"
          >
            ← All posts
          </Link>
        </div>
      </article>
    </main>
  );
}
