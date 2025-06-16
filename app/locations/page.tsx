import WhatsNextSection from "@/components/sections/whats-next-section"
import LocationCard from "@/components/features/location-card"
import { getCurrentCampuses, getUpcomingCampuses } from "@/utils/campuses"

export default async function LocationsPage() {
  const [currentCampuses, upcomingCampuses] = await Promise.all([
    getCurrentCampuses(),
    getUpcomingCampuses()
  ])

  return (
    <main>
      <section className="alpha-section">
        <h1 className="section-headline text-center mb-[var(--space-md)]">Our Locations</h1>
        <p className="text-lg text-[#111827] text-center max-w-[60vw] mx-auto mb-[var(--space-lg)]">
          Alpha School is expanding across the United States. Find a campus near you and join our growing community of learners.
        </p>
        <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="section-headline font-bold">Current Campuses</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
            {currentCampuses.map((campus) => (
              <LocationCard
                key={campus.name}
                image={campus.image}
                title={campus.name}
                address={campus.address}
                tuition={campus.tuition}
                buttonText={campus.buttonText}
                buttonHref={campus.buttonHref}
                newsHeading={campus.newsHeading}
                className="scheme-lightblue"
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative mt-[var(--space-md)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="section-headline font-bold">Coming Soon</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-md)]">
            {upcomingCampuses.map((campus) => (
              <LocationCard
                key={campus.name}
                image={campus.image}
                title={campus.name}
                address={campus.address}
                tuition={campus.tuition}
                buttonText={campus.buttonText}
                buttonHref={campus.buttonHref}
                newsHeading={campus.newsHeading}
              />
            ))}
          </div>
        </div>
      </section>
      <WhatsNextSection />
    </main>
  )
} 