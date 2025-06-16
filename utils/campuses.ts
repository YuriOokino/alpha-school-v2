import { Metadata } from 'next'

export interface CampusMetadata {
  name: string
  status: 'current' | 'upcoming'
  address: string
  zipCode: string
  tuition: string
  grades: string
  email: string
  image: string
  heroImage: string
  buttonText: string
  buttonHref: string
  newsHeading?: string
  description?: string
  coordinates?: {
    lat: number
    lng: number
  }
}

// Import all campus metadata directly
import austin from '@/content/campuses/austin'
import fortWorth from '@/content/campuses/fort-worth'
import houston from '@/content/campuses/houston'
import brownsville from '@/content/campuses/brownsville'

// Combine all campus metadata
const allCampuses: CampusMetadata[] = [
  austin.metadata,
  fortWorth.metadata,
  houston.metadata,
  brownsville.metadata
]

export async function getAllCampuses(): Promise<CampusMetadata[]> {
  return allCampuses
}

export async function getCurrentCampuses(): Promise<CampusMetadata[]> {
  return allCampuses.filter(campus => campus.status === 'current')
}

export async function getUpcomingCampuses(): Promise<CampusMetadata[]> {
  return allCampuses.filter(campus => campus.status === 'upcoming')
}

export async function getCampusBySlug(slug: string): Promise<CampusMetadata | undefined> {
  return allCampuses.find(campus => campus.name.toLowerCase() === slug.toLowerCase())
}

export async function getCampusesByState(state: string): Promise<CampusMetadata[]> {
  return allCampuses.filter(campus => campus.address === state)
} 