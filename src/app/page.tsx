import Hero from "@/components/Hero"
import FeatureHighlights from "@/components/FeatureHighlights"
import CategoryCarousel from "@/components/CategoryCarousel"
import FeaturedBooksGrid from "@/components/FeaturedBooksGrid"
import AudioBooksSlider from "@/components/AudioBooksSlider"
import SpecialOffersSection from "@/components/SpecialOffersSection"
import Banner from "@/components/Banner"
import BlogPreview from "@/components/BlogPreview"
import { getProducts } from "@/lib/vendure"

export default async function HomePage() {
  const products = await getProducts(18)
  const heroProducts = products.slice(0, 5)
  const bestSellers = products.slice(0, 4)
  const audioSelection = products.slice(4, 12)
  const discounted = products.filter((item) =>
    typeof item.compareAtPrice === "number" && item.compareAtPrice > item.priceWithTax,
  )
  const personalGrowth = products.slice(12, 16)

  return (
    <div className="space-y-16 pb-20 text-neutral">
      <Hero products={heroProducts} />
      <FeatureHighlights />
      <CategoryCarousel />
      <FeaturedBooksGrid
        title="پرفروش‌های هفته"
        subtitle="TOP PICKS"
        products={bestSellers}
      />
      <AudioBooksSlider title="کتاب‌های صوتی منتخب" subtitle="AUDIO PICKS" products={audioSelection} />
      <SpecialOffersSection title="پیشنهادهای ویژه کتاب‌خوان‌ها" subtitle="SPECIAL DEALS" products={discounted} />
      <Banner
        title="کتاب‌های توسعه فردی با تخفیف ویژه"
        subtitle="مهارت‌های فردی و شغلی خود را با بهترین عناوین ترجمه و تالیف روز ارتقا دهید."
        ctaLabel="مشاهده تخفیف‌ها"
        ctaHref="/catalog"
      />
      <FeaturedBooksGrid title="توسعه فردی" subtitle="GROWTH" products={personalGrowth} />
      <BlogPreview />
    </div>
  )
}
