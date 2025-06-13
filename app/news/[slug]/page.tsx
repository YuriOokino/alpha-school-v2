import MainHeading from "@/components/layout/main-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import sampleNewsArticle from "@/content/news/sample-news-article";

export default function NewsArticlePage() {
  // Use the imported article data
  const article = sampleNewsArticle;

  const morePosts = [
    {
      title: "What Is The Best Private School In Austin For Elementary School?",
      href: "#"
    },
    {
      title: "Best Austin Private Elementary Schools For Families Moving To Austin In 2025",
      href: "#"
    },
    {
      title: "Top Private K-5 Schools in Austin For Parents Relocating With A 5-Year-Old",
      href: "#"
    },
    {
      title: "Finding The Right Private Elementary School In Austin When Moving From California",
      href: "#"
    }
  ];

  // Helper to render content as paragraphs
  const renderContent = () => {
    const content: any = article.content;
    if (typeof content === 'string') {
      return content.split('\n\n').map((para: string, idx: number) => (
        <p key={idx} className="body-text mb-4">{para}</p>
      ));
    } else if (Array.isArray(content) && content.every((p: any) => typeof p === 'string')) {
      return content.map((para: string, idx: number) => (
        <p key={idx} className="body-text mb-4">{para}</p>
      ));
    }
    return null;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[var(--space-xl)] alpha-section">
      {/* Main Article Content */}
      <article className="flex-1 max-w-3xl mx-auto">
        <p className="text-[var(--color-text-muted)] mb-2">{article.date}</p>
        <h1 className="heading-style-h1 mb-4">{article.title}</h1>
        {article.author && (
          <div className="mb-6">
            <span className="font-semibold">Author:</span> {article.author}
          </div>
        )}
        {/* <div className="w-full aspect-video rounded-[var(--radius-lg)] overflow-hidden mb-6 bg-[var(--color-bg-muted)]" style={{ maxHeight: '30vh' }}>
          <Image src={article.image} alt={article.title} fill className="object-cover w-full h-full" />
        </div> */}
        {renderContent()}
        <Button className="mt-6">Read More</Button>
      </article>
      {/* Sidebar */}
      <aside className="w-full lg:w-[320px] flex-shrink-0 mt-12 lg:mt-0">
        <div className="mb-8">
          <span className="font-semibold">Share:</span>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Share on Facebook">FB</a>
            <a href="#" aria-label="Share on Twitter">TW</a>
            <a href="#" aria-label="Share on LinkedIn">LI</a>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-3">More Posts</div>
          <ul className="space-y-3">
            {morePosts.map((post, idx) => (
              <li key={idx}>
                <Link href={post.href} className="text-[var(--color-primary)] underline">{post.title}</Link>
                <div className="text-xs mt-1"><Link href={post.href}>Read More</Link></div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
} 