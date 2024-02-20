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
            <p className='text-sm'>https://localhost:3000/about</p>
          </div>
        </div>
        <div
          className='mx-auto flex h-full w-full flex-col items-start p-3 text-base text-accent text-foreground sm:w-[80%] lg:w-[45%] lg:text-lg'
          style={{ fontFamily: 'archivo' }}
        >
          <div className='my-3 text-4xl font-bold sm:my-6 sm:text-5xl'>
            <p className='gradient' style={{ fontFamily: 'modeseven' }}>
              Hello,
            </p>
          </div>
          <div className='text-sm sm:text-lg'>
            <p>
              My name is Gurpreet, just another guy spending all day on the
              internet. I have passion for Technology, Art , Finance and Health.
              Born and raised in Panjab, currently residing in Winnipeg,
              Manitoba.
              <br />
              <br /> Introduced to crypto and blockchains in 2020 and has been
              my main domain of interest ever since. I develop webapps, create
              UI/UX and work on smart contracts engaging in a lot of
              experimental work. Currently, I am focused on frontend and web app
              development for the{' '}
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
            <p>
              I love to experiment with web as a creative medium. Learning
              everything and the passion prevails. One of my life goals is to
              design and build an Indie game, collab and work with people with
              drive and potentially inspire other through my work.
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
