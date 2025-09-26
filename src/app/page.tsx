import Hero from "@/components/Hero"
import CategoryCarousel from "@/components/CategoryCarousel"
import BookCarousel from "@/components/BookCarousel"
import Banner from "@/components/Banner"
import BlogPreview from "@/components/BlogPreview"
import { getProducts } from "@/lib/vendure"

export default async function HomePage() {
  const products = await getProducts(18)
  const heroProducts = products.slice(0, 5)
  const bestSellers = products.slice(0, 8)
  const discounted = products.filter((item) =>
    typeof item.compareAtPrice === "number" && item.compareAtPrice > item.priceWithTax,
  )
  const personalGrowth = products.slice(5, 13)

  return (
    <div className="space-y-16 pb-20 text-neutral">
      <Hero products={heroProducts} />
      <CategoryCarousel />
      <BookCarousel title="پرفروش‌ها" products={bestSellers} />
      <BookCarousel title="تخفیف‌های ویژه" products={discounted} />
      <Banner
        title="کتاب‌های توسعه فردی با تخفیف ویژه"
        subtitle="مهارت‌های فردی و شغلی خود را با بهترین عناوین ترجمه و تالیف روز ارتقا دهید."
        ctaLabel="مشاهده تخفیف‌ها"
        ctaHref="/catalog"
      />
      <BookCarousel title="توسعه فردی" products={personalGrowth} />
      <BlogPreview />
    </div>
  )
}
