"use client"

import WhatsNextSection from "@/components/sections/whats-next-section"
import LocationCard from "@/components/features/location-card"
import { locations } from "@/content/locations"

export default function LocationsPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
            {locations.current.map((location, idx) => (
              <LocationCard
                key={idx}
                image={location.image}
                title={location.name}
                address={location.address}
                city={location.city}
                tuition={location.tuition}
                buttonText={location.buttonText}
                buttonHref={location.buttonHref}
                newsHeading={location.newsHeading}
                className="scheme-lightblue"
              />
            ))}
          </div>
        </div>

        <div className="w-full bg-[var(--color-bg-muted)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative mt-[var(--space-lg)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="section-headline font-bold">Coming Soon</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-md)]">
            {locations.upcoming.map((location, idx) => (
              <LocationCard
                key={`upcoming-${idx}`}
                image={location.image}
                title={location.name}
                address={location.address}
                city={location.city}
                tuition={location.tuition}
                buttonText={location.buttonText}
                buttonHref={location.buttonHref}
                newsHeading={location.newsHeading}
              />
            ))}
          </div>
        </div>
      </section>
      <WhatsNextSection />
    </main>
  )
} 