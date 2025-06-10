"use client";
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommitmentCard from "@/components/features/commitment-card"
import React, { useState, useRef, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

// Import the new components at the top of the file
import TestimonialsSection from "@/components/sections/testimonials-section"
import AlphaGuidesSection from "@/components/sections/alpha-guides-section"
import WhatsNextSection from "@/components/sections/whats-next-section"
import CampusMapSection from "@/components/sections/CampusMapSection"
import LocationCard from "@/components/features/location-card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
} from "@/components/ui/carousel"
import HeroSection from "@/components/sections/hero-section"

export default function Home() {
  // Sample data for locations
  const locations = [
    {
      image: "/assets/location-img-placeholder.webp",
      title: "Alpha Miami (K-10)",
      address: "8000 SW 56th St.",
      city: "Miami, Florida 33155",
      tuition: "$40000",
    },
    {
      image: "/assets/location-img-placeholder.webp",
      title: "Alpha Austin (K-8)",
      address: "123 Main St.",
      city: "Austin, Texas 78701",
      tuition: "$35000",
    },
    {
      image: "/assets/location-img-placeholder.webp",
      title: "Alpha Houston (K-8)",
      address: "456 Oak Ave.",
      city: "Houston, Texas 77002",
      tuition: "$37000",
    },
    {
      image: "/assets/location-img-placeholder.webp",
      title: "Alpha Dallas (K-8)",
      address: "789 Pine Rd.",
      city: "Dallas, Texas 75201",
      tuition: "$36000",
    },
    {
      image: "/assets/location-img-placeholder.webp",
      title: "Alpha Orlando (K-8)",
      address: "101 Orange Blvd.",
      city: "Orlando, Florida 32801",
      tuition: "$34000",
    },
  ];

  // Carousel logic
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1, containScroll: 'trimSnaps', loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(4 / cardsPerPage); // 4 sample cards, 1 page
  const scrollTo = useCallback((idx: number) => {
    if (emblaApi) emblaApi.scrollTo(idx);
  }, [emblaApi]);
  // Listen to embla's select event
  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Commitments Section */}
      <section className="alpha-section bg-white">
        <h2 className="section-headline font-bold text-center text-[#111827] mb-[var(--space-lg)]">Alpha's 3 Commitments</h2>
        <div className="w-full bg-[#0000ED] rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-lg)] justify-between items-stretch">
          <CommitmentCard
            title="Love School"
            description="Alpha students love school – it's engaging, inspiring, and built for them."
            buttonText="Learn more"
            buttonHref="#"
          />
          <CommitmentCard
            title="Learn 2x in 2 Hours"
            description="Alpha students learn twice as fast as their peers and rank in the top 1% nationwide."
            buttonText="Button"
            buttonHref="#"
          />
          <CommitmentCard
            title="Learn Life Skills"
            description="Alpha students spend afternoons developing life skills and exploring their personas."
            buttonText="Button"
            buttonHref="#"
          />
        </div>
      </section>

      {/* Kids Need Two Things Section */}
      <section className="alpha-section">
        <div className="w-full bg-[#B9EDFF] rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-stretch">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="section-headline text-[#111827] mb-[var(--space-lg)]">Your kids need two things to learn</h2>
            <div className="mb-[var(--space-md)]">
              <h3 className="font-bold text-[#111827] mb-[var(--space-xs)]">Academics at the right level and pace</h3>
              <p className="body-text text-[#111827]">Our AI tutor gives students 1:1 personalized education, providing coursework at their individual pace and the appropriate level. Students progress with concept-based mastery and without any knowledge gaps.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#111827] mb-[var(--space-xs)]">Motivation with the right reward</h3>
              <p className="body-text text-[#111827]">We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning.</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full aspect-video rounded-[var(--radius-md)] overflow-hidden bg-black flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/ENdAWT6N0V4?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Falpha.school&widgetid=1&forigin=https%3A%2F%2Falpha.school%2F&aoriginsup=1&gporigin=https%3A%2F%2Falpha.school%2Fnews%2F&vf=3"
                title="How Alpha School Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Locations Section */}
      <section className="alpha-section">
        <h2 className="section-headline text-center text-[#111827] mb-[var(--space-lg)]">New Locations Opening in August 2025</h2>
        <div className="w-full bg-[#6B3535] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
            <h3 className="font-bold text-2xl text-[#FFD1D1]">New Locations Opening in August 2025</h3>
            <a href="#" className="alpha-btn-warm text-base inline-flex items-center gap-2 self-start md:self-auto">View all locations <span aria-hidden="true">&rarr;</span></a>
          </div>
          
          <div className="relative flex items-center">
            <div className="overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500"
                style={{
                  width: `${(locations.length) * (100 / 4.2)}%`,
                  transform: `translateX(-${selectedIndex * (100 / 4.2)}%)`,
                }}
              >
                {locations.map((location, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${100 / 4.2}%`, minWidth: `${100 / 4.2}%` }}
                    className="px-2"
                  >
                    <LocationCard
                      image={location.image}
                      title={location.title}
                      address={location.address}
                      city={location.city}
                      tuition={location.tuition}
                      buttonText="Apply Now"
                      buttonHref="#"
                      buttonClassName="alpha-btn-warm-secondary"
                    />
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

// Add CarouselNav component at the end of the file
function CarouselNav() {
  const { api, canScrollPrev, canScrollNext } = useCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  React.useEffect(() => {
    if (!api) return;
    setSlideCount(api.scrollSnapList().length);
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on('select', onSelect);
    onSelect();
    return () => api.off('select', onSelect);
  }, [api]);

  return (
    <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
      {/* Dots - left */}
      <div className="flex gap-2">
        {[...Array(slideCount)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => api && api.scrollTo(idx)}
            className={`w-3 h-3 rounded-full ${selectedIndex === idx ? 'bg-[#5C2727]' : 'bg-[#FFD1D1]'} transition-colors`}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
      {/* Arrows - right */}
      <div className="flex gap-3">
        <button
          onClick={() => api && api.scrollPrev()}
          disabled={!canScrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5C2727] disabled:opacity-50"
          aria-label="Previous"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#FFD1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          onClick={() => api && api.scrollNext()}
          disabled={!canScrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5C2727] disabled:opacity-50"
          aria-label="Next"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#FFD1D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
