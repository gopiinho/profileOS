'use client'

import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'

// Icons
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
      <Card className='h-[70%] w-[95%] sm:w-[450px]'>
        <CardHeader onClick={toggleProfileVisible}>
          <CardIcon>
            <GiAbstract029 />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div className='flex h-full w-full items-center justify-center bg-accent/70'>
          <div className='relative flex h-[90%] w-[95%] flex-col overflow-hidden border border-foreground bg-background text-center'>
            <div className='absolute overflow-hidden text-[2.5rem] uppercase opacity-10 sm:text-6xl'>
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
            <div></div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
