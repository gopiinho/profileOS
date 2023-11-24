'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useTheme } from 'next-themes'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'

// Icons
import { GiAbstract029 } from 'react-icons/gi'
import darkPic from '@/public/assets/about.gif'
import lightPic from '@/public/assets/about2.gif'

export default function About({ title }: CardProps) {
  const { theme } = useTheme()
  const { toggleAboutVisible } = useModalStore((state) => ({
    toggleAboutVisible: state.toggleAboutVisible,
  }))
  return (
    <motion.div
      initial={{
        scale: 0,
        x: '0%',
        y: '50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='about-bg h-[95%] w-[95%]'>
        <CardHeader onClick={toggleAboutVisible}>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div className='flex h-10 w-full items-center justify-center bg-primary'>
          <div className='z-10 flex h-6 w-[99%] items-center justify-start bg-foreground p-2 text-sm text-primary sm:text-base'>
            <p>https://localhost:3000/about</p>
          </div>
        </div>
        <div
          className='mx-auto flex h-full w-full flex-col p-3 text-base text-foreground sm:w-[80%] lg:w-[60%] lg:text-lg'
          style={{ fontFamily: 'archivo' }}
        >
          <div className='font-bol flex flex-col py-4 text-4xl uppercase leading-none sm:py-6 sm:text-7xl'>
            <p>Heyy</p>
          </div>
          <div className='p-4'>
            <p>I'm Gurpreet </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
