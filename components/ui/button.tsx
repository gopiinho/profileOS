'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        wallet: 'bg-foreground text-background',
        outline:
          'border border-foreground/50 hover:border-accent duration-200 bg-background hover:bg-accent hover:text-accent-foreground',
        threeD:
          'hover:gradient-bg mt-3 border border-accent/50 bg-background text-xl font-black uppercase text-foreground shadow-foreground transition-all duration-200 hover:translate-y-[-4px] hover:border-accent hover:text-background/90 hover:shadow-[0px_4px_0px_background] active:translate-x-[0px] active:translate-y-[0px] active:text-accent active:shadow-none',
        gradient:
          'hover:gradient-bg border border-foreground bg-background text-xl font-black uppercase text-foreground shadow-foreground transition-all duration-200  hover:border-accent hover:text-background/90 active:text-accent active:shadow-none',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent/20 hover:text-accent',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-2',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
        full: 'h-full w-full',
        threeD: 'h-16',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
