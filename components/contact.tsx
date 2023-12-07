import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { CardProps } from '@/utils/constants'
import { MdContactMail } from 'react-icons/md'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'
// Icons
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillMail } from 'react-icons/ai'
import { BsDiscord, BsGithub } from 'react-icons/bs'

export default function Contact({ title }: CardProps) {
  const { toggleContactVisible } = useModalStore((state) => ({
    toggleContactVisible: state.toggleContactVisible,
  }))
  return (
    <motion.div
      initial={{
        scale: 0,
        x: '0%',
        y: '60%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '60%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='relative h-[95%] w-[95%]'>
        <CardHeader onClick={toggleContactVisible}>
          <CardIcon>
            <MdContactMail />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex h-[94%] flex-col overflow-hidden font-bold sm:h-[96%] xl:flex-row'
          style={{ fontFamily: 'modeseven' }}
        >
          <a
            href='https://twitter.com/gopiinho'
            target='_blank'
            className='h-full w-full duration-200 hover:bg-[#1C9CEA]/50'
          >
            <span className='flex h-full w-full items-center justify-center text-3xl sm:text-5xl'>
              twitter
            </span>{' '}
          </a>
          <a
            href='https://github.com/igopib'
            target='_blank'
            className='h-full w-full duration-200 hover:bg-[#2EA043]/50'
          >
            <span className='flex h-full w-full items-center justify-center text-3xl sm:text-5xl'>
              github
            </span>
          </a>
          <a
            href='https://www.linkedin.com/in/gopinho/'
            target='_blank'
            className='h-full w-full duration-200 hover:bg-[#5560E9]/50'
          >
            <span className='flex h-full w-full items-center justify-center text-3xl sm:text-5xl'>
              linkedIn
            </span>{' '}
          </a>
          <a
            href='mailto:gopinho@protonmail.com'
            target='_blank'
            className='h-full w-full duration-200 hover:bg-[#CD3B2F]/50'
          >
            <span className='flex h-full w-full items-center justify-center text-3xl sm:text-5xl'>
              mail
            </span>{' '}
          </a>
        </div>
      </Card>
    </motion.div>
  )
}
