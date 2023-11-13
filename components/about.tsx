'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { CardProps } from '@/utils/constants'
import AnimatedHeading from './animatedText'
import { useTheme } from 'next-themes'

// Icons
import { GiAbstract029 } from 'react-icons/gi'
import darkPic from '@/public/assets/about.gif'
import lightPic from '@/public/assets/about2.gif'

export default function About({ title }: CardProps) {
  const { theme } = useTheme()
  return (
    <div className='flex items-center justify-center'>
      <Card className='w-[600px] lg:w-[700px]'>
        <CardHeader>
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
            <span>
              This website is an attempt to show my
              <span className='text-accent'> personality</span> as a person and
              a developer. <br />
              Currently working at
              <span className='text-accent'>
                <Link href='https://enderprotocol.io'> ender protocol </Link>
              </span>
              building their webapp and frontends.
            </span>
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
    </div>
  )
}
