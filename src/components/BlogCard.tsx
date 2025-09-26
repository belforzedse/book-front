import Image from "next/image"
import Link from "next/link"
import { PLACEHOLDER_IMAGE, truncate, formatDate } from "@/lib/utils"

type BlogCardProps = {
  id: string
  title: string
  publishedAt: string
  image?: string
  snippet?: string
}

export default function BlogCard({ id, title, publishedAt, image, snippet }: BlogCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-card p-4 text-neutral shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-secondary">
        <Image
          src={image || PLACEHOLDER_IMAGE}
          alt={title}
          fill
          sizes="(min-width: 1024px) 360px, 80vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 text-right">
        <time dateTime={publishedAt} className="text-xs text-neutral/60">
          {formatDate(publishedAt)}
        </time>
        <h3 className="text-base font-semibold text-primary">{title}</h3>
        {snippet ? <p className="text-sm text-neutral/80">{truncate(snippet, 110)}</p> : null}
        <Link
          href={"/news?focus=" + id}
          className="text-sm font-semibold text-accent transition hover:text-orange-600"
        >
          ادامه مطلب
        </Link>
      </div>
    </article>
  )
}
