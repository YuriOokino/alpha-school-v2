import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WhatsNextSection() {
  return (
    <section className="py-16 bg-[hsl(var(--color-surface))] text-[hsl(var(--color-text-main))]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">What's next?</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline">Learn More</Button>
          <Button variant="outline">View Events</Button>
          <Button variant="link">
            <Link href="/video-library">Watch Videos</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
