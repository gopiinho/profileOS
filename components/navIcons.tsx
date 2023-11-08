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
      className='font-cyber group hidden w-full cursor-pointer items-center justify-center text-center duration-300 hover:text-[#66d847] sm:flex'
    >
      <div className='flex flex-col items-center gap-2'>
        <span className='text-3xl'>{icon}</span>
        <AnimatedHeading>{title}</AnimatedHeading>
      </div>
    </div>
  )
}
