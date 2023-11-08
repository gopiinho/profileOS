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
      className='font-cyber group hidden w-full cursor-pointer items-center justify-center text-center duration-300 hover:text-[#66d847] sm:flex'
    >
      <div className='flex flex-col items-center gap-2'>
        <span className='text-3xl group-hover:bg-accent/10'>{icon}</span>
        <span className='group-hover:bg-[#66d847]/10'>
          <AnimatedHeading>{title}</AnimatedHeading>
        </span>
      </div>
    </div>
  )
}
