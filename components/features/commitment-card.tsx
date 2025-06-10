import React from "react"

function CommitmentIcon() {
  // 2x2 grid of light blue dots
  return (
    <div className="grid grid-cols-2 gap-1 mb-[var(--space-lg)]">
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
      <span className="block w-5 h-5 rounded-full bg-[#B9EDFF]" />
    </div>
  )
}

interface CommitmentCardProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export default function CommitmentCard({ title, description, buttonText, buttonHref }: CommitmentCardProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <CommitmentIcon />
      <h3 className="card-header text-white mb-[var(--space-sm)]">{title}</h3>
      <p className="body-text text-white mb-[var(--space-md)]">{description}</p>
      {buttonText && buttonHref && (
        <a href={buttonHref} className="font-bold text-white inline-flex items-center gap-2 hover:underline">
          {buttonText}
          <span aria-hidden="true">&rarr;</span>
        </a>
      )}
    </div>
  )
}
