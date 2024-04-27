import { StaticImageData } from 'next/image'

export const coinGeckoApiUrl = 'https://api.coingecko.com/api/v3/'
export const tipjarContractAddress =
  '0x1f34d9f6b67e8df6bdcbecb8c09b598fc724785e'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
}

export interface ProjectProps {
  name: string
  description: string
  stack: string[]
  url: string
  gurl?: string
  img: StaticImageData
}
