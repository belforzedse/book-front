import BlogCard from "@/components/BlogCard"
import { getNews } from "@/lib/strapi"
import { PLACEHOLDER_IMAGE } from "@/lib/utils"

type NewsCard = {
  id: string
  title: string
  publishedAt: string
  image: string
  snippet: string
}

const FALLBACK_NEWS: NewsCard[] = [
  {
    id: "placeholder-1",
    title: "خبر فرهنگی",
    publishedAt: "2024-01-03T00:00:00.000Z",
    image: PLACEHOLDER_IMAGE,
    snippet: "آخرین خبرهای فرهنگی و هنری شهرکتاب در این بخش منتشر خواهد شد.",
  },
]

export default async function NewsPage() {
  const news = await getNews()
  const cards: NewsCard[] = news.length > 0
    ? news.map((item) => ({
        id: item.id,
        title: item.title,
        publishedAt: item.publishedAt,
        image: item.image,
        snippet: item.title,
      }))
    : FALLBACK_NEWS

  return (
    <div className="layout-frame space-y-8 py-12 text-neutral">
      <div className="space-y-2 text-right">
        <h1 className="text-2xl font-bold text-primary">اخبار شهرکتاب</h1>
        <p className="text-sm text-neutral/70">گزارش رویدادها، تازه‌های نشر و گفت‌وگو با نویسندگان</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => (
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
    </div>
  )
}
