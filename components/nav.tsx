'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Nav() {
  const pathname = usePathname()
  const isBlogIndex = pathname === "/blog"
  const href = isBlogIndex ? "/" : "/blog"
  const label = isBlogIndex ? "← home" : "← all posts"

  return (
    <nav className="absolute top-6 left-6">
      <Link
        href={href}
        className="text-foreground hover:opacity-70 transition-opacity font-mono text-sm"
      >
        {label}
      </Link>
    </nav>
  )
}
