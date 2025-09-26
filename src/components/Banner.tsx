import Image from "next/image"
import Link from "next/link"
import { BookOpenCheck, Quote, Sparkles } from "lucide-react"

import { PLACEHOLDER_IMAGE } from "@/lib/utils"

type BannerStatistic = {
  value: string
  label: string
}

type BannerQuote = {
  text: string
  author: string
}

type BannerProps = {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  image?: string
  stats?: BannerStatistic[]
  quote?: BannerQuote
}

const defaultStats: BannerStatistic[] = [
  { value: "+320", label: "عنوان منتخب توسعه فردی" },
  { value: "94%", label: "رضایت خوانندگان" },
]

const defaultQuote: BannerQuote = {
  text: "کتاب‌ها دروازه‌هایی‌اند که ما را به زندگی‌های تازه می‌برند.",
  author: "مایا آنجلو",
}

function StatisticChip({ value, label }: BannerStatistic) {
  return (
    <div className="group flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-white/90 backdrop-blur-sm transition hover:border-white/30 hover:bg-white/15">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-white/25 via-white/20 to-white/10 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
        {value}
      </div>
      <div className="flex items-center gap-1 text-sm">
        <BookOpenCheck className="h-4 w-4 text-accent/80 transition group-hover:text-accent" />
        <span>{label}</span>
      </div>
    </div>
  )
}

function QuoteChip({ text, author }: BannerQuote) {
  return (
    <figure className="relative max-w-sm rounded-3xl border border-white/10 bg-white/10 p-5 text-white/90 shadow-[0_12px_40px_-20px_rgba(15,23,42,0.75)] backdrop-blur">
      <Sparkles className="absolute -right-2 -top-2 h-7 w-7 rounded-full border border-white/30 bg-white/20 p-1 text-accent" />
      <Quote className="mb-3 h-6 w-6 text-accent" />
      <blockquote className="text-sm leading-6">{text}</blockquote>
      <figcaption className="mt-4 flex items-center gap-2 text-xs font-medium text-white/70">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/80 text-[0.75rem] text-white">
          {author.slice(0, 2)}
        </span>
        <span>{author}</span>
      </figcaption>
    </figure>
  )
}

function VignetteOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/55 to-slate-900/80" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 45%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 50%)",
        }}
      />
    </div>
  )
}

function BookMockup({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute inset-x-10 bottom-6 h-10 rounded-full bg-slate-900/60 blur-3xl" />
      <div className="relative h-80 w-64 overflow-hidden rounded-[42px] border border-white/20 bg-white/5 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.8)] backdrop-blur">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 320px, 60vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-70" />
        <div className="absolute inset-y-10 right-5 w-[3px] rounded-full bg-white/30 opacity-80" />
        <div className="absolute bottom-6 left-1/2 w-40 -translate-x-1/2 rounded-full bg-white/20 py-2 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          NEW RELEASES
        </div>
      </div>
    </div>
  )
}

export default function Banner({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  image,
  stats = defaultStats,
  quote = defaultQuote,
}: BannerProps) {
  const resolvedImage = image || PLACEHOLDER_IMAGE

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-[48px] border border-white/5 bg-slate-950 text-white shadow-[0_40px_120px_-45px_rgba(15,23,42,0.9)]">
        <div className="absolute inset-0">
          <Image
            src={resolvedImage}
            alt={title}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
          <VignetteOverlay />
        </div>
        <div className="relative grid gap-10 px-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-20">
          <div className="flex flex-col justify-between gap-12">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-white">
                  <Sparkles className="h-4 w-4" />
                </span>
                پیشنهاد ویژه کتاب
              </div>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.9rem] lg:leading-[1.1]">
                {title}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-white/80 lg:text-lg">{subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {stats.map((stat) => (
                <StatisticChip key={stat.label} {...stat} />
              ))}
            </div>
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-[0_18px_35px_-18px_rgba(234,88,12,0.9)] transition hover:bg-orange-600"
              >
                {ctaLabel}
              </Link>
              <div className="hidden max-w-[260px] text-sm text-white/60 sm:block">
                <span className="font-semibold text-white">ارسال رایگان</span> برای سفارش‌های بالای ۳۰۰ هزار تومان
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <QuoteChip {...quote} />
            <BookMockup image={resolvedImage} title={title} />
          </div>
        </div>
      </div>
    </section>
  )
}
