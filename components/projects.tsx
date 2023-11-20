import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ProjectProps } from '@/utils/constants'

export default function Projects({
  name,
  description,
  stack,
  url,
  img,
}: ProjectProps) {
  return (
    <div className='group relative flex w-full flex-col justify-between gap-2 border-b border-accent/40 p-6 sm:min-h-[12rem] sm:flex-row'>
      <Image
        src={img}
        alt='project screenshot'
        className='absolute inset-0 h-full w-full object-cover opacity-10 duration-200 group-hover:opacity-30'
      />
      <div className='z-10 flex w-full flex-col justify-between sm:flex-row'>
        <div className='flex flex-col lg:max-w-[40%]'>
          <span className='py-2 text-2xl uppercase text-primary sm:text-3xl'>
            {name}
          </span>
          <span>{description}</span>
          <span className='pt-4'>
            {stack.map((data, index) => (
              <span className='p-1 text-accent' key={index}>
                {data}
                {index < stack.length - 1 && ', '}
              </span>
            ))}
          </span>
        </div>
        <div className='flex flex-col'>
          <span>Packages:</span>
          <Button variant='outline'>
            <a href={url}>visit</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
