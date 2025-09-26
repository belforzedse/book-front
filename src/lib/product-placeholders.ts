import { ProductSummary } from "@/lib/vendure"
import { PLACEHOLDER_IMAGE } from "@/lib/utils"

export function createPlaceholderProducts(count: number): ProductSummary[] {
  return Array.from({ length: count }).map((_, index) => ({
    id: "placeholder-" + index,
    name: "کتاب در دسترس نیست",
    slug: "placeholder-" + index,
    priceWithTax: 0,
    currencyCode: "IRR",
    image: PLACEHOLDER_IMAGE,
  }))
}

export function fillProductsWithPlaceholders(
  products: ProductSummary[],
  desiredLength: number,
): ProductSummary[] {
  if (products.length >= desiredLength) {
    return products.slice(0, desiredLength)
  }

  const placeholders = createPlaceholderProducts(desiredLength - products.length)
  return [...products, ...placeholders]
}
