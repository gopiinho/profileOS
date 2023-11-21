import React from 'react'
import AnimatedHeading from './animatedText'

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode
  title: string
  onClick?: () => void
}

export default function NavIcons({ icon, title = '', onClick }: IconProps) {
  return (
    <div
      onClick={onClick}
      draggable
      className='group hidden w-full cursor-pointer select-none items-center justify-center text-center duration-300 hover:text-accent sm:flex'
    >
      <div className='flex flex-col items-center gap-2'>
        <span className='text-3xl'>{icon}</span>
        <span className='group-hover:bg-accent/10'>
          <AnimatedHeading>{title}</AnimatedHeading>
        </span>
      </div>
    </div>
  )
}
