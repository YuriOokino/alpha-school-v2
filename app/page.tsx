"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommitmentCard from "@/components/features/commitment-card"
import React, { useState, useRef, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import MainHeading from "@/components/layout/main-heading"
import WhatsNextSection from "@/components/sections/whats-next-section"
import FeatureCard from "@/components/features/feature-card"
import SimpleCarousel from "@/components/features/simple-carousel"
import LocationCard from "@/components/features/location-card"
import SectionHeading from "@/components/features/section-heading"
import { getAllCampuses, getUpcomingCampuses } from "@/utils/campuses"
import type { CampusMetadata } from "@/utils/campuses"

// Import the new components at the top of the file
import TestimonialsSection from "@/components/sections/testimonials-section"
import AlphaGuidesSection from "@/components/sections/alpha-guides-section"
import CampusMapSection from "@/components/sections/CampusMapSection"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from "@/components/ui/carousel"
import HeroSection from "@/components/sections/hero-section"
import CommitmentsSection from "@/components/sections/commitments-section"
import KidsNeedSection from "@/components/sections/kids-need-section"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function Home() {
  const [campuses, setCampuses] = useState<CampusMetadata[]>([]);

  useEffect(() => {
    const loadCampuses = async () => {
      const upcomingCampuses = await getUpcomingCampuses();
      setCampuses(upcomingCampuses);
    };
    loadCampuses();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <CommitmentsSection />

      <KidsNeedSection />

      <section className="alpha-section">
        <SectionHeading
          title="New Locations"
          description="Alpha School is expanding across the United States. Find a campus near you."
        />
        
        <div className="w-full scheme-maroon rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="section-headline font-bold text-[var(--color-text-main)]">Find a Campus Near You</h3>
            <Button variant="pink" className="gap-2" href="/locations">
              View all Locations
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill="currentColor"/>
              </svg>
            </Button>
          </div>
          <div className="relative flex items-center">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{
                  width: `${campuses.length * (100 / 3.5)}%`,
                  transform: `translateX(-${activeIndex * (100 / 3.5)}%)`,
                }}
              >
                {campuses.map((campus, idx) => (
                  <div
                    key={idx}
                    style={{ flex: '0 0 31%' }}
                    className="px-2 flex-shrink-0 group"
                  >
                    <LocationCard
                      image={campus.image}
                      title={campus.name}
                      address={campus.address}
                      tuition={campus.tuition}
                      buttonText={campus.buttonText}
                      buttonHref={campus.buttonHref}
                      newsHeading={campus.newsHeading}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Navigation below cards */}
          <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
            {/* Dots - left */}
            <div className="flex gap-2">
              {campuses.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-[var(--color-warm-dark)]' : 'bg-[#B0B0B0]'} transition-colors`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Arrows - right */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveIndex((prev) => (prev === 0 ? campuses.length - 1 : prev - 1))}
                disabled={activeIndex === 0}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
                aria-label="Previous"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev === campuses.length - 1 ? 0 : prev + 1))}
                disabled={activeIndex === campuses.length - 1}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
                aria-label="Next"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Alpha Guides Section */}
      <AlphaGuidesSection />

      <CampusMapSection />

      {/* What's Next Section */}
      <WhatsNextSection />
    </main>
  )
}
