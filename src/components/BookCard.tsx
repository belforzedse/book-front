import Image from "next/image"
import Link from "next/link"
import { ProductSummary } from "@/lib/vendure"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"

export type BookCardProps = {
  product: ProductSummary & { author?: string }
}

export default function BookCard({ product }: BookCardProps) {
  const hasDiscount = typeof product.compareAtPrice === "number" && product.compareAtPrice > product.priceWithTax
  const author = product.author && product.author.length > 0 ? product.author : "نویسنده نامشخص"

  return (
    <Link
      href={"/product/" + product.id}
      className="flex min-w-[220px] max-w-[240px] flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={product.image || PLACEHOLDER_IMAGE}
          alt={product.name}
          fill
          sizes="200px"
          className="object-cover"
        />
        {hasDiscount ? (
          <span className="absolute right-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white shadow">
            تخفیف
          </span>
        ) : null}
      </div>
      <div className="space-y-1 text-right">
        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
        <p className="text-xs text-gray-500">{author}</p>
        <div className="flex items-baseline gap-2 justify-end">
          <span className="text-sm font-bold text-blue-700">
            {formatCurrency(product.priceWithTax, product.currencyCode)}
          </span>
          {hasDiscount ? (
            <span className="text-xs text-gray-400 line-through">
              {formatCurrency(product.compareAtPrice || 0, product.currencyCode)}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  )
}
