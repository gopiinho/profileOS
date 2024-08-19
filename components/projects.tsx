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
  gurl,
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
        <div className='flex flex-col lg:max-w-[50%]'>
          <span className='gradient py-2 text-2xl font-semibold uppercase sm:text-3xl'>
            {name}
          </span>
          <span className='opacity-60'>{description}</span>
          <span className='pt-4'>
            {stack.map((data, index) => (
              <span
                className='mr-1 cursor-pointer bg-foreground/60 p-1 px-2 text-sm text-background hover:bg-background hover:text-foreground'
                key={index}
              >
                {data}
              </span>
            ))}
          </span>
        </div>
        <div className='flex flex-col items-center justify-center gap-3'>
          <Button variant='outline' size='lg' className='w-full'>
            <a href={url} target='_blank'>
              <span className='flex w-full items-center gap-1 text-xl sm:text-3xl'>
                visit
                <MdArrowOutward />
              </span>
            </a>
          </Button>
          <Button variant='outline' size='lg' className='w-full'>
            <a href={gurl} target='_blank'>
              <span className='flex w-full items-center gap-1 text-xl sm:text-3xl'>
                code
                <MdArrowOutward />
              </span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
