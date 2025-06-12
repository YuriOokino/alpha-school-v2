"use client"

import React, { useState } from "react"

interface SimpleCarouselProps {
  items: any[];
  renderItem: (item: any, index: number) => React.ReactNode;
  visibleCards?: number;
  className?: string;
  showNavigation?: boolean;
}

export default function SimpleCarousel({
  items,
  renderItem,
  visibleCards = 3,
  className = "",
  showNavigation = true
}: SimpleCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardWidth = 100 / visibleCards;

  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className={`w-full relative ${className}`}>
      <div className="relative flex items-center">
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${activeIndex * cardWidth}%)`,
            }}
          >
            {items.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${cardWidth}%` }}
                className="px-2 flex-shrink-0"
              >
                {renderItem(item, idx)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showNavigation && (
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Dots */}
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'} transition-colors`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevItem}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-muted-hover)]"
              aria-label="Previous"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M13 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextItem}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[var(--color-bg-muted)] hover:bg-[var(--color-bg-muted-hover)]"
              aria-label="Next"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M7 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 