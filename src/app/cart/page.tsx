"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { useCart } from "@/lib/cart"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"

export default function CartPage() {
  const items = useCart((state) => state.items)
  const removeItem = useCart((state) => state.removeItem)
  const clearCart = useCart((state) => state.clearCart)

  const total = items.reduce((accumulator, item) => accumulator + item.priceWithTax * item.qty, 0)
  const currency = items.length > 0 ? items[0].currencyCode : "IRR"

  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
      <div className="flex flex-col gap-2 text-right">
        <h1 className="text-2xl font-bold text-gray-900">سبد خرید</h1>
        <p className="text-sm text-gray-500">بررسی اقلام انتخاب شده و ادامه فرایند خرید</p>
      </div>
      {items.length === 0 ? (
        <div className="rounded-2xl border border-gray-100 bg-white p-10 text-center text-sm text-gray-500 shadow-sm">
          سبد خرید شما خالی است. از بخش <Link href="/catalog" className="text-blue-600">فهرست کتاب‌ها</Link> بازدید کنید.
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:flex-row md:items-center"
              >
                <div className="relative h-28 w-24 overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src={item.image || PLACEHOLDER_IMAGE}
                    alt={item.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 text-right">
                  <span className="text-sm font-semibold text-gray-900">{item.name}</span>
                  <span className="text-xs text-gray-500">تعداد: {item.qty}</span>
                </div>
                <div className="flex items-center gap-4 self-end md:self-center">
                  <strong className="text-base text-blue-700">
                    {formatCurrency(item.priceWithTax * item.qty, item.currencyCode)}
                  </strong>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-500 transition hover:border-red-300 hover:text-red-600"
                  >
                    <Trash2 className="size-4" aria-hidden="true" /> حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">مجموع</span>
              <strong className="text-xl text-blue-700">{formatCurrency(total, currency)}</strong>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={clearCart}
                className="rounded-full border border-gray-200 px-6 py-2 text-sm text-gray-600 transition hover:border-red-300 hover:text-red-600"
              >
                خالی کردن سبد
              </button>
              <button
                type="button"
                className="flex-1 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                ثبت سفارش (به زودی)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
