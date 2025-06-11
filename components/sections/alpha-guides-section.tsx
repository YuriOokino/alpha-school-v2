"use client"

import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { guides } from "@/content/guides"
import Link from "next/link"

const visibleCards = 3.5;
const cardWidth = 100 / visibleCards;

type Guide = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const GuideCard = ({ guide }: { guide: Guide }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative h-full rounded-[var(--radius-md)] overflow-hidden bg-white flex flex-col justify-end group"
      style={{ minHeight: 400 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={guide.image} alt={guide.name} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 p-0 flex flex-col gap-2 w-full">
        <div
          className={
            "transition-colors duration-500 ease-in-out rounded-[var(--radius-md)] p-4 m-4 cursor-pointer bg-[#B9EDFF] " +
            (hovered ? "bg-[rgba(0,0,237,0.7)]" : "")
          }
        >
          <div className={"transition-all duration-300 ease-in-out " + (hovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto overflow-visible')}>
            <span className="inline-block bg-[#0000ED] text-white text-xs rounded px-2 py-0.5 mb-2 w-max">{guide.role}</span>
            <h3 className="text-[#111827] font-bold text-lg leading-tight mb-1">{guide.name}</h3>
          </div>
          <p className={"text-white text-sm leading-snug transition-all duration-300 ease-in-out m-0 " + (hovered ? 'opacity-100 h-auto overflow-visible' : 'opacity-0 h-0 overflow-hidden')}>{guide.bio}</p>
        </div>
      </div>
    </div>
  );
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
    <section className="alpha-section">
      {/* Hero/Intro Section */}
      <div className="text-center max-w-3xl mx-auto mb-[var(--space-xl)]">
        <h2 className="section-headline font-bold mb-6">The Alpha Guides</h2>
        <p className="text-lg mb-8 text-[#111827]">At Alpha School, teachers shift from traditional roles like grading and writing lesson plans, to supporting students' emotional and motivational needs and teaching life skills. This impactful transformation frees up teachers to mentor, motivate, and coach students to become self-driven learners.</p>
        <Button className="mx-auto px-8 py-3 rounded-full bg-black text-white text-base font-semibold hover:bg-[#222]">Explore our program</Button>
      </div>
      {/* Light Blue Info Block - Commitments Style */}
      <div className="w-full bg-[hsl(var(--color-secondary))] rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-lg)] justify-between items-stretch mb-[var(--space-xl)]">
        {/* Guidance */}
        <div className="flex-1 flex flex-col items-start bg-transparent">
          <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-[#111827]">GUIDANCE</h3>
          <p className="text-[#111827]">Adults, whether teachers or parents, become 'Guides,' shifting the traditional teacher-student relationship to offer motivational and emotional support.</p>
        </div>
        {/* Support */}
        <div className="flex-1 flex flex-col items-start bg-transparent">
          <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-[#111827]">SUPPORT</h3>
          <p className="text-[#111827]">Assist students with AI-powered learning, help them develop life skills, and pursue their passions.</p>
        </div>
        {/* Motivation */}
        <div className="flex-1 flex flex-col items-start bg-transparent">
          <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
            <span className="block w-5 h-5 rounded-full bg-[#0000ED]" />
          </div>
          <h3 className="font-bold text-lg mb-2 text-[#111827]">MOTIVATION</h3>
          <p className="text-[#111827]">We motivate kids by giving them the gift of time to pursue the things they want to do and develop life skills. Adults in the room support motivated students to foster a growth mindset and independent learning.</p>
        </div>
      </div>
      <div className="w-full bg-[hsl(var(--color-surface))] rounded-[var(--radius-lg)] p-[var(--space-xl)] relative">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[var(--space-lg)] gap-[var(--space-md)]">
          <h3 className="section-headline font-bold">Meet our Guides</h3>
          <Button asChild variant="default" className="self-start md:self-auto gap-2">
            <Link href="#" className="!text-white">
              View all Guides
              
            </Link>
          </Button>
        </div>
        <div className="relative flex items-center">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                width: `${guides.length * cardWidth}%`,
                transform: `translateX(-${activeIndex * cardWidth}%)`,
              }}
            >
              {guides.map((guide, idx) => (
                <div
                  key={idx}
                  style={{ flex: '0 0 31%' }}
                  className="px-2 max-w-[340px] flex-shrink-0 group"
                >
                  <div className="relative h-full rounded-[var(--radius-md)] overflow-hidden bg-white flex flex-col justify-end" style={{ minHeight: 400 }}>
                    <img src={guide.image} alt={guide.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 p-0 flex flex-col gap-2">
                      <GuideCard guide={guide} />
                    </div>
                  </div>
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
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white disabled:opacity-50"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M13 15l-5-5 5-5" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={nextGuide}
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
