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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF5E9] via-white to-[#E6F3FF] py-16">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-orange-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-1/4 h-64 w-64 rounded-full bg-sky-200/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-1/2 h-60 w-60 translate-x-1/2 rounded-[40%] bg-emerald-100/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-12">
        <div className="order-2 flex flex-col gap-8 rounded-3xl bg-white/80 p-8 text-neutral shadow-xl backdrop-blur lg:order-1 lg:col-span-6">
          <span className="text-sm font-semibold uppercase tracking-widest text-accent">کتابخانه‌ای برای همه</span>
          <div className="space-y-4 text-primary">
            <h1 className="text-3xl font-black leading-tight md:text-5xl">جدیدترین و محبوب‌ترین کتاب‌های شهرکتاب</h1>
            <p className="text-base text-neutral/80 md:text-lg">
              با مجموعه‌ای از کتاب‌های پرفروش، تازه‌های نشر و تخفیف‌های ویژه همراه شوید و تجربه‌ای متفاوت از خرید کتاب آنلاین داشته باشید.
            </p>
          </div>

          <form className="flex flex-col gap-3 rounded-2xl bg-white/70 p-4 shadow-lg backdrop-blur">
            <label htmlFor="hero-search" className="text-xs font-semibold uppercase text-neutral/70">
              جستجوی سریع کتاب
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="hero-search"
                type="search"
                placeholder="نام کتاب، نویسنده یا دسته‌بندی مورد نظر خود را وارد کنید"
                className="h-12 w-full rounded-xl border border-transparent bg-neutral-50 px-4 text-sm text-primary placeholder:text-neutral/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="submit"
                className="h-12 shrink-0 rounded-xl bg-accent px-6 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                جستجو
              </button>
            </div>
          </form>

          <div className="flex flex-wrap gap-3 text-sm text-primary">
            {[
              "بیش از ۱۲ هزار عنوان منتخب",
              "ارسال رایگان سفارش‌های ویژه",
              "امتیازدهی بیش از ۵۰ هزار خواننده",
            ].map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-medium shadow-sm backdrop-blur"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
                {chip}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/catalog"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              مشاهده فهرست کتاب‌ها
            </Link>
            <Link
              href="/events"
              className="rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
            >
              رویدادهای فرهنگی
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <div className="relative flex flex-col items-end gap-6">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              loop
              navigation={{ prevEl: ".hero-prev", nextEl: ".hero-next" }}
              pagination={{ clickable: true }}
              className="hero-swiper"
              onBeforeInit={(swiper) => {
                const params = swiper.params.navigation
                if (params && typeof params !== "boolean") {
                  params.prevEl = ".hero-prev"
                  params.nextEl = ".hero-next"
                }
              }}
            >
              {featured.map((product, index) => {
                const rating = (4.2 + (index % 4) * 0.2).toFixed(1)
                return (
                  <SwiperSlide key={product.id}>
                    <Link
                      href={"/product/" + product.id}
                      className="group relative block"
                    >
                      <div className="relative mx-auto w-full max-w-sm">
                        <div className="absolute -bottom-6 left-6 right-6 h-10 rounded-3xl bg-black/5 blur-2xl transition duration-500 group-hover:bg-black/10" />
                        <div className="absolute -bottom-3 left-8 right-8 h-6 rounded-3xl bg-black/5 blur-xl" />
                        <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_20px_45px_-25px_rgba(15,23,42,0.45)]">
                          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-500 shadow">
                            ⭐ <span>{rating}</span>
                          </div>
                          <div className="relative aspect-[3/4] w-full overflow-hidden">
                            <Image
                              src={product.image || PLACEHOLDER_IMAGE}
                              alt={product.name}
                              fill
                              sizes="(min-width: 1024px) 480px, 80vw"
                              className="object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="space-y-2 px-6 pb-8 pt-6 text-center">
                            <h3 className="text-lg font-semibold text-primary">{product.name}</h3>
                            <p className="text-sm text-neutral">
                              {formatCurrency(product.priceWithTax, product.currencyCode)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            <div className="flex items-center gap-3">
              <button
                className="hero-prev flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-lg transition hover:bg-primary hover:text-white"
                aria-label="قبلی"
              >
                ‹
              </button>
              <button
                className="hero-next flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition hover:bg-primary/90"
                aria-label="بعدی"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hero-swiper {
          padding-bottom: 2.5rem;
        }

        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.15);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .hero-swiper .swiper-pagination-bullet-active {
          width: 28px;
          background: #f97316;
        }

        .hero-swiper .swiper-slide {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
