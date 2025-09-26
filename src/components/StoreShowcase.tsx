import Link from "next/link"

const storeHighlights = [
  {
    title: "کافه و کتاب",
    description: "در فضای دلنشین کافه همراه با کتاب‌های منتخب، طعم گفتگوهای فرهنگی را تجربه کنید.",
  },
  {
    title: "نشست‌های فرهنگی",
    description: "هر هفته میزبان نویسندگان، مترجمان و هنرمندان برای رونمایی و گفتگو هستیم.",
  },
  {
    title: "خدمات بسته‌بندی هدیه",
    description: "کتاب‌های منتخب را با بسته‌بندی هنری برای عزیزانتان آماده می‌کنیم.",
  },
]

export default function StoreShowcase() {
  return (
    <section className="layout-frame">
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_40px_90px_-60px_rgba(15,23,42,0.25)]">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="relative order-2 overflow-hidden bg-gradient-to-br from-[#EEF2FF] via-[#DBEAFE] to-[#E0F2FE] md:order-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_50%)]" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 to-transparent" />
            <div className="relative flex h-full flex-col justify-end px-10 pb-12 pt-16">
              <div className="mx-auto w-full max-w-sm">
                <div className="relative rounded-[2.5rem] border border-white/70 bg-white/60 p-8 shadow-2xl backdrop-blur">
                  <svg viewBox="0 0 340 340" className="h-full w-full">
                    <defs>
                      <linearGradient id="storeGlass" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor="#EFF6FF" />
                        <stop offset="100%" stopColor="#DBEAFE" />
                      </linearGradient>
                      <linearGradient id="storeFacade" x1="0%" x2="100%" y1="0%" y2="0%">
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#1E3A8A" />
                      </linearGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <rect x="40" y="100" width="260" height="180" rx="24" fill="url(#storeGlass)" opacity="0.85" />
                      <rect x="80" y="60" width="180" height="50" rx="16" fill="url(#storeFacade)" opacity="0.9" />
                      <rect x="60" y="150" width="220" height="110" rx="12" fill="#FFFFFF" opacity="0.9" />
                      <rect x="92" y="170" width="60" height="90" rx="10" fill="#BFDBFE" />
                      <rect x="188" y="170" width="60" height="90" rx="10" fill="#DBEAFE" />
                      <rect x="152" y="150" width="36" height="110" fill="#F97316" opacity="0.8" />
                      <rect x="132" y="210" width="20" height="36" fill="#FACC15" opacity="0.8" />
                      <rect x="212" y="210" width="20" height="36" fill="#F97316" opacity="0.8" />
                      <path d="M90 140h160c11.046 0 20 8.954 20 20v10H70v-10c0-11.046 8.954-20 20-20Z" fill="#1E3A8A" opacity="0.65" />
                      <circle cx="110" cy="120" r="12" fill="#FACC15" opacity="0.8" />
                      <circle cx="230" cy="120" r="12" fill="#FDE68A" opacity="0.8" />
                      <rect x="20" y="260" width="300" height="12" rx="6" fill="#0F172A" opacity="0.18" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 flex flex-col gap-6 px-8 py-12 md:order-2 md:px-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-1 text-xs font-semibold text-primary">
              <span className="h-2 w-2 rounded-full bg-accent" />
              حضوری دیدار کنیم
            </span>
            <h2 className="text-2xl font-bold leading-tight text-primary md:text-3xl">شهرکتاب مرکزی؛ تجربه خرید حضوری</h2>
            <p className="text-sm text-neutral md:text-base">
              در فروشگاه مرکزی شهرکتاب، می‌توانید در میان قفسه‌های متنوع کتاب و محصولات فرهنگی قدم بزنید و با همراهی مشاوران ادبی ما، بهترین انتخاب را داشته باشید. فضای دوستانه کافه و رویدادهای فرهنگی هفتگی، تجربه‌ای متفاوت از خرید کتاب رقم می‌زند.
            </p>
            <dl className="grid gap-4 rounded-3xl bg-secondary/60 p-6 text-sm text-primary md:grid-cols-2">
              <div>
                <dt className="font-semibold text-primary">آدرس</dt>
                <dd className="text-neutral">تهران، خیابان شریعتی، بالاتر از پل سید خندان، نبش خیابان شهید قندی</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">ساعت کاری</dt>
                <dd className="text-neutral">همه‌روزه از ساعت ۱۰ تا ۲۲</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">تلفن تماس</dt>
                <dd className="text-neutral">۰۲۱-۸۸۵۵۳۸۵۵</dd>
              </div>
              <div>
                <dt className="font-semibold text-primary">دسترسی حمل‌ونقل</dt>
                <dd className="text-neutral">ایستگاه مترو شهید بهشتی، خطوط تاکسی و اتوبوس بی‌آر‌تی</dd>
              </div>
            </dl>
            <ul className="space-y-4">
              {storeHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white/60 p-4 shadow-sm">
                  <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                    ★
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-primary">{item.title}</p>
                    <p className="text-xs text-neutral md:text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link
                href="https://maps.google.com?q=City+Book+Store"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                مسیریابی در نقشه
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
