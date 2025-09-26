"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart"

type AddToCartButtonProps = {
  product: {
    id: string
    name: string
    priceWithTax: number
    currencyCode: string
    image?: string
  }
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCart((state) => state.addItem)
  const [pending, setPending] = useState(false)

  const handleClick = () => {
    setPending(true)
    addItem({
      id: product.id,
      name: product.name,
      priceWithTax: product.priceWithTax,
      currencyCode: product.currencyCode,
      image: product.image,
      qty: 1,
    })
    setTimeout(() => setPending(false), 400)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
    >
      {pending ? "در حال افزودن..." : "افزودن به سبد"}
    </button>
  )
}
