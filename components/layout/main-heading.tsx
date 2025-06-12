"use client"

import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export default function MainHeading({ children, description, actions, className = "" }: MainHeadingProps) {
  return (
    <div className="pt-[var(--space-3xl)] mb-[var(--space-lg)]">
      <h1
        className={`alpha-heading text-center max-w-[60vw] mx-auto mb-6 ${className}`.trim()}
        tabIndex={-1}
      >
        {children}
      </h1>
      {description && (
        <div className="text-lg text-[#111827] text-center max-w-[60vw] mx-auto mb-6">
          {description}
        </div>
      )}
      {actions && (
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {actions}
        </div>
      )}
    </div>
  );
} 