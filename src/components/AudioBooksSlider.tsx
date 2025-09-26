import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"
import type { ProductSummary } from "@/lib/vendure"
import { formatCurrency, PLACEHOLDER_IMAGE } from "@/lib/utils"
import { fillProductsWithPlaceholders } from "@/lib/product-placeholders"

type AudioBooksSliderProps = {
  title: string
  subtitle: string
  products: (ProductSummary & { narrator?: string; author?: string })[]
}

type AudioBookCardProps = {
  product: ProductSummary & { narrator?: string; author?: string }
}

const waveformBackground = {
  backgroundImage:
    "linear-gradient(135deg, rgba(37, 99, 235, 0.95), rgba(15, 23, 42, 0.95)), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='80' viewBox='0 0 160 80'%3E%3Cpath fill='none' stroke='rgba(255,255,255,0.18)' stroke-width='3' d='M0 40 Q20 0 40 40 T80 40 T120 40 T160 40'/%3E%3C/svg%3E\")",
  backgroundSize: "cover, 180px 90px",
  backgroundRepeat: "no-repeat, repeat-x",
  backgroundPosition: "center, center",
}

function AudioBookCard({ product }: AudioBookCardProps) {
  const narrator = product.narrator || product.author || "گوینده نامشخص"

  return (
    <Link
      href={"/product/" + product.id}
      className="group flex min-w-[240px] max-w-xs flex-col justify-between rounded-3xl bg-white/10 p-5 text-right text-white shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-2xl bg-white/20">
          <Image
            src={product.image || PLACEHOLDER_IMAGE}
            alt={product.name}
            fill
            sizes="120px"
            className="object-cover"
          />
        </div>
        <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold text-white/80">کتاب صوتی</span>
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-xs text-white/60">با صدای {narrator}</p>
        <h3 className="text-lg font-semibold leading-6 text-white">{product.name}</h3>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-white/70">
          <span>شروع از</span>
          <span className="mr-1 font-semibold text-white">{formatCurrency(product.priceWithTax, product.currencyCode)}</span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary transition group-hover:bg-secondary group-hover:text-white">
          <Play className="h-4 w-4" />
          شروع گوش دادن
        </span>
      </div>
    </Link>
  )
}

export default function AudioBooksSlider({ title, subtitle, products }: AudioBooksSliderProps) {
  const dataset = fillProductsWithPlaceholders(products, 6)

  return (
    <section className="mx-auto max-w-6xl px-4">
      <div
        className="relative overflow-hidden rounded-3xl p-10 text-right text-white shadow-xl"
        style={waveformBackground}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">{subtitle}</p>
            <h2 className="text-3xl font-black">{title}</h2>
            <p className="max-w-xl text-sm leading-7 text-white/70">
              مجموعه‌ای از محبوب‌ترین کتاب‌های صوتی با میکس صدای حرفه‌ای و کیفیت بالا را همین حالا بشنوید.
            </p>
          </div>
          <Link
            href="/catalog?format=audio"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow transition hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
          >
            مشاهده آرشیو کامل
          </Link>
        </div>
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4">
          {dataset.map((product) => (
            <AudioBookCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
