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
  dropdown?: DropdownItem[]
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

const navItems: NavItem[] = [
  {
    title: "The Program",
    href: "#",
    dropdown: [
      { title: "Overview", href: "#", description: "Learn about our innovative approach" },
      { title: "Academic Excellence", href: "#", description: "How we achieve more in less time" },
      { title: "Life Skills", href: "#", description: "Building essential skills for success" },
      { title: "Community", href: "#", description: "Creating a supportive environment" },
    ]
  },
  {
    title: "Admission",
    href: "#",
    dropdown: [
      { title: "How to Apply", href: "#", description: "Step-by-step application process" },
      { title: "Tuition & Aid", href: "#", description: "Financial information and support" },
      { title: "FAQs", href: "#", description: "Common questions about admission" },
    ]
  },
  {
    title: "Events",
    href: "#"
  },
  {
    title: "Resources",
    href: "#",
    dropdown: [
      { title: "Blog", href: "#", description: "Latest news and insights" },
      { title: "Newsletter", href: "#", description: "Stay updated with our newsletter" },
      { title: "Media Kit", href: "#", description: "Press and media resources" },
    ]
  },
  {
    title: "Insights",
    href: "#",
    dropdown: [
      { title: "Research", href: "#", description: "Our educational approach" },
      { title: "Success Stories", href: "#", description: "Student and parent testimonials" },
      { title: "In the News", href: "#", description: "Media coverage and press" },
    ]
  }
]

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isLocationsOpen, setIsLocationsOpen] = useState(false)
  const [isMenuHovered, setIsMenuHovered] = useState(false)
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  // Determine which menu is open and what to show in MegaMenu
  let megaMenuGroups = null;
  let megaMenuSidebar = null;
  if (isLocationsOpen) {
    megaMenuGroups = locationGroups.map(group => ({
      label: group.title,
      items: group.items.map(item => ({
        title: item.name + (item.hasArrow ? ' →' : ''),
        href: '#',
        description: item.info,
      })),
    }));
    megaMenuSidebar = <NewsCard />;
  } else if (activeDropdown) {
    const navItem = navItems.find(item => item.title === activeDropdown);
    if (navItem && navItem.dropdown) {
      if (navItem.title === 'The Program') {
        megaMenuGroups = [
          {
            label: 'Learn',
            items: [
              { title: 'Love school', href: '#' },
              { title: 'Learn 2X in 2 Hours', href: '#' },
              { title: 'Learn Life skills', href: '#' },
            ],
          },
          {
            label: 'Media',
            items: [
              { title: 'Alpha In action', href: '#' },
            ],
          },
        ];
      } else {
        megaMenuGroups = [
          {
            label: navItem.title,
            items: navItem.dropdown,
          },
        ];
      }
    }
  }

  // Handlers for hover logic
  const handleNavMouseEnter = (title: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setActiveDropdown(title)
    setIsLocationsOpen(false)
  }
  const handleNavMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      if (!isMenuHovered) setActiveDropdown(null)
    }, 100)
  }
  const handleLocationsMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setIsLocationsOpen(true)
    setActiveDropdown(null)
  }
  const handleLocationsMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      if (!isMenuHovered) setIsLocationsOpen(false)
    }, 100)
  }
  const handleMenuMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setIsMenuHovered(true)
  }
  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false)
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
      setIsLocationsOpen(false)
    }, 100)
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
            {/* Render nav items up to Admission */}
            {navItems.slice(0, 2).map((item) => (
              <li
                key={item.title}
                className={`relative h-full flex items-center${item.dropdown ? ' group' : ''}`}
                onMouseEnter={() => handleNavMouseEnter(item.title)}
                onMouseLeave={handleNavMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 flex items-center font-semibold text-base transition-colors duration-150 h-full ${activeDropdown === item.title ? 'text-blue-700' : 'text-gray-900'}`}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-150 ${activeDropdown === item.title ? 'rotate-90' : ''} group-hover:rotate-90`} />
                  )}
                </Link>
              </li>
            ))}
            {/* Insert Locations after Admission */}
            <li className="relative h-full flex items-center group">
              <button
                onMouseEnter={handleLocationsMouseEnter}
                onMouseLeave={handleLocationsMouseLeave}
                onClick={() => setIsLocationsOpen((v) => !v)}
                className="px-3 py-2 flex items-center font-semibold text-base transition-colors duration-150 h-full text-gray-900"
                aria-expanded={isLocationsOpen}
                aria-haspopup="true"
              >
                Locations
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-150 ${isLocationsOpen ? 'rotate-180' : ''}`} />
              </button>
            </li>
            {/* Render the rest of the nav items */}
            {navItems.slice(2).map((item) => (
              <li
                key={item.title}
                className={`relative h-full flex items-center${item.dropdown ? ' group' : ''}`}
                onMouseEnter={() => handleNavMouseEnter(item.title)}
                onMouseLeave={handleNavMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 flex items-center font-semibold text-base transition-colors duration-150 h-full ${activeDropdown === item.title ? 'text-blue-700' : 'text-gray-900'}`}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronRight className={`h-4 w-4 ml-1 transition-transform duration-150 ${activeDropdown === item.title ? 'rotate-90' : ''} group-hover:rotate-90`} />
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
        {((isLocationsOpen && megaMenuGroups) || (activeDropdown && megaMenuGroups)) && (
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