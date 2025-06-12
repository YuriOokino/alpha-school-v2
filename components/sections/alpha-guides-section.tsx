"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { guides } from "@/content/guides"
import Link from "next/link"
import BenefitCard from "@/components/features/benefit-card"
import SectionHeading from "@/components/features/section-heading"
import Carousel from "@/components/features/carousel"
import GuideCard from "@/components/features/guide-card"

const benefits = [
  {
    title: "GUIDANCE",
    description: "Adults, whether teachers or parents, become 'Guides,' shifting the traditional teacher-student relationship to offer motivational and emotional support."
  },
  {
    title: "SUPPORT",
    description: "Assist students with AI-powered learning, help them develop life skills, and pursue their passions."
  },
  {
    title: "MOTIVATION",
    description: "We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning."
  }
];

type Guide = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function AlphaGuidesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevGuide = () => {
    setActiveIndex((prev) => (prev === 0 ? guides.length - 1 : prev - 1));
  };

  const nextGuide = () => {
    setActiveIndex((prev) => (prev === guides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="alpha-section bg-white">
      <SectionHeading 
        title="The Alpha Guides"
        description="At Alpha School, teachers shift from traditional roles like grading and writing lesson plans, to supporting students' emotional and motivational needs and teaching life skills. This impactful transformation frees up teachers to mentor, motivate, and coach students to become self-driven learners."
        buttonText="Explore our program"
        buttonHref="/the-program"
      />
      
      {/* Light Blue Info Block - Commitments Style */}
      <BenefitCard 
        benefits={benefits}
        className="bg-[var(--color-primary-light)] mb-[var(--space-xl)] [&>div>div>span]:bg-[var(--color-primary)] [&>div>h3]:text-[var(--color-primary)] [&>div>p]:text-[var(--color-text-main)]"
      />
      
      <div className="w-full bg-[var(--color-primary)] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
          <h3 className="section-headline font-bold text-white">Meet our Guides</h3>
          <Button variant="lightBlue" className="gap-2" href="/guides">
            View all Guides
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
                width: `${guides.length * (100 / 3.5)}%`,
                transform: `translateX(-${activeIndex * (100 / 3.5)}%)`,
              }}
            >
              {guides.map((guide, idx) => (
                <div
                  key={idx}
                  style={{ flex: '0 0 31%' }}
                  className="px-2 max-w-[340px] flex-shrink-0 group"
                >
                  <GuideCard {...guide} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation below cards */}
        <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
          {/* Dots - left */}
          <div className="flex gap-2">
            {guides.map((_, index) => (
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
              onClick={prevGuide}
              disabled={activeIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary-light)] disabled:opacity-50"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextGuide}
              disabled={activeIndex === guides.length - 1}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-primary-light)] disabled:opacity-50"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 5l5 5-5 5" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
