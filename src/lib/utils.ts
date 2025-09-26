import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ZERO_DECIMAL_CURRENCIES = new Set(["JPY", "KRW", "VND", "IRR", "IRT"])

export const PLACEHOLDER_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23f3f4f6'/%3E%3Cpath d='M80 420h240l-60-80-72 96-48-64-60 48z' fill='%23d1d5db'/%3E%3Ccircle cx='200' cy='160' r='72' fill='%23d1d5db'/%3E%3Ctext x='200' y='300' text-anchor='middle' font-size='32' fill='%239ca3af' font-family='Arial, sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E"

export function ensureAbsoluteUrl(path?: string | null, base?: string | null) {
  if (!path) return null
  if (path.startsWith("http")) return path
  if (!base) return path
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path
  return normalizedBase + "/" + normalizedPath
}

export function formatCurrency(
  amount: number,
  currency = "IRR",
  locale = process.env.NEXT_PUBLIC_LANG === "fa" ? "fa-IR" : "en-US",
) {
  const upperCurrency = currency.toUpperCase()
  const isZeroDecimal = ZERO_DECIMAL_CURRENCIES.has(upperCurrency)
  const value = isZeroDecimal ? amount : amount / 100
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: upperCurrency,
    maximumFractionDigits: isZeroDecimal ? 0 : 2,
  }).format(value)
}

export function formatDate(
  input: string,
  locale = process.env.NEXT_PUBLIC_LANG === "fa" ? "fa-IR" : "en-US",
) {
  const date = new Date(input)
  if (Number.isNaN(date.getTime())) return input
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function truncate(text: string, limit = 140) {
  if (text.length <= limit) return text
  return text.slice(0, limit).trimEnd() + "..."
}
