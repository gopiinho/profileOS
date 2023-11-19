'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useTheme } from 'next-themes'
import { useModalStore } from '@/utils/State/modalstore'

// Icons
import { BsFileCodeFill } from 'react-icons/bs'

export default function Work({ title }: CardProps) {
  const { theme } = useTheme()
  const { toggleWorkVisible } = useModalStore((state) => ({
    toggleWorkVisible: state.toggleWorkVisible,
  }))
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Card className='h-[95%] w-[95%]'>
        <CardHeader onClick={toggleWorkVisible}>
          <CardIcon>
            <BsFileCodeFill />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex h-full flex-col text-base'
          style={{ fontFamily: 'modeseven' }}
        >
          <div className='flex  flex-row justify-between p-4'></div>
        </div>
      </Card>
    </div>
  )
}
