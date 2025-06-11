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
      title={<h6 className="font-bold text-[var(--color-maroon)] text-base mb-[var(--space-xs)]">This is a new headline</h6> as any}
      address=""
      city="Lorem ipsum dolor sit amet consectetur. Felis nibh vitae libero quis risus egestas arcu. Nec aliquet."
      tuition=""
      buttonText="Read more"
      buttonHref="#"
      buttonClassName="mt-4 bg-[var(--color-maroon)] text-[var(--color-pink)] rounded-full px-4 py-2 font-semibold hover:bg-[var(--color-maroon)]/90 hover:text-[var(--color-pink)] transition-colors"
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
  const gridClass = 'grid grid-cols-4 gap-8 p-8 mx-auto justify-items-stretch w-full';

  return (
    <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-[var(--radius-lg)] z-50 border-t-2 border-gray-100 w-full">
      <div className={gridClass}>
        {groupColumns.map((group, idx) => (
          <div key={idx} className="flex-1">
            {group.label && (
              <span className="inline-block mb-4 px-3 py-1 rounded bg-[var(--color-pink)] text-[var(--color-maroon)] font-semibold text-xs uppercase tracking-wide">
                {group.label}
              </span>
            )}
            <ul className="space-y-4">
              {group.items.map((item: MegaMenuItem) => (
                <li key={item.title}>
                  <Link href={item.href} className="flex flex-col group transition-colors">
                    <span className="font-medium flex items-center">
                      {item.title}
                      
                    </span>
                    {item.description && (
                      <span className="text-sm text-gray-600">{item.description}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex-1 flex flex-col h-full">
          {sidebar ? sidebar : <NewsCard />}
        </div>
      </div>
    </div>
  );
} 