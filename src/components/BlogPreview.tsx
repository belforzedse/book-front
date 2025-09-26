"use client"

import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import BlogCard from "./BlogCard"
import { getNews } from "@/lib/strapi"
import { PLACEHOLDER_IMAGE } from "@/lib/utils"

const FALLBACK_NEWS = [
  {
    id: "placeholder-1",
    title: "خبر فرهنگی شهرکتاب",
    publishedAt: "2024-01-01T00:00:00.000Z",
    image: PLACEHOLDER_IMAGE,
    snippet: "به زودی تازه‌ترین اخبار فرهنگی و هنری شهرکتاب در این بخش منتشر می‌شود.",
  },
  {
    id: "placeholder-2",
    title: "رویدادهای تازه نشر",
    publishedAt: "2024-01-02T00:00:00.000Z",
    image: PLACEHOLDER_IMAGE,
    snippet: "اخبار انتشار کتاب‌های جدید و گفتگو با نویسندگان محبوب را از دست ندهید.",
  },
]

export default function BlogPreview() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
    staleTime: 1000 * 60 * 5,
  })

  const items = useMemo(() => {
    if (data && data.length > 0) {
      return data.map((entry) => ({
        id: entry.id,
        title: entry.title,
        publishedAt: entry.publishedAt,
        image: entry.image,
        snippet: entry.title,
      }))
    }
    return FALLBACK_NEWS
  }, [data])

  return (
    <section className="layout-frame space-y-4 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary">اخبار و مقالات</h2>
        <span className="text-xs text-neutral/70">با تازه‌ترین مطالب همراه شوید</span>
      </div>
      {isLoading ? (
        <p className="rounded-2xl bg-card p-6 text-center text-sm text-neutral/70 shadow-sm">
          در حال بارگذاری...
        </p>
      ) : null}
      {isError && !isLoading ? (
        <p className="rounded-2xl bg-card p-4 text-center text-sm text-danger shadow-sm">
          بارگیری اخبار با خطا مواجه شد؛ محتوای نمونه نمایش داده می‌شود.
        </p>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            title={item.title}
            publishedAt={item.publishedAt}
            image={item.image}
            snippet={item.snippet}
          />
        ))}
      </div>
    </section>
  )
}
