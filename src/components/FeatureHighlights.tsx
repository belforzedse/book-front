"use client"

import clsx from "clsx"

const features = [
  {
    title: "تحویل سریع و مطمئن",
    description:
      "ارسال به سراسر کشور با بسته‌بندی ایمن و امکان رهگیری مرسوله تا رسیدن به دست شما.",
    gradient: "from-primary via-[#3B82F6] to-[#1E40AF]",
    accent: "bg-white/15",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-white">
        <path
          fill="currentColor"
          d="M6 14a4 4 0 0 1 4-4h16a4 4 0 0 1 3.58 2.21L33 18h5a4 4 0 0 1 3.83 2.82l2 6.5A4 4 0 0 1 40 32h-1a7 7 0 0 1-14 0H17a7 7 0 0 1-14 0H2a2 2 0 1 1 0-4h1v-6c0-4.42 3.58-8 8-8Zm4 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm22 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM10 14a4 4 0 0 0-4 4v6h3.35A7 7 0 0 1 16 18h8a3 3 0 0 0 2.7-4.29L25 14H10Zm25.38 6 2 6H40a1 1 0 0 0 .95-1.28l-2-6A1 1 0 0 0 38 18h-2.62Z"
        />
      </svg>
    ),
  },
  {
    title: "انتخابی ویژه کتاب‌بازها",
    description:
      "از تازه‌ترین چاپ‌ها تا نسخه‌های کمیاب؛ تیم محتوای ما بهترین‌ها را برای شما برگزیده است.",
    gradient: "from-[#9333EA] via-[#7F5EFF] to-[#4C1D95]",
    accent: "bg-white/10",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-white">
        <path
          fill="currentColor"
          d="M12 8h24a4 4 0 0 1 4 4v24a2 2 0 0 1-3.2 1.6L24 27.33 11.2 37.6A2 2 0 0 1 8 36V12a4 4 0 0 1 4-4Zm0 4v19.34l10.8-8.1a2 2 0 0 1 2.4 0l10.8 8.1V12H12Z"
        />
      </svg>
    ),
  },
  {
    title: "پشتیبانی همراه شما",
    description:
      "کارشناسان ما در تمام مراحل خرید پاسخگوی سوالات و پیشنهادهای شما هستند.",
    gradient: "from-[#F97316] via-[#FACC15] to-[#FB923C]",
    accent: "bg-white/20",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-12 w-12 text-white">
        <path
          fill="currentColor"
          d="M24 6a14 14 0 0 1 14 14v3a7 7 0 0 1-7 7h-1.1l-2.85 5.7A2 2 0 0 1 25.2 36H24a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7a2 2 0 0 0 2-2v-3a9 9 0 1 0-18 0v3a2 2 0 0 0 2 2h1a2 2 0 0 1 0 4h-1a6 6 0 0 1-6-6v-3A14 14 0 0 1 24 6Z"
        />
      </svg>
    ),
  },
]

export default function FeatureHighlights() {
  return (
    <section className="bg-background py-12">
      <div className="layout-frame flex flex-col gap-8">
        <div className="space-y-2 text-center lg:text-right">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">خدمات ما</span>
          <h2 className="text-2xl font-bold text-primary md:text-3xl">مزیت‌های همراه شهرکتاب</h2>
          <p className="text-sm text-neutral md:text-base">
            سه دلیل اصلی که مشتریان ما همیشه به کتاب‌فروشی آنلاین شهرکتاب باز می‌گردند.
          </p>
        </div>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:snap-none md:grid-cols-3 md:overflow-visible">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={clsx(
                "relative min-w-[260px] flex-1 overflow-hidden rounded-3xl p-8 text-white shadow-lg transition-transform duration-300 hover:-translate-y-1",
                "bg-gradient-to-br",
                feature.gradient,
              )}
            >
              <div className={clsx("mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl", feature.accent)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold leading-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
