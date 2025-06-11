import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-neutral-800",
        destructive: "bg-black text-white hover:bg-neutral-800",
        outline: "bg-black text-white hover:bg-neutral-800",
        secondary: "bg-black text-white hover:bg-neutral-800",
        ghost: "bg-black text-white hover:bg-neutral-800",
        link: "bg-black text-white underline-offset-4 hover:underline hover:bg-neutral-800",
        lightBlue: "bg-[#D6F0FF] text-black hover:bg-[#b3e4ff]",
        maroon: "bg-[#5C2727] text-white hover:bg-[#7a3535]",
        pink: "bg-[#FFD1D1] text-[#5C2727] hover:bg-[#ffb3b3]",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-full px-4",
        lg: "h-12 rounded-full px-10",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
