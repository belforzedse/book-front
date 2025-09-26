"use client"

import Link from "next/link"
import { ShoppingCart, User } from "lucide-react"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-bold tracking-tight text-blue-700">
            شهرکتاب
          </Link>
          <SearchBar className="hidden flex-1 sm:flex" />
          <div className="flex items-center gap-3 text-gray-600">
            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-600"
            >
              <ShoppingCart className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">سبد خرید</span>
            </Link>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm transition hover:border-blue-500 hover:text-blue-600"
            >
              <User className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">ورود</span>
            </button>
          </div>
        </div>
        <SearchBar className="flex sm:hidden" />
      </div>
      <Navbar />
    </header>
  )
}
