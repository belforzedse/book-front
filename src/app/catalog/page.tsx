import BookCard from "@/components/BookCard"
import { getProducts } from "@/lib/vendure"

export default async function CatalogPage({
  searchParams,
}: {
  searchParams?: { q?: string }
}) {
  const products = await getProducts(48)
  const query = typeof searchParams?.q === "string" ? searchParams.q.trim().toLowerCase() : ""

  const filtered = query.length > 0
    ? products.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(query)
        const slugMatch = item.slug.toLowerCase().includes(query)
        return nameMatch || slugMatch
      })
    : products

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-12 text-neutral">
      <div className="flex flex-col gap-2 text-right">
        <h1 className="text-2xl font-bold text-primary">فهرست کتاب‌ها</h1>
        <p className="text-sm text-neutral/70">
          {query.length > 0 ? "نتایج جست‌وجو برای \"" + query + "\"" : "همه کتاب‌های موجود"}
        </p>
        <span className="text-xs text-neutral/50">{filtered.length} نتیجه</span>
      </div>
      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-card p-10 text-center text-sm text-neutral/70 shadow-sm">
          موردی یافت نشد. لطفا عبارت دیگری را امتحان کنید.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <BookCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
