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
    <article className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={image || PLACEHOLDER_IMAGE}
          alt={title}
          fill
          sizes="(min-width: 1024px) 360px, 80vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-2 text-right">
        <time dateTime={publishedAt} className="text-xs text-gray-400">
          {formatDate(publishedAt)}
        </time>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {snippet ? <p className="text-sm text-gray-600">{truncate(snippet, 110)}</p> : null}
        <Link
          href={"/news?focus=" + id}
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          ادامه مطلب
        </Link>
      </div>
    </article>
  )
}
