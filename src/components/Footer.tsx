import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react"

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
  { href: "mailto:info@shahreketab.local", label: "Email", Icon: Mail },
  { href: "tel:+982112345678", label: "Phone", Icon: Phone },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">شهرکتاب</h3>
            <p className="max-w-md text-gray-500">
              فروشگاه آنلاین کتاب و محصولات فرهنگی با تمرکز بر تجربه کاربری روان و دسترسی به تازه‌ترین عناوین.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-gray-900">خدمات</span>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="rounded-full border border-gray-200 px-3 py-1">ارسال سریع</span>
              <span className="rounded-full border border-gray-200 px-3 py-1">پشتیبانی ۲۴ ساعته</span>
              <span className="rounded-full border border-gray-200 px-3 py-1">ضمانت اصالت کالا</span>
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-sm font-semibold text-gray-900">ما را در شبکه‌های اجتماعی دنبال کنید</span>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 transition hover:border-blue-400 hover:text-blue-600"
                >
                  <item.Icon className="size-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-4 text-xs text-gray-400 md:flex-row">
          <span>© {new Date().getFullYear()} شهرکتاب. تمام حقوق محفوظ است.</span>
          <span>ساخته شده با Next.js و Vendure</span>
        </div>
      </div>
    </footer>
  )
}
