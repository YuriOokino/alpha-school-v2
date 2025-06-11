import { useState } from "react";

export function Tagline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block bg-[#0000ED] text-white text-xs rounded px-2 py-0.5 mb-2 w-max ${className}`}>{children}</span>
  );
}

export interface GuideCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  className?: string;
}

export default function GuideCard({ image, name, role, bio, className = "" }: GuideCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`relative h-full rounded-[var(--radius-md)] overflow-hidden bg-white flex flex-col justify-end group ${className}`}
      style={{ minHeight: 400 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 p-0 flex flex-col gap-2 w-full">
        <div
          className={
            "transition-colors duration-500 ease-in-out rounded-[var(--radius-md)] p-4 m-4 cursor-pointer bg-[#B9EDFF] " +
            (hovered ? "bg-[rgba(0,0,237,0.7)]" : "")
          }
        >
          <div className={"transition-all duration-300 ease-in-out " + (hovered ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto overflow-visible')}>
            <Tagline>{role}</Tagline>
            <h3 className="text-[#111827] font-bold text-lg leading-tight mb-1">{name}</h3>
          </div>
          <p className={"text-white text-sm leading-snug transition-all duration-300 ease-in-out m-0 " + (hovered ? 'opacity-100 h-auto overflow-visible' : 'opacity-0 h-0 overflow-hidden')}>{bio}</p>
        </div>
      </div>
    </div>
  );
} 