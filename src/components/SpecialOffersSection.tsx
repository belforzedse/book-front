import Image from "next/image"
import Link from "next/link"
import type { ProductSummary } from "@/lib/vendure"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"
import { fillProductsWithPlaceholders } from "@/lib/product-placeholders"

type SpecialOffersSectionProps = {
  title: string
  subtitle: string
  products: (ProductSummary & { author?: string })[]
}

type OfferCardProps = {
  product: ProductSummary & { author?: string }
  highlight?: boolean
}

function OfferCard({ product, highlight }: OfferCardProps) {
  const author = product.author || "نویسنده نامشخص"
  const hasDiscount =
    typeof product.compareAtPrice === "number" && product.compareAtPrice > product.priceWithTax

  return (
    <Link
      href={"/product/" + product.id}
      className={
        highlight
          ? "group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 via-white to-orange-50 p-8 text-right shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          : "group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white p-6 text-right shadow transition hover:-translate-y-1 hover:shadow-lg"
      }
    >
      {highlight ? (
        <div className="flex flex-wrap justify-end gap-2">
          <span className="rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-amber-800">ارسال رایگان</span>
          <span className="rounded-full bg-orange-200 px-3 py-1 text-xs font-semibold text-orange-800">تا ۴۰٪ تخفیف</span>
        </div>
      ) : null}
      <div className="mt-6 flex items-start gap-5">
        <div className={`relative h-28 w-24 overflow-hidden rounded-2xl ${highlight ? "bg-white" : "bg-neutral/5"}`}>
          <Image
            src={product.image || PLACEHOLDER_IMAGE}
            alt={product.name}
            fill
            sizes="120px"
            className="object-cover"
          />
          {hasDiscount ? (
            <span className="absolute right-2 top-2 rounded-full bg-amber-500 px-2 py-1 text-[10px] font-bold text-white shadow">
              {Math.max(0, Math.round(100 - (product.priceWithTax / (product.compareAtPrice || 1)) * 100))}%
            </span>
          ) : null}
        </div>
        <div className="space-y-2">
          <p className="text-xs text-neutral/60">{author}</p>
          <h3 className="text-lg font-semibold text-primary transition group-hover:text-secondary">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 text-primary">
            <span className="text-xl font-black">
              {formatCurrency(product.priceWithTax, product.currencyCode)}
            </span>
            {hasDiscount ? (
              <span className="text-xs text-neutral/50 line-through">
                {formatCurrency(product.compareAtPrice || 0, product.currencyCode)}
              </span>
            ) : null}
          </div>
        </div>
      </div>
      <span
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-xs font-semibold ${
          highlight
            ? "bg-primary text-white transition group-hover:bg-secondary"
            : "bg-primary/10 text-primary transition group-hover:bg-secondary group-hover:text-white"
        }`}
      >
        مشاهده پیشنهاد
      </span>
      {highlight ? (
        <span className="pointer-events-none absolute -left-10 top-6 hidden rotate-12 text-9xl font-black text-amber-100/60 sm:block">
          %
        </span>
      ) : null}
    </Link>
  )
}

export default function SpecialOffersSection({ title, subtitle, products }: SpecialOffersSectionProps) {
  const dataset = fillProductsWithPlaceholders(products, 3)
  const [first, second, third] = dataset

  return (
    <section className="layout-frame space-y-8">
      <header className="space-y-2 text-right">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-accent">{subtitle}</p>
        <h2 className="text-3xl font-black text-primary">{title}</h2>
      </header>
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <OfferCard product={first} highlight />
        <div className="grid gap-6">
          <OfferCard product={second} />
          <OfferCard product={third} />
        </div>
      </div>
    </section>
  )
}
