import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ProjectProps } from '@/utils/constants'
import { MdArrowOutward } from 'react-icons/md'

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
      <div className='z-10 flex w-full flex-col justify-between gap-4 sm:flex-row'>
        <div className='flex flex-col lg:max-w-[40%]'>
          <span className='py-2 text-2xl text-accent sm:text-3xl'>{name}</span>
          <span>{description}</span>
          <span className='pt-4'>
            {stack.map((data, index) => (
              <span className='p-1 text-sm text-primary' key={index}>
                {data}
                {index < stack.length - 1 && ' •'}
              </span>
            ))}
          </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <Button variant='outline' size='lg'>
            <a href={url}>
              <span className='flex w-full items-center gap-1 text-xl sm:text-3xl'>
                visit
                <MdArrowOutward />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
