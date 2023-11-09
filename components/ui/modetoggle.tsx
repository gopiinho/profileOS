'use client'

import * as React from 'react'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='group'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === 'light' ? (
          <BsFillMoonFill className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all group-hover:text-accent dark:-rotate-90 dark:scale-0' />
        ) : (
          <BsFillSunFill className='h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all group-hover:text-accent dark:rotate-0 dark:scale-100' />
        )}
      </Button>
    </div>
  )
}
