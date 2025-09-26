import Image from "next/image"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/AddToCartButton"
import { getProductById } from "@/lib/vendure"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id)
  if (!product) {
    notFound()
  }

  const description = product.description && product.description.length > 0 ? product.description : "توضیحاتی برای این محصول ثبت نشده است."

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
      <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
          <Image
            src={product.image || PLACEHOLDER_IMAGE}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 400px, 80vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-6 text-right">
          <div className="space-y-2">
            <span className="text-sm text-blue-600">کد محصول {product.id}</span>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          </div>
          <p className="text-sm leading-7 text-gray-600 whitespace-pre-line">{description}</p>
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-gray-500">قیمت با احتساب مالیات</span>
              <strong className="text-2xl text-blue-700">
                {formatCurrency(product.priceWithTax, product.currencyCode)}
              </strong>
            </div>
            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                priceWithTax: product.priceWithTax,
                currencyCode: product.currencyCode,
                image: product.image,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
