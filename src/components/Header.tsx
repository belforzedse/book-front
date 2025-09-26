"use client"

import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import { Suspense } from "react"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary-dark/40 bg-primary text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            شهرکتاب
          </Link>
          <Suspense fallback={<div className="hidden flex-1 border-white/20 bg-white text-neutral shadow h-10 rounded-full animate-pulse" />}>
            <SearchBar className="hidden flex-1 border-white/20 bg-white text-neutral shadow" />
          </Suspense>
          <div className="flex items-center gap-3 text-white/90">
            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <ShoppingCart className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">سبد خرید</span>
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              <User className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">ورود</span>
            </button>
          </div>
        </div>
        <Suspense fallback={<div className="flex border-white/20 bg-white text-neutral shadow sm:hidden h-10 rounded-full animate-pulse" />}>
          <SearchBar className="flex border-white/20 bg-white text-neutral shadow sm:hidden" />
        </Suspense>
      </div>
      <Navbar />
    </header>
  )
}
