'use client'

import Link from 'next/link'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useTheme } from 'next-themes'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'

// Icons
import { GiAbstract029 } from 'react-icons/gi'

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
        y: '45%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '45%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='h-[95%] w-[90%] sm:w-[80%]'>
        <CardHeader onClick={toggleAboutVisible}>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div className='flex h-10 w-full items-center justify-center bg-primary'>
          <div className='z-10 flex h-6 w-[99%] items-center justify-start bg-foreground p-2 text-sm text-primary sm:text-base'>
            <p className='text-sm'>localhost:3000/about</p>
          </div>
        </div>
        <div
          className='mx-auto flex h-full w-full flex-col items-start p-3 text-base text-accent text-foreground sm:w-[80%] lg:w-[45%] lg:text-lg'
          style={{ fontFamily: 'archivo' }}
        >
          <div className='my-3 text-4xl font-bold sm:my-4 sm:text-3xl'>
            <p className='gradient' style={{ fontFamily: 'modeseven' }}>
              Hello!
            </p>
          </div>
          <div className='text-sm sm:text-lg'>
            <p>
              My name is Gurpreet, and I love the internet and am solving
              personal theory of life.
              <br />
              <br /> Currently building{' '}
              <Link
                href='https://sympler.xyz'
                target='_blank'
                className='gradient hover:underline'
              >
                Sympler
              </Link>{' '}
              and{' '}
              <Link
                href='https://enderprotocol.io'
                target='_blank'
                className='gradient hover:underline'
              >
                Ender Protocol
              </Link>
              .
              <br />
              <br />
            </p>
            <p></p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
