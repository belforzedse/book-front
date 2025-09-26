"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, ShoppingCart, User } from "lucide-react"
import { Suspense } from "react"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"

export default function Header() {
  const actionButtons = (
    <>
      <Link
        href="/cart"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <ShoppingCart className="size-4" aria-hidden="true" />
        <span>سبد خرید</span>
      </Link>
      <Link
        href="/account"
        className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <User className="size-4" aria-hidden="true" />
        <span>حساب کاربری</span>
      </Link>
    </>
  )

  return (
    <header className="sticky top-0 z-40 w-full bg-gradient-to-r from-header-start via-header-mid to-header-end text-white shadow-lg">
      <div className="border-b border-white/10">
        <div className="layout-frame flex flex-wrap items-center justify-between gap-3 py-2 text-xs sm:text-sm text-white/80">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="size-4 text-white/60" aria-hidden="true" />
              <a href="tel:02112345678" className="transition hover:text-white">
                پشتیبانی: ۰۲۱-۱۲۳۴۵۶۷۸
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="size-4 text-white/60" aria-hidden="true" />
              <a href="mailto:support@bookcity.com" className="transition hover:text-white">
                support@bookcity.com
              </a>
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="size-4 text-white/60" aria-hidden="true" />
              <span>تهران، خیابان انقلاب</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="transition hover:text-white">
              ورود
            </Link>
            <span className="text-white/40" aria-hidden="true">
              /
            </span>
            <Link href="/auth/register" className="transition hover:text-white">
              ثبت‌نام
            </Link>
          </div>
        </div>
      </div>

      <div className="layout-frame flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex w-full items-center justify-between gap-3">
          <Link href="/" className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            شهرکتاب
          </Link>
          <div className="flex items-center gap-2 sm:hidden">{actionButtons}</div>
        </div>

        <Suspense
          fallback={
            <div className="h-12 w-full animate-pulse rounded-full border border-white/25 bg-white/30" />
          }
        >
          <SearchBar className="!max-w-none flex-1 border-white/30 bg-white/95 text-primary shadow-lg placeholder:text-primary/60 focus-within:ring-2 focus-within:ring-white/40" />
        </Suspense>

        <div className="hidden items-center gap-2 sm:flex">{actionButtons}</div>
      </div>

      <Navbar className="border-t border-white/10" />
    </header>
  )
}
