import LocationCard from "@/components/features/location-card";
import React, { useState, useCallback } from "react";

interface Location {
  image: string;
  title: string;
  address: string;
  city: string;
  tuition: string;
  buttonText?: string;
  buttonHref?: string;
  buttonClassName?: string;
}

interface NewLocationsSectionProps {
  locations: Location[];
}

export default function NewLocationsSection({ locations }: NewLocationsSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cardsPerPage = 4;
  const scrollTo = useCallback((idx: number) => {
    setSelectedIndex(idx);
  }, []);

  return (
    <section className="alpha-section">
      <h2 className="section-headline text-center text-[#111827] mb-[var(--space-lg)]">New Locations Opening in August 2025</h2>
      <div className="w-full bg-[#6B3535] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
          <h3 className="font-bold text-2xl text-[#FFD1D1]">New Locations Opening in August 2025</h3>
          <a href="#" className="alpha-btn-warm text-base inline-flex items-center gap-2 self-start md:self-auto">View all locations</a>
        </div>
        <div className="relative flex items-center">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${locations.length * (100 / 4.2)}%`,
                transform: `translateX(-${selectedIndex * (100 / 4.2)}%)`,
              }}
            >
              {locations.map((location, idx) => (
                <div
                  key={idx}
                  style={{ width: `${100 / 4.2}%`, minWidth: `${100 / 4.2}%` }}
                  className="px-2"
                >
                  <LocationCard {...location} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation controls */}
        <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
          {/* Dots - left */}
          <div className="flex gap-2">
            {locations.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === selectedIndex ? 'bg-[#FFD1D1]' : 'bg-[#5C2727]'} transition-colors`}
                onClick={() => setSelectedIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrows - right */}
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1))}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD1D1] disabled:opacity-50"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#5C2727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FFD1D1] disabled:opacity-50"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#5C2727" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 