import { StaticImageData } from 'next/image'

export const coinGeckoApiUrl = 'https://api.coingecko.com/api/v3/'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
}

export interface ProjectProps {
  name: string
  description: string
  stack: string[]
  url: string
  img: StaticImageData
}
