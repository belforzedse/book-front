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
      <div className="relative overflow-hidden rounded-3xl shadow-lg">
        <div className="absolute inset-0">
          <Image
            src={image || PLACEHOLDER_IMAGE}
            alt={title}
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative grid gap-6 p-8 text-white lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center space-y-4">
            <span className="text-sm font-semibold text-secondary">پیشنهاد ویژه</span>
            <h2 className="text-2xl font-bold lg:text-3xl">{title}</h2>
            <p className="text-white/90">{subtitle}</p>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              {ctaLabel}
            </Link>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm">
            <Image
              src={image || PLACEHOLDER_IMAGE}
              alt={title}
              fill
              sizes="(min-width: 1024px) 480px, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  )
}
