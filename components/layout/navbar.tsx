"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState, useRef } from 'react'
import React from 'react'
import { MegaMenu, NewsCard } from '@/components/features/mega-menu'

interface DropdownItem {
  title: string
  href: string
  description?: string
}

interface LocationItem {
  name: string
  info: string
  hasArrow?: boolean
}

interface LocationGroup {
  title: string
  items: LocationItem[]
}

interface NavItem {
  title: string
  href: string
  megaMenu: { label: string; items: DropdownItem[] }[]
  sidebar: React.ReactNode
}

const locationGroups: LocationGroup[] = [
  {
    title: "TEXAS",
    items: [
      { name: "Austin", info: "PK4-8", hasArrow: true },
      { name: "Brownsville", info: "PK 8" },
      { name: "Houston", info: "Opening August 2025" },
      { name: "Fort Worth", info: "Opening August 2025" },
    ],
  },
  {
    title: "FLORIDA",
    items: [
      { name: "Miami", info: "K 10" },
      { name: "Orlando", info: "Opening August 2025" },
      { name: "Tampa", info: "Opening August 2025" },
      { name: "Palm Beach", info: "Opening August 2025" },
    ],
  },
  {
    title: "MORE LOCATIONS",
    items: [
      { name: "New York City, New York", info: "Opening August 2025" },
      { name: "Santa Barbara, Arizona", info: "Opening August 2025" },
      { name: "Scottsdale, California", info: "Opening August 2025" },
    ],
  },
]

const newsItems = [
  "New campus opening in Dallas this fall",
  "Alpha students score 40% higher on standardized tests",
  "Join our upcoming parent information session",
]

export const navItems: NavItem[] = [
  {
    title: "The Program",
    href: "/the-program",
    megaMenu: [
      {
        label: "Learn",
        items: [
          { title: "Love School", href: "/the-program#love-school", description: "Learn about our innovative approach" },
          { title: "Learn 2X in 2 Hours", href: "/the-program#learn-2x", description: "How we achieve more in less time" },
          { title: "Learn Life Skills", href: "/the-program#lifeskills-workshops", description: "Building essential skills for success" },
        ],
      },
      {
        label: "Media",
        items: [
          { title: "Alpha In Action", href: "#", description: "Creating a supportive environment" },
        ],
      },
    ],
    sidebar: <NewsCard />,
  },
  {
    title: "Admission",
    href: "#",
    megaMenu: [],
    sidebar: null,
  },
  {
    title: "Locations",
    href: "/locations",
    megaMenu: [
      {
        label: "TEXAS",
        items: [
          { title: "Austin", href: "#", description: "PK4-8" },
          { title: "Brownsville", href: "#", description: "PK 8" },
          { title: "Houston", href: "#", description: "Opening August 2025" },
          { title: "Fort Worth", href: "#", description: "Opening August 2025" },
        ],
      },
      {
        label: "FLORIDA",
        items: [
          { title: "Miami", href: "#", description: "K 10" },
          { title: "Orlando", href: "#", description: "Opening August 2025" },
          { title: "Tampa", href: "#", description: "Opening August 2025" },
          { title: "Palm Beach", href: "#", description: "Opening August 2025" },
        ],
      },
      {
        label: "MORE LOCATIONS",
        items: [
          { title: "New York City, New York", href: "#", description: "Opening August 2025" },
          { title: "Santa Barbara, Arizona", href: "#", description: "Opening August 2025" },
          { title: "Scottsdale, California", href: "#", description: "Opening August 2025" },
        ],
      },
    ],
    sidebar: <NewsCard />,
  },
  {
    title: "Events",
    href: "#",
    megaMenu: [],
    sidebar: <NewsCard />,
  },
  {
    title: "Resources",
    href: "#",
    megaMenu: [
      {
        label: "Resources",
        items: [
          { title: "Blog", href: "#", description: "Latest news and insights" },
          { title: "Newsletter", href: "#", description: "Stay updated with our newsletter" },
          { title: "Media Kit", href: "#", description: "Press and media resources" },
        ],
      },
    ],
    sidebar: <NewsCard />,
  },
  {
    title: "Insights",
    href: "#",
    megaMenu: [
      {
        label: "Insights",
        items: [
          { title: "Research", href: "#", description: "Our educational approach" },
          { title: "Success Stories", href: "#", description: "Student and parent testimonials" },
          { title: "In the News", href: "#", description: "Media coverage and press" },
        ],
      },
    ],
    sidebar: <NewsCard />,
  },
]

// Refactor locationGroups to match MegaMenuGroup format
const locationGroupsUnified = locationGroups.map(group => ({
  label: group.title,
  items: group.items.map(item => ({
    title: item.name,
    href: '#',
    description: item.info,
  })),
}));

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const [isNavHovered, setIsNavHovered] = useState(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  let megaMenuGroups = null;
  let megaMenuSidebar = null;
  const activeNavItem = navItems.find(item => item.title === activeDropdown);
  if (activeNavItem) {
    megaMenuGroups = activeNavItem.megaMenu;
    megaMenuSidebar = activeNavItem.sidebar;
  }

  // Handlers for hover logic
  const handleNavMouseEnter = (title: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setActiveDropdown(title)
    setIsNavHovered(true)
  }
  const handleNavMouseLeave = () => {
    setIsNavHovered(false)
    closeTimeout.current = setTimeout(() => {
      if (!isMenuHovered) setActiveDropdown(null)
    }, 120)
  }
  const handleMenuMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setIsMenuHovered(true)
  }
  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false)
    closeTimeout.current = setTimeout(() => {
      if (!isNavHovered) setActiveDropdown(null)
    }, 120)
  }

  return (
    <header className="w-full bg-white z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 relative">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/assets/logo-black.svg"
              alt="Alpha School Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        {/* Navigation */}
        <nav className="flex-1 flex justify-center h-full">
          <ul className="flex gap-8 items-center h-full">
            {navItems.map((item) => (
              <li
                key={item.title}
                className={`relative h-full flex items-center${item.megaMenu && item.megaMenu.length > 0 && item.sidebar ? ' group' : ''}`}
                onMouseEnter={() => {
                  if (item.megaMenu && item.megaMenu.length > 0 && item.sidebar) {
                    handleNavMouseEnter(item.title)
                  }
                }}
                onMouseLeave={() => {
                  if (item.megaMenu && item.megaMenu.length > 0 && item.sidebar) {
                    handleNavMouseLeave()
                  }
                }}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 flex items-center text-base transition-colors duration-150 h-full`}
                >
                  {item.title}
                  {item.megaMenu && item.megaMenu.length > 0 && (
                    <ChevronRight className="h-4 w-4 ml-1" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* CTA Button */}
        <div className="hidden md:block ml-8">
          <Button className="text-white rounded-full font-semibold">
            Learn more
          </Button>
        </div>
        {/* MegaMenu rendered as sibling, not inside nav or li */}
        {activeNavItem && megaMenuGroups && (
          <div
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            <MegaMenu
              groups={megaMenuGroups}
              sidebar={megaMenuSidebar}
            />
          </div>
        )}
      </div>
    </header>
  )
} 