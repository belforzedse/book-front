import { BookOpen, Feather, Globe, GraduationCap, Sparkles } from "lucide-react"

const CATEGORIES = [
  { label: "رمان و داستان", Icon: BookOpen },
  { label: "توسعه فردی", Icon: Sparkles },
  { label: "تاریخ و جامعه", Icon: Globe },
  { label: "آموزشی", Icon: GraduationCap },
  { label: "شعر و ادبیات", Icon: Feather },
]

export default function CategoryCarousel() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-lg font-semibold text-primary">دسته‌بندی‌ها</h2>
        <span className="text-sm text-neutral/70">بر اساس علایق خود انتخاب کنید</span>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {CATEGORIES.map((item) => (
          <div
            key={item.label}
            className="flex min-w-[150px] flex-col items-center gap-3 rounded-2xl bg-card p-5 text-center text-neutral shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <item.Icon className="size-8 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary/90">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
