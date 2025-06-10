"use client"

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

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

  return (
    <header className="w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6 relative">
        {/* Logo */}
        <div className="flex items-center h-full">
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/assets/logo-white.svg"
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
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 flex items-center font-semibold text-base transition-colors duration-150 h-full ${activeDropdown === item.title ? 'text-blue-700' : 'text-gray-900'} hover:text-blue-700`}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-150 group-hover:rotate-90" />
                  )}
                </Link>
                {/* Regular Dropdowns */}
                {item.dropdown && activeDropdown === item.title && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white text-black rounded-lg shadow-lg py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                      >
                        <div className="font-medium">{dropdownItem.title}</div>
                        {dropdownItem.description && (
                          <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
            {/* Locations Button */}
            <li className="relative h-full flex items-center">
              <button
                onMouseEnter={() => setIsLocationsOpen(true)}
                onMouseLeave={() => setIsLocationsOpen(false)}
                onClick={() => setIsLocationsOpen((v) => !v)}
                className="px-3 py-2 flex items-center font-semibold text-base transition-colors duration-150 h-full text-gray-900 hover:text-blue-700"
                aria-expanded={isLocationsOpen}
                aria-haspopup="true"
              >
                Locations
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isLocationsOpen ? "rotate-180" : ""}`} />
              </button>
            </li>
          </ul>
        </nav>
        {/* CTA Button */}
        <div className="hidden md:block ml-8">
          <Button className="text-white rounded-full font-semibold">
            Learn more
          </Button>
        </div>
        {/* Locations Dropdown rendered as sibling, not inside nav or li */}
        {isLocationsOpen && (
          <div
            className="absolute left-0 right-0 mx-auto max-w-6xl top-full mt-2 bg-white shadow-lg rounded-lg z-50 border-t-2 border-gray-100"
            onMouseEnter={() => setIsLocationsOpen(true)}
            onMouseLeave={() => setIsLocationsOpen(false)}
            style={{ minWidth: 300 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
              {locationGroups.map((group, index) => (
                <div key={index}>
                  <div className="bg-green-100 text-green-800 px-4 py-1 rounded-md inline-block mb-4 font-medium">
                    {group.title}
                  </div>
                  <ul className="space-y-6">
                    {group.items.map((item, idx) => (
                      <li key={idx}>
                        <Link href="#" className="block">
                          <div className="flex items-center font-medium text-gray-900 hover:text-blue-600">
                            {item.name} {item.hasArrow && <span className="ml-1">→</span>}
                          </div>
                          <div className="text-sm text-gray-600">{item.info}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Top News</h3>
                <div className="space-y-4">
                  {newsItems.map((item, index) => (
                    <p key={index} className="text-gray-700">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 