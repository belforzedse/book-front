const tiers = [
  {
    label: "سفر مطالعه",
    description: "هر ۵۰ هزار تومان خرید = ۵ امتیاز",
    color: "from-[#FCE7F3] to-[#FBCFE8]",
  },
  {
    label: "دوستان کتاب",
    description: "ثبت‌نام دوستان = ۱۰ امتیاز هدیه",
    color: "from-[#DBF4FF] to-[#BFDBFE]",
  },
  {
    label: "شب‌های نقد",
    description: "شرکت در رویدادها = ۸ امتیاز",
    color: "from-[#FEF3C7] to-[#FDE68A]",
  },
]

export default function LoyaltyProgramBanner() {
  return (
    <section className="px-4">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-r from-white via-secondary/60 to-white p-8 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.22)] md:flex-row md:items-center md:p-12">
        <div className="absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -right-16 -top-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative flex-1 space-y-6 text-primary">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold text-primary">
            امتیاز جمع کن، جایزه بگیر
          </span>
          <h2 className="text-2xl font-bold leading-tight md:text-3xl">باشگاه وفاداری «هم‌خوان»</h2>
          <p className="max-w-xl text-sm text-neutral md:text-base">
            با هر خرید و مشارکت در فعالیت‌های فرهنگی، امتیازهای شما در کیف امتیاز «هم‌خوان» ذخیره می‌شود. امتیازها را می‌توانید برای دریافت کارت هدیه، ارسال رایگان یا شرکت در جلسات خصوصی نقد کتاب خرج کنید.
          </p>
          <div className="grid gap-4 text-xs uppercase tracking-wide text-primary md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-2xl bg-gradient-to-br ${tier.color} p-4 text-right shadow-sm`}
              >
                <p className="text-sm font-semibold text-primary">{tier.label}</p>
                <p className="pt-1 text-[13px] text-primary/70">{tier.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-neutral">
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent" />
              تبدیل امتیاز به کارت هدیه
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              ارسال رایگان سفارش‌های منتخب
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              دسترسی زودهنگام به تازه‌های نشر
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute inset-x-10 bottom-2 h-16 rounded-full bg-black/10 blur-3xl" />
          <div className="relative mx-auto flex h-full max-w-md flex-col items-center justify-center rounded-[2.5rem] border border-primary/10 bg-white/90 p-8 shadow-xl">
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold text-primary">
                <span>کیف امتیاز شما</span>
                <span className="text-lg font-black text-accent">۲۸۵</span>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-white px-5 py-6 text-right text-sm text-neutral">
                <p className="font-semibold text-primary">امتیاز ویژه جشن مهرگان</p>
                <p className="pt-1 text-xs text-neutral/80">با شرکت در نشست نقد «شهر کتاب» ۲۰ امتیاز اضافه بگیرید.</p>
              </div>
              <div className="grid gap-3 text-xs text-neutral">
                {["۳۵ امتیاز تا کارت هدیه ۱۰۰ هزار تومانی", "۱۲ امتیاز تا ارسال رایگان", "شرکت در ۲ رویداد تا سطح طلایی"].map((goal) => (
                  <div key={goal} className="flex items-center gap-3 rounded-full bg-primary/5 px-4 py-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      ✓
                    </span>
                    <span className="text-right text-[13px] text-primary">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
