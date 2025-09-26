import Link from "next/link"
import {
  ArrowLeft,
  Atom,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Feather,
  Globe,
  GraduationCap,
  HeartPulse,
  Palette,
  Puzzle,
  Sparkles,
} from "lucide-react"

const CATEGORIES = [
  {
    label: "رمان و داستان",
    description: "آثار کلاسیک و معاصر برای همراهی در هر حال و هوا",
    Icon: BookOpen,
    gradient: "from-[#FFE7F3] via-[#FDD7E8] to-[#FBC3D8]",
    iconColor: "text-[#DB2777]",
  },
  {
    label: "روان‌شناسی و خودیاری",
    description: "سفر به درون برای رشد فردی و ذهنی",
    Icon: Brain,
    gradient: "from-[#E5ECFF] via-[#D8E6FF] to-[#C7DAFF]",
    iconColor: "text-[#2563EB]",
  },
  {
    label: "تاریخ و جامعه",
    description: "روایت‌هایی از گذشته برای فهم امروز",
    Icon: Globe,
    gradient: "from-[#E0F6FF] via-[#CCECFF] to-[#B3E1FF]",
    iconColor: "text-[#0284C7]",
  },
  {
    label: "زبان و آموزش",
    description: "یادگیری زبان‌های جدید و مهارت‌های آکادمیک",
    Icon: GraduationCap,
    gradient: "from-[#E6FFF4] via-[#CCFBEF] to-[#B2F1E5]",
    iconColor: "text-[#0F766E]",
  },
  {
    label: "شعر و ادبیات",
    description: "کلمات موزون و نثر ادبی برای عاشقان واژه‌ها",
    Icon: Feather,
    gradient: "from-[#FFF4E5] via-[#FFE6C7] to-[#FFD7A8]",
    iconColor: "text-[#EA580C]",
  },
  {
    label: "کسب‌وکار و مدیریت",
    description: "آموزش‌های استراتژیک برای رشد حرفه‌ای",
    Icon: BriefcaseBusiness,
    gradient: "from-[#F0F4FF] via-[#DFE7FF] to-[#CBD6FF]",
    iconColor: "text-[#4338CA]",
  },
  {
    label: "علمی و فناوری",
    description: "آخرین دستاوردهای علمی و دنیای تکنولوژی",
    Icon: Atom,
    gradient: "from-[#F1F9FF] via-[#E2F1FF] to-[#CCE5FF]",
    iconColor: "text-[#0EA5E9]",
  },
  {
    label: "سلامت و سبک زندگی",
    description: "مسیر تعادل ذهن و جسم در روزمرگی",
    Icon: HeartPulse,
    gradient: "from-[#FFEFE5] via-[#FFD9CC] to-[#FFC2B3]",
    iconColor: "text-[#F97316]",
  },
  {
    label: "کودک و نوجوان",
    description: "کتاب‌های سرگرم‌کننده و آموزنده برای نسل جوان",
    Icon: Puzzle,
    gradient: "from-[#F2F4FF] via-[#E1E7FF] to-[#CFDAFF]",
    iconColor: "text-[#4C1D95]",
  },
  {
    label: "هنر و طراحی",
    description: "الهام برای ذهن‌های خلاق و هنردوست",
    Icon: Palette,
    gradient: "from-[#FFF0F5] via-[#FFDFF1] to-[#FFCBEA]",
    iconColor: "text-[#DB2777]",
  },
  {
    label: "توسعه فردی",
    description: "آموزه‌هایی برای روشن‌تر شدن مسیر رشد شخصی",
    Icon: Sparkles,
    gradient: "from-[#F4FFF0] via-[#E2FAD6] to-[#CCF5B1]",
    iconColor: "text-[#16A34A]",
  },
]

export default function CategoryCarousel() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3 text-right">
          <p className="text-sm font-semibold text-primary/70">کاوش موضوعی</p>
          <h2 className="text-3xl font-black tracking-tight text-primary sm:text-4xl">دسته‌بندی‌های محبوب شهر کتاب</h2>
          <p className="text-base leading-7 text-neutral/70">
            از میان موضوعات متنوع انتخاب کنید و کتاب بعدی‌تان را سریع‌تر پیدا کنید.
          </p>
        </div>
        <Link
          href="/categories"
          className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-primary/20 px-5 py-2 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/5"
        >
          مشاهده همه دسته‌بندی‌ها
          <ArrowLeft className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {CATEGORIES.map((item) => (
          <article
            key={item.label}
            className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${item.gradient} p-6 text-right shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7`}
          >
            <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-2xl transition-transform duration-300 group-hover:scale-110" />
            <span className="pointer-events-none absolute -bottom-12 left-6 h-24 w-24 rounded-full bg-white/10 blur-3xl transition-transform duration-300 group-hover:translate-y-3" />
            <item.Icon className={`size-10 ${item.iconColor} drop-shadow-sm`} aria-hidden="true" />
            <div className="mt-8 space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.label}
              </h3>
              <p className="text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
