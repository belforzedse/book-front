"use client"

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ProductSummary } from "@/lib/vendure"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"

type HeroProps = {
  products: ProductSummary[]
}

const FALLBACK_FEATURED: ProductSummary[] = [
  {
    id: "placeholder-1",
    name: "کتاب نمونه",
    slug: "sample-book",
    priceWithTax: 150000,
    currencyCode: "IRR",
    image: PLACEHOLDER_IMAGE,
  },
  {
    id: "placeholder-2",
    name: "اثر ماندگار",
    slug: "evergreen-book",
    priceWithTax: 98000,
    currencyCode: "IRR",
    image: PLACEHOLDER_IMAGE,
  },
]

export default function Hero({ products }: HeroProps) {
  const featured = products.length > 0 ? products.slice(0, Math.min(products.length, 5)) : FALLBACK_FEATURED

  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-2">
      <div className="rounded-3xl border border-blue-50 bg-blue-100/60 p-6 shadow-sm">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {featured.map((product) => (
            <SwiperSlide key={product.id}>
              <Link href={"/product/" + product.id} className="flex flex-col items-center gap-4 text-center">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-white/80 shadow">
                  <Image
                    src={product.image || PLACEHOLDER_IMAGE}
                    alt={product.name}
                    fill
                    sizes="(min-width: 1024px) 400px, 80vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-900">{product.name}</h3>
                  <p className="text-sm text-blue-700">
                    {formatCurrency(product.priceWithTax, product.currencyCode)}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col justify-center gap-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
        <span className="text-sm font-medium text-blue-600">کتابخانه‌ای برای همه</span>
        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          جدیدترین و محبوب‌ترین کتاب‌های شهرکتاب را مرور کنید
        </h1>
        <p className="text-gray-600">
          با مجموعه‌ای از کتاب‌های پرفروش، تازه‌های نشر و تخفیف‌های ویژه همراه شوید و تجربه‌ای متفاوت از خرید
          کتاب آنلاین داشته باشید.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/catalog"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            مشاهده فهرست کتاب‌ها
          </Link>
          <Link
            href="/events"
            className="rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-400"
          >
            رویدادهای فرهنگی
          </Link>
        </div>
      </div>
    </section>
  )
}
