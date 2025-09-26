import BookCard from "./BookCard"
import { ProductSummary } from "@/lib/vendure"
import { PLACEHOLDER_IMAGE } from "@/lib/utils"

type BookCarouselProps = {
  title: string
  products: ProductSummary[]
}

function createPlaceholderProducts(count: number): ProductSummary[] {
  const items: ProductSummary[] = []
  for (let index = 0; index < count; index += 1) {
    items.push({
      id: "placeholder-" + index,
      name: "کتاب در دسترس نیست",
      slug: "placeholder-" + index,
      priceWithTax: 0,
      currencyCode: "IRR",
      image: PLACEHOLDER_IMAGE,
    })
  }
  return items
}

export default function BookCarousel({ title, products }: BookCarouselProps) {
  const dataset = products.length > 0 ? products : createPlaceholderProducts(6)

  return (
    <section className="mx-auto max-w-6xl space-y-4 px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <span className="text-xs text-gray-500">نمایش {dataset.length} مورد</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {dataset.map((product) => (
          <BookCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
