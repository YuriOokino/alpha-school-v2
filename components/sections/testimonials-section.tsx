"use client"

import { useState } from "react"
import TestimonialCard from "@/components/features/testimonial-card"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/content/testimonials"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const visibleCards = 3.25
  const cardWidth = 100 / visibleCards

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="alpha-section">
      <h2 className="section-headline font-bold text-center mb-[var(--space-lg)] text-[#111827]">From Our Students</h2>
      <div className="w-full flex justify-center mb-[var(--space-xl)]">
        <div className="w-full max-w-[1280px] px-6 md:px-[var(--space-md)] aspect-video rounded-[var(--radius-lg)] overflow-hidden bg-black">
          <iframe
            src="https://player.vimeo.com/video/1033250050"
            title="Student Testimonial Video"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
      <div className="w-full bg-[hsl(var(--color-surface))] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
        <div className="relative flex items-center">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${(testimonials.length) * cardWidth}%`,
                transform: `translateX(-${activeIndex * cardWidth}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  style={{ flex: '0 0 31%' }}
                  className="px-2 max-w-[340px] flex-shrink-0"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation below cards */}
        <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
          {/* Dots - left */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-[#B0B0B0]'} transition-colors`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrows - right */}
          <div className="flex gap-3">
            <button
              onClick={prevTestimonial}
              disabled={activeIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextTestimonial}
              disabled={activeIndex === testimonials.length - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
