import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { Button } from './ui/button'
import { CardProps } from '@/utils/constants'
import { MdContactMail } from 'react-icons/md'
import { useModalStore } from '@/utils/State/modalstore'
// Icons
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillMail } from 'react-icons/ai'
import { BsDiscord, BsGithub } from 'react-icons/bs'

export default function Contact({ title }: CardProps) {
  const { toggleContactVisible } = useModalStore((state) => ({
    toggleContactVisible: state.toggleContactVisible,
  }))
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <Card className='relative h-[95%] w-[95%]'>
        <CardHeader onClick={toggleContactVisible}>
          <CardIcon>
            <MdContactMail />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='flex h-[94%] flex-col overflow-hidden sm:h-[96%] xl:flex-row'
          style={{ fontFamily: 'modeseven' }}
        >
          <Button size='full' className='text-3xl sm:text-5xl'>
            twitter
          </Button>
          <Button size='full' className='text-3xl sm:text-5xl'>
            github
          </Button>
          <Button size='full' className='text-3xl sm:text-5xl'>
            discord
          </Button>
          <Button size='full' className='text-3xl sm:text-5xl'>
            mail
          </Button>
        </div>
      </Card>
    </div>
  )
}
