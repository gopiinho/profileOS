'use client'
import Image from 'next/image'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'

// Icons
import picture from '@/public/avatar.png'
import { GiAbstract029 } from 'react-icons/gi'

export default function Profile({ title }: CardProps) {
  const { toggleProfileVisible } = useModalStore((state) => ({
    toggleProfileVisible: state.toggleProfileVisible,
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
      <Card className='h-[80%] w-[95%] sm:w-[450px]'>
        <CardHeader onClick={toggleProfileVisible}>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex h-full w-full flex-col items-center justify-center gap-2 px-3 py-6'
          style={{ fontFamily: 'modeseven' }}
        >
          <div className='relative flex h-[60%] w-full flex-col overflow-hidden border border-foreground/50 bg-primary text-center'>
            <div className='mix-blend-luminosity'>
              <div className='absolute z-10 overflow-hidden text-[2.5rem] uppercase opacity-20 sm:text-6xl'>
                <p>GurpreetSingh</p>
                <p>nghGurpreetSi</p>
                <p>GurpreetSingh</p>
                <p>nghGurpreetSi</p>
                <p>GurpreetSingh</p>
                <p>nghGurpreetSi</p>
                <p>GurpreetSingh</p>
                <p>nghGurpreetSi</p>
                <p>GurpreetSingh</p>
                <p>nghGurpreetSi</p>
                <p>GurpreetSingh</p>
                <p>nghGurpreetSi</p>
                <p>GurpreetSingh</p>
              </div>
              <Image
                src={picture}
                alt='profile bg'
                className='absolute bottom-0 z-20 h-full w-full object-cover'
              />
            </div>
          </div>
          <div className='h-[40%] w-full border border-foreground/50 bg-primary'></div>
        </div>
      </Card>
    </motion.div>
  )
}
