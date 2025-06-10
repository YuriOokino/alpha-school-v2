import { Card } from "@/components/ui/card"
import Image from "next/image"

interface LocationCardProps {
  image: string
  title: string
  address: string
  city: string
  tuition: string
  buttonText?: string
  buttonHref?: string
  buttonClassName?: string
}

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline ml-1 align-text-bottom">
    <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 18C5.589 18 2 14.411 2 10C2 5.589 5.589 2 10 2C14.411 2 18 5.589 18 10C18 14.411 14.411 18 10 18Z" fill="#5C2727"/>
    <path d="M9 9H11V15H9V9ZM9 5H11V7H9V5Z" fill="#5C2727"/>
  </svg>
)

export default function LocationCard({ image, title, address, city, tuition, buttonText = "Apply Now", buttonHref = "#", buttonClassName = "" }: LocationCardProps) {
  return (
    <Card className="bg-[#FFD1D1] rounded-[var(--radius-md)] p-[var(--space-md)] flex flex-col h-full border-0 shadow-none">
      <div className="w-full aspect-video rounded-[var(--radius-sm)] overflow-hidden mb-[var(--space-md)]">
        <Image src={image} alt={title} width={400} height={225} className="object-cover w-full h-full" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-[#5C2727] text-lg mb-[var(--space-xs)]">{title}</h3>
        <div className="text-[#5C2727] text-sm mb-1">{address}</div>
        <div className="text-[#5C2727] text-sm mb-1">{city}</div>
        <div className="text-[#5C2727] text-sm mb-[var(--space-sm)]"><span className="font-bold">Tuition: {tuition}</span> <InfoIcon /></div>
      </div>
      <a href={buttonHref} className={`w-full text-center mt-auto ${buttonClassName}`}>{buttonText}</a>
    </Card>
  )
} 