"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavbarProps = {
  className?: string
}

const LINKS = [
  { href: "/", label: "خانه" },
  { href: "/catalog", label: "فهرست" },
  { href: "/events", label: "رویدادها" },
  { href: "/news", label: "اخبار" },
]

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("bg-transparent text-white", className)}>
      <div className="layout-frame flex items-center gap-3 overflow-x-auto py-3 text-sm">
        {LINKS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === item.href
              : pathname.startsWith(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-shrink-0 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/80 transition-all hover:border-white/35 hover:bg-white/15 hover:text-white",
                isActive && "border-white bg-white text-header-mid shadow-md"
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
