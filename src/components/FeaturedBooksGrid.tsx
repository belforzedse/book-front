import Image from "next/image"
import Link from "next/link"
import type { ProductSummary } from "@/lib/vendure"
import { cn, formatCurrency, PLACEHOLDER_IMAGE, truncate } from "@/lib/utils"
import { fillProductsWithPlaceholders } from "@/lib/product-placeholders"

type FeaturedBooksGridProps = {
  title: string
  subtitle: string
  products: (ProductSummary & { author?: string })[]
  desiredLength?: number
  gridClassName?: string
}

type FeaturedBookCardProps = {
  product: ProductSummary & { author?: string }
}

function FeaturedBookCard({ product }: FeaturedBookCardProps) {
  const author = product.author && product.author.length > 0 ? product.author : "نویسنده نامشخص"
  const hasDiscount =
    typeof product.compareAtPrice === "number" && product.compareAtPrice > product.priceWithTax
  const ratingSeed = product.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const rating = (4 + ((ratingSeed % 10) + 1) * 0.05).toFixed(1)
  const reviewsCount = 120 + (ratingSeed % 80)
  const descriptionSnippet =
    product.description && product.description.length > 0
      ? truncate(product.description, 90)
      : "خلاصه‌ای از محتوای کتاب به زودی اضافه می‌شود."

  return (
    <Link
      href={"/product/" + product.id}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral/10 bg-white p-6 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-2xl"
    >
      <span className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-secondary/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="space-y-4">
        <div className="relative mx-auto h-36 w-28 overflow-hidden rounded-2xl bg-neutral-50 shadow-md transition duration-300 group-hover:shadow-xl">
          <Image
            src={product.image || PLACEHOLDER_IMAGE}
            alt={product.name}
            fill
            sizes="140px"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <span className="absolute -left-2 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-amber-500 shadow">
            ⭐<span>{rating}</span>
          </span>
          {hasDiscount ? (
            <span className="absolute -right-2 top-3 rotate-6 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-white shadow">
              تخفیف ویژه
            </span>
          ) : null}
        </div>
        <div className="space-y-2">
          <p className="text-xs text-neutral/60">{author}</p>
          <h3 className="text-base font-semibold text-primary transition group-hover:text-secondary">
            {product.name}
          </h3>
          <p className="text-xs leading-5 text-neutral/70 transition duration-300 group-hover:text-neutral/90">
            {descriptionSnippet}
          </p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-xs text-neutral/50">
          <span>قیمت</span>
          <span className="flex items-center gap-1 text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {reviewsCount.toLocaleString("fa-IR")} نظر
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-2 text-primary">
            <span className="text-lg font-bold">
              {formatCurrency(product.priceWithTax, product.currencyCode)}
            </span>
            {hasDiscount ? (
              <span className="text-xs text-neutral/50 line-through">
                {formatCurrency(product.compareAtPrice || 0, product.currencyCode)}
              </span>
            ) : null}
          </div>
          <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary transition duration-300 group-hover:bg-secondary/20">
            ارسال رایگان
          </span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
          {["مشاهده جزئیات", "افزودن به علاقه‌مندی"].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-1 rounded-full border border-primary/20 px-3 py-1 font-medium text-primary transition duration-300 group-hover:border-secondary group-hover:text-secondary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary transition duration-300 group-hover:bg-secondary" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function FeaturedBooksGrid({
  title,
  subtitle,
  products,
  desiredLength = 4,
  gridClassName,
}: FeaturedBooksGridProps) {
  const dataset = fillProductsWithPlaceholders(products, desiredLength)

  return (
    <section className="layout-frame space-y-6">
      <header className="text-right">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{subtitle}</p>
        <h2 className="mt-2 text-2xl font-extrabold text-primary">{title}</h2>
      </header>
      <div className={cn("grid gap-6 sm:grid-cols-2 xl:grid-cols-4", gridClassName)}>
        {dataset.map((product) => (
          <FeaturedBookCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
