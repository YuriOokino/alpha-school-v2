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
import CommitmentsSection from "@/components/sections/commitments-section"
import KidsNeedSection from "@/components/sections/kids-need-section"
import NewLocationsSection from "@/components/sections/new-locations-section"
import { locations } from "@/content/new-locations"

export default function Home() {
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
      <CommitmentsSection />

      <KidsNeedSection />

      <NewLocationsSection locations={locations} />

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
