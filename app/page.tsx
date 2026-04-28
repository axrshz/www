import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Name and Social Icons */}
          <div className="flex flex-col items-center gap-3">
            <h1 className="text-2xl font-mono">Adarsh</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-sm">
              <a
                href="https://x.com/axrshz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-5 shrink-0 items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="X"
              >
                <svg
                  className="size-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://github.com/axrshz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-5 shrink-0 items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="GitHub"
              >
                <svg
                  className="size-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:axrshz@gmail.com"
                className="hover:opacity-70 transition-opacity"
                aria-label="Email axrshz@gmail.com"
              >
                [axrshz@gmail.com]
              </a>
            </div>
          </div>

          {/* Bio Text */}
          <div className="max-w-xl space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
            <p>I like ML Systems, Inference, Agents and Post-training.</p>

            <p>
              I'm currently building{" "}
              <a
                href="https://github.com/axrshz/hayate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-70 transition-opacity"
              >
                Hayate
              </a>
              , a minimal inference engine. Here I try to implement the concepts
              I learn along the way.
            </p>
            <p>
              I also try to stay updated with the latest AI progress and keep a
              full stack understanding of how everything works from research to
              infra to application layer.
            </p>
            <p>
              {/* Feel free to reach out to me if you wanna chat about anything or
              collaborate. */}
              Outside of ML, my interests lie in Backend Engineering and
              Distributed Systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="pt-4">
            <Link
              href="/blog"
              className="text-primary hover:opacity-70 transition-opacity font-mono text-sm"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
