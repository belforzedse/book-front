import Link from "next/link"

export default function CustomerClubCTA() {
  return (
    <section className="layout-frame">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-[0_40px_90px_-45px_rgba(30,58,138,0.7)]">
        <div className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
        <div className="grid items-center gap-10 p-8 md:grid-cols-[1.1fr,0.9fr] md:p-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em]">
                CLUB MEMBER
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                به باشگاه مشتریان شهرکتاب بپیوندید
              </h2>
              <p className="max-w-xl text-sm text-white/80 md:text-base">
                با عضویت در باشگاه، از تخفیف‌های دوره‌ای، امتیاز خرید و دعوت اختصاصی به رویدادهای فرهنگی بهره‌مند شوید. با هر خرید نزدیک‌تر به جوایز ارزشمند و تجربه‌ای متفاوت از کتاب‌خوانی شوید.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/club"
                className="flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-accent hover:text-white"
              >
                عضویت سریع
              </Link>
              <Link
                href="/club/benefits"
                className="flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                مزایا و قوانین
              </Link>
            </div>
            <dl className="grid gap-4 text-xs uppercase tracking-wide text-white/70 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <dt className="font-semibold text-white">۳۲٬۰۰۰+</dt>
                <dd>اعضای فعال</dd>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <dt className="font-semibold text-white">۱۵٪</dt>
                <dd>تخفیف اولین خرید</dd>
              </div>
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <dt className="font-semibold text-white">دعوت ویژه</dt>
                <dd>کارگاه‌ها و نشست‌ها</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="absolute inset-x-6 bottom-4 h-16 rounded-full bg-black/30 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/20 bg-white/10 p-8 backdrop-blur">
              <svg viewBox="0 0 340 280" className="h-full w-full">
                <defs>
                  <linearGradient id="clubBookSpine" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#FACC15" />
                  </linearGradient>
                  <linearGradient id="clubBadge" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FACC15" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <rect x="46" y="60" width="60" height="160" rx="12" fill="url(#clubBookSpine)" opacity="0.95" />
                  <rect x="116" y="40" width="58" height="190" rx="12" fill="#F8FAFC" opacity="0.8" />
                  <rect x="184" y="70" width="52" height="160" rx="12" fill="#BFDBFE" opacity="0.9" />
                  <rect x="240" y="52" width="48" height="178" rx="12" fill="#FDE68A" opacity="0.95" />
                  <rect x="116" y="120" width="58" height="4" fill="#CBD5F5" />
                  <rect x="116" y="136" width="58" height="4" fill="#CBD5F5" />
                  <rect x="184" y="112" width="52" height="8" fill="#2563EB" opacity="0.6" />
                  <rect x="240" y="116" width="48" height="6" fill="#F59E0B" opacity="0.6" />
                  <rect x="46" y="140" width="60" height="8" fill="#FB923C" opacity="0.7" />
                  <circle cx="275" cy="90" r="34" fill="url(#clubBadge)" opacity="0.8" />
                  <text x="274" y="95" textAnchor="middle" fontFamily="sans-serif" fontSize="22" fill="#1E293B" fontWeight="700">
                    VIP
                  </text>
                  <path
                    d="M34 220h270c6.627 0 12 5.373 12 12v6H22v-6c0-6.627 5.373-12 12-12Z"
                    fill="#0F172A"
                    opacity="0.15"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
