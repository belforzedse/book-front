import Link from "next/link"

const footerLinks = [
  {
    title: "خدمات مشتریان",
    items: ["پرسش‌های متداول", "پیگیری سفارش", "شرایط ارسال", "بازگشت کالا"],
  },
  {
    title: "کتاب و فرهنگ",
    items: ["باشگاه کتابخوانی", "تقویم رویدادها", "پیشنهادهای ویراستار", "جشنواره‌های کتاب"],
  },
  {
    title: "همکاری با ما",
    items: ["فروش سازمانی", "دعوت از ناشران", "فرصت‌های شغلی", "رسانه و روابط عمومی"],
  },
]

const socialLinks = [
  { label: "اینستاگرام", href: "https://instagram.com" },
  { label: "تلگرام", href: "https://t.me" },
  { label: "لینکدین", href: "https://linkedin.com" },
]

export default function BookshelfFooter() {
  return (
    <footer className="px-4 pb-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-secondary/80 text-primary shadow-[0_45px_110px_-70px_rgba(30,58,138,0.45)]">
        <div className="grid gap-12 px-8 pb-10 pt-12 md:grid-cols-[1.1fr,0.9fr] md:px-12 md:pb-14">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">کتابخانه‌ای که همیشه باز است</h2>
            <p className="max-w-lg text-sm text-neutral">
              با خبرنامه شهرکتاب از تازه‌های نشر، کارگاه‌ها و پیشنهادهای ویژه مطلع شوید. هر هفته الهام تازه‌ای برای کتاب‌خوانی پیدا کنید.
            </p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="footer-email" className="sr-only">
                عضویت در خبرنامه
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="h-12 w-full rounded-full border border-primary/10 bg-white px-5 text-sm text-primary placeholder:text-neutral/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary-dark"
              >
                عضویت
              </button>
            </form>
            <div className="flex flex-wrap gap-4 pt-2 text-sm text-neutral">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/70 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
                >
                  <span aria-hidden>◎</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">{section.title}</p>
                <ul className="space-y-2 text-sm text-neutral">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link href="/" className="transition hover:text-primary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-4 border-t border-primary/10 bg-gradient-to-b from-transparent via-[#EECFA3]/50 to-[#C47B2C]/70 px-8 pb-10 pt-12 md:px-12">
          <div className="absolute inset-x-6 bottom-10 h-8 rounded-full bg-black/10 blur-3xl" />
          <div className="relative mx-auto flex max-w-4xl items-end justify-between gap-8">
            <div className="grid flex-1 grid-cols-6 items-end gap-3">
              {[
                { height: "h-28", color: "bg-[#FDE68A]" },
                { height: "h-36", color: "bg-[#FB923C]" },
                { height: "h-32", color: "bg-[#1E3A8A]" },
                { height: "h-40", color: "bg-[#93C5FD]" },
                { height: "h-24", color: "bg-[#EF4444]" },
                { height: "h-[7.5rem]", color: "bg-[#A855F7]" },
              ].map(({ height, color }, index) => (
                <div key={index} className="relative flex h-40 items-end justify-center">
                  <span
                    className={`block w-10 rounded-t-[18px] ${height} ${color} shadow-[inset_0_2px_6px_rgba(255,255,255,0.6)]`}
                  />
                  <span className="absolute -bottom-4 h-4 w-12 rounded-sm bg-[#8B5A2B] shadow-inner" />
                </div>
              ))}
            </div>
            <div className="hidden flex-col items-end gap-3 text-right text-sm text-primary md:flex">
              <p className="text-base font-semibold text-primary">روی قفسه ما جا برای شما هست</p>
              <p className="text-xs text-neutral">کتاب‌های خود را معرفی کنید تا در ویترین هفته قرار بگیرند.</p>
              <Link href="/publishers" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white transition hover:bg-accent-dark">
                همکاری با شهرکتاب
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 border-t border-white/40 bg-primary/5 px-8 py-6 text-xs text-neutral md:flex-row md:justify-between md:px-12">
          <p>© {new Date().getFullYear()} شهرکتاب - تمام حقوق محفوظ است.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/privacy" className="transition hover:text-primary">
              حریم خصوصی
            </Link>
            <span className="text-neutral/60">|</span>
            <Link href="/terms" className="transition hover:text-primary">
              شرایط استفاده
            </Link>
            <span className="text-neutral/60">|</span>
            <Link href="/about" className="transition hover:text-primary">
              درباره شهرکتاب
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
