"use client"

import React, { useState } from "react"

interface CarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  visibleCards?: number;
  className?: string;
  header?: React.ReactNode;
  navigationDotsColor?: {
    active: string;
    inactive: string;
  };
  navigationArrowsColor?: {
    background: string;
    icon: string;
  };
}

export default function Carousel({
  items,
  renderItem,
  visibleCards = 3.5,
  className = "",
  header,
  navigationDotsColor = {
    active: "bg-white",
    inactive: "bg-[#B0B0B0]"
  },
  navigationArrowsColor = {
    background: "bg-white",
    icon: "#111827"
  }
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 100 / visibleCards;

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] relative ${className}`}>
      {header}
      <div className="relative flex items-center">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              width: `${items.length * cardWidth}%`,
              transform: `translateX(-${activeIndex * cardWidth}%)`,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
                className="px-2 flex-shrink-0"
              >
                {renderItem(item, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Navigation below cards */}
      <div className="flex items-center justify-between mt-[var(--space-lg)] px-2">
        {/* Dots - left */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? navigationDotsColor.active : navigationDotsColor.inactive} transition-colors`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Arrows - right */}
        <div className="flex gap-3">
          <button
            onClick={prevItem}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${navigationArrowsColor.background} disabled:opacity-50`}
            aria-label="Previous"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M13 15l-5-5 5-5" stroke={navigationArrowsColor.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextItem}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${navigationArrowsColor.background} disabled:opacity-50`}
            aria-label="Next"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path d="M7 5l5 5-5 5" stroke={navigationArrowsColor.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
} 