import React from 'react';
import Link from 'next/link';
import LocationCard from './location-card';

interface MegaMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MegaMenuGroup {
  label: string;
  items: MegaMenuItem[];
}

interface MegaMenuProps {
  groups: MegaMenuGroup[];
  sidebar?: React.ReactNode;
}

export function NewsCard() {
  return (
    <LocationCard
      newsHeading={<h3 className="text-xl font-bold mb-4">In the News</h3>}
      image="/assets/location-img-placeholder.webp"
      title={<h6 className="font-bold text-[#5C2727] text-base mb-[var(--space-xs)]">This is a new headline</h6> as any}
      address=""
      city="Lorem ipsum dolor sit amet consectetur. Felis nibh vitae libero quis risus egestas arcu. Nec aliquet."
      tuition=""
      buttonText="Read more →"
      buttonHref="#"
      buttonClassName="mt-4 bg-pink-800 text-white rounded-full px-4 py-2 font-semibold hover:bg-pink-700 transition-colors"
      className="flex-1"
    />
  );
}

export function MegaMenu({ groups, sidebar }: MegaMenuProps) {
  // Always display 3 group columns, pad with empty groups if needed
  const groupColumns = [
    ...groups.slice(0, 3),
    ...Array(Math.max(0, 3 - groups.length)).fill({ label: '', items: [] })
  ];
  const gridClass = 'grid grid-cols-4 gap-8 p-8 mx-auto justify-items-stretch max-w-[1200px]';

  return (
    <div className="absolute left-0 right-0 mx-auto max-w-6xl top-full mt-2 bg-white rounded-[var(--radius-lg)] z-50 border-t-2 border-gray-100">
      <div className={gridClass}>
        {groupColumns.map((group, idx) => (
          <div key={idx} className="flex-1">
            {group.label && (
              <span className="inline-block mb-4 px-3 py-1 rounded bg-pink-100 text-pink-800 font-semibold text-xs uppercase tracking-wide">
                {group.label}
              </span>
            )}
            <ul className="space-y-4">
              {group.items.map((item: MegaMenuItem) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex flex-col group hover:text-blue-700 transition-colors">
                    <span className="font-medium flex items-center">
                      {item.title}
                      <span className="ml-2 text-lg">→</span>
                    </span>
                    {item.description && (
                      <span className="text-sm text-gray-600 group-hover:text-blue-500">{item.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col h-full flex-1">
          {sidebar ? (
            <div className="alpha-card flex flex-col justify-between h-full bg-white flex-1">
              {sidebar}
            </div>
          ) : (
            <NewsCard />
          )}
        </div>
      </div>
    </div>
  );
} 