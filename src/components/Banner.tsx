import Image from "next/image"
import Link from "next/link"
import { PLACEHOLDER_IMAGE } from "@/lib/utils"

type BannerProps = {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  image?: string
}

export default function Banner({ title, subtitle, ctaLabel, ctaHref, image }: BannerProps) {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50">
        <div className="grid gap-6 p-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4">
            <span className="text-sm font-semibold text-blue-600">پیشنهاد ویژه</span>
            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {ctaLabel}
            </Link>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-blue-100 bg-white/60">
            <Image
              src={image || PLACEHOLDER_IMAGE}
              alt={title}
              fill
              sizes="(min-width: 1024px) 480px, 80vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
