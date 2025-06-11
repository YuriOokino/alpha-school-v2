"use client";
import React, { ReactNode } from "react";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  media: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function FeatureCard({ media, children, className, ...rest }: FeatureCardProps) {
  return (
    <div {...rest} className={`w-full rounded-[var(--radius-lg)] p-[var(--space-xl)] flex flex-col md:flex-row gap-[var(--space-xl)] items-stretch ${className || ''}`}>
      <div className="flex-1 flex flex-col justify-top">
        {children}
      </div>
      {media && (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden bg-[#888] flex items-center justify-center relative">
            {media}
          </div>
        </div>
      )}
    </div>
  );
}