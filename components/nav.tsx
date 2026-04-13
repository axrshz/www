'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()
  const backHref = pathname === "/blog" ? "/" : "/blog"

  return (
    <nav className="absolute top-6 left-6">
      <Link
        href={backHref}
        className="text-foreground hover:opacity-70 transition-opacity font-mono text-sm"
      >
        ← back
      </Link>
    </nav>
  )
}
