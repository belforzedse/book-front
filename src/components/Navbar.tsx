import Link from "next/link"
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
  return (
    <nav className={cn("border-t border-gray-100 bg-white", className)}>
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-4 py-3 text-sm font-medium text-gray-600">
        {LINKS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
