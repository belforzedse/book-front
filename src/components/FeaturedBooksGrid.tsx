import Image from "next/image"
import Link from "next/link"
import type { ProductSummary } from "@/lib/vendure"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"
import { fillProductsWithPlaceholders } from "@/lib/product-placeholders"

type FeaturedBooksGridProps = {
  title: string
  subtitle: string
  products: (ProductSummary & { author?: string })[]
}

type FeaturedBookCardProps = {
  product: ProductSummary & { author?: string }
}

function FeaturedBookCard({ product }: FeaturedBookCardProps) {
  const author = product.author && product.author.length > 0 ? product.author : "نویسنده نامشخص"
  const hasDiscount =
    typeof product.compareAtPrice === "number" && product.compareAtPrice > product.priceWithTax

  return (
    <Link
      href={"/product/" + product.id}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-primary/5 via-white to-secondary/10 p-6 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <span className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-secondary/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="space-y-4">
        <div className="relative mx-auto h-36 w-28 overflow-hidden rounded-2xl bg-white shadow-md">
          <Image
            src={product.image || PLACEHOLDER_IMAGE}
            alt={product.name}
            fill
            sizes="140px"
            className="object-cover"
          />
          {hasDiscount ? (
            <span className="absolute -right-2 top-3 rotate-12 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold text-white shadow">
              تخفیف ویژه
            </span>
          ) : null}
        </div>
        <div className="space-y-2">
          <p className="text-xs text-neutral/60">{author}</p>
          <h3 className="text-base font-semibold text-primary transition group-hover:text-secondary">
            {product.name}
          </h3>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-neutral/50">قیمت</span>
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
        </div>
        <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition group-hover:bg-secondary/20 group-hover:text-secondary">
          مشاهده و خرید
        </span>
      </div>
    </Link>
  )
}

export default function FeaturedBooksGrid({ title, subtitle, products }: FeaturedBooksGridProps) {
  const dataset = fillProductsWithPlaceholders(products, 4)

  return (
    <section className="mx-auto max-w-6xl space-y-6 px-4">
      <header className="text-right">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-secondary">{subtitle}</p>
        <h2 className="mt-2 text-2xl font-extrabold text-primary">{title}</h2>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dataset.map((product) => (
          <FeaturedBookCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
