'use client'

import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useTheme } from 'next-themes'
import { useModalStore } from '@/utils/State/modalstore'
import Projects from './projects'
import { ProjectProps } from '@/utils/constants'
import { motion } from 'framer-motion'
// Icons & Images
import { BsFileCodeFill } from 'react-icons/bs'
import enderApp from '@/public/app.png'
import sibyl from '@/public/sibyl.png'
import ender from '@/public/ep.png'
import profileOs from '@/public/profileos.png'

const ProjectItems: ProjectProps[] = [
  {
    name: 'Ender Protocol - App',
    description:
      'Dapp built from scratch using next.js and typescript. Wallet & smart contract integrations handled with rainbow kit and wagmi.sh hooks.',
    url: 'https://app.enderprotocol.io',
    gurl: 'https://github.com/enderprotocol/enderprotocol-app',
    stack: ['Next.js', 'Typescript', 'Tailwindcss', 'Wagmi.sh', 'Rainbow Kit'],
    img: enderApp,
  },
  {
    name: 'Sibyl Access',
    description:
      'React app, styled by chakraui and smart contract integration with etherjs. Focus being the theme of the world that nfts take place in.',
    url: 'https://whimsical-kheer-5221bd.netlify.app/',
    gurl: 'https://github.com/igopib/sibyl-access',
    stack: ['Solidity', 'React', 'ChakraUi', 'Ethers.js'],
    img: sibyl,
  },
  {
    name: 'Ender Protocol',
    description:
      'Landing page created with layouts and custom css. Heavy use of gradients and custom styling.',
    url: 'https://enderprotocol.io',
    gurl: 'https://github.com/enderprotocol/enderprotocol-fe',
    stack: ['Next.js', 'Tailwindcss', 'CSS'],
    img: ender,
  },
]

export default function Work({ title }: CardProps) {
  const { workVisible, toggleWorkVisible } = useModalStore((state) => ({
    workVisible: state.workVisible,
    toggleWorkVisible: state.toggleWorkVisible,
  }))
  return (
    <motion.div
      initial={{
        scale: 0,
        x: '0%',
        y: '5%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '5%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='h-[95%] w-[95%]'>
        <CardHeader onClick={toggleWorkVisible}>
          <CardIcon>
            <BsFileCodeFill />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='scrollbar flex h-full flex-col overflow-scroll text-base'
          style={{ fontFamily: 'modeseven' }}
        >
          <div className='flex flex-col justify-between'>
            {ProjectItems.map((data) => (
              <Projects
                name={data.name}
                description={data.description}
                url={data.url}
                gurl={data.gurl}
                stack={data.stack}
                img={data.img}
              />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
