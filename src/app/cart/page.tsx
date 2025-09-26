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
    <div className="layout-frame space-y-8 py-12 text-neutral">
      <div className="flex flex-col gap-2 text-right">
        <h1 className="text-2xl font-bold text-primary">سبد خرید</h1>
        <p className="text-sm text-neutral/70">بررسی اقلام انتخاب شده و ادامه فرایند خرید</p>
      </div>
      {items.length === 0 ? (
        <div className="rounded-2xl bg-card p-10 text-center text-sm text-neutral/70 shadow-sm">
          سبد خرید شما خالی است. از بخش <Link href="/catalog" className="text-accent hover:text-orange-600">فهرست کتاب‌ها</Link> بازدید کنید.
        </div>
      ) : (
        <div className="space-y-6">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl bg-card p-4 text-neutral shadow-md transition hover:-translate-y-1 hover:shadow-lg md:flex-row md:items-center"
              >
                <div className="relative h-28 w-24 overflow-hidden rounded-xl bg-secondary/60">
                  <Image
                    src={item.image || PLACEHOLDER_IMAGE}
                    alt={item.name}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 text-right">
                  <span className="text-sm font-semibold text-primary">{item.name}</span>
                  <span className="text-xs text-neutral/70">تعداد: {item.qty}</span>
                </div>
                <div className="flex items-center gap-4 self-end md:self-center">
                  <strong className="text-base text-primary">
                    {formatCurrency(item.priceWithTax * item.qty, item.currencyCode)}
                  </strong>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="flex items-center gap-1 rounded-full border border-neutral/30 px-3 py-1 text-xs text-neutral/70 transition hover:border-danger/60 hover:text-danger"
                  >
                    <Trash2 className="size-4" aria-hidden="true" /> حذف
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 rounded-2xl bg-card p-6 text-neutral shadow-md">
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral/70">مجموع</span>
              <strong className="text-xl text-primary">{formatCurrency(total, currency)}</strong>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={clearCart}
                className="rounded-full border border-neutral/30 px-6 py-2 text-sm text-neutral/70 transition hover:border-danger/60 hover:text-danger"
              >
                خالی کردن سبد
              </button>
              <button
                type="button"
                className="flex-1 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
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
