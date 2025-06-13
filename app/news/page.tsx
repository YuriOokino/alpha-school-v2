"use client"

import { useState, useEffect } from "react"
import MainHeading from "@/components/layout/main-heading"
import WhatsNextSection from "@/components/sections/whats-next-section"
import ArticleCard from "@/components/features/article-card"
import Link from "next/link"

// Helper to get slug from filename
function getSlug(filename: string) {
  return filename.replace(/\.ts$/, "");
}

export default function NewsPage() {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    async function loadArticles() {
      // Manually import all news articles (expand this as you add more files)
      const files = [
        { slug: "sample-news-article", mod: await import("@/content/news/sample-news-article") },
      ];
      setArticles(files.map(f => ({ ...f.mod.default, slug: f.slug })));
    }
    loadArticles();
  }, []);

  const [selectedCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")

  // Filter news items based on search query (add category logic if needed)
  const filteredNews = articles.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (item.summary && item.summary.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSearch
  })

  return (
    <main>
      <MainHeading
        description="Stay updated with the latest news, announcements, and stories from Alpha School."
      >
        News & Updates
      </MainHeading>

      <section className="alpha-section">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Category filter can be added here if needed */}
          <input
            type="text"
            placeholder="Search news..."
            className="p-2 border rounded-lg flex-grow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
          {filteredNews.map((item) => (
            <Link key={item.slug} href={`/news/${item.slug}`}>
              <ArticleCard
                imageSrc={item.image}
                imageAlt={item.title}
                title={item.title}
                date={item.date}
                href={`/news/${item.slug}`}
              />
            </Link>
          ))}
        </div>
      </section>

      <WhatsNextSection />
    </main>
  )
} 