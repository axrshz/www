import { Nav } from "@/components/nav";
import { getAllPosts } from "@/lib/blog";
import { format, parseISO } from "date-fns";
import Link from "next/link";

function formatPostDate(iso: string) {
  try {
    return format(parseISO(iso), "MMMM d, yyyy");
  } catch {
    return iso;
  }
}

export default function Blog() {
  const blogPosts = getAllPosts();

  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col items-center justify-center px-6 py-20">
      <Nav />

      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center text-center space-y-12">
          <h1 className="text-2xl font-mono">Blog</h1>

          <div className="flex w-full flex-col items-center gap-12">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex max-w-xl flex-col items-center gap-2 text-center">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group text-xl font-mono text-foreground hover:opacity-70 transition-opacity"
                >
                  {post.title}
                </Link>
                <p className="text-xs font-mono text-muted-foreground">
                  {formatPostDate(post.date)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
