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
      <Card className='h-[95%] w-[95%]'>
        <CardHeader onClick={toggleAboutVisible}>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex flex-col text-base'
          style={{ fontFamily: 'modeseven' }}
        >
          <div className='flex flex-row justify-between p-4'>
            <p>
              This website is an attempt to show my personality as a person and
              a developer. <br />
              Currently working at{' '}
              <span className='text-accent duration-200 hover:underline'>
                <Link href='https://enderprotocol.io'>ender protocol</Link>
              </span>{' '}
              building their webapp and frontends.
            </p>
            <div className='flex h-28 w-28 shrink-0'>
              {theme == 'light' ? (
                <Image src={lightPic} alt='profile pic' />
              ) : (
                <Image src={darkPic} alt='profile pic' />
              )}
            </div>
          </div>
          <div className='p-4'></div>
        </div>
      </Card>
    </motion.div>
  )
}
