'use client'

import React, { useEffect } from 'react'

interface AnimatedHeadingProps {
  children: string | JSX.Element
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ children }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      let iteration = 0

      if (event.target instanceof HTMLElement) {
        const target = event.target as HTMLElement

        clearInterval(interval as NodeJS.Timeout)

        interval = setInterval(() => {
          target.innerText = target.innerText
            .split('')
            .map((letter, index) => {
              if (index < iteration) {
                return target.dataset.value ? target.dataset.value[index] : ''
              }

              return letters[Math.floor(Math.random() * 26)]
            })
            .join('')

          if (
            target.dataset.value &&
            iteration >= target.dataset.value.length
          ) {
            clearInterval(interval as NodeJS.Timeout)
          }

          iteration += 1 / 3
        }, 30)
      }
    }

    const headings = document.querySelectorAll('h2')
    headings.forEach((heading) => {
      heading.addEventListener('mouseover', handleMouseOver)
    })

    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener('mouseover', handleMouseOver)
      })
    }
  }, [])

  return <h2 data-value={children}>{children}</h2>
}

export default AnimatedHeading
