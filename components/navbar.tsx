'use client'
import NavIcons from './navIcons'
import Link from 'next/link'
// Icons
import { MdContactMail } from 'react-icons/md'
import { BsFileCodeFill } from 'react-icons/bs'
import { GiAbstract029 } from 'react-icons/gi'
import { ImProfile } from 'react-icons/im'
import { IoNewspaper } from 'react-icons/io5'
import { FaToolbox, FaPiggyBank } from 'react-icons/fa'
import { ModeToggle } from './ui/modetoggle'
import { FaGamepad } from 'react-icons/fa6'

import { useModalStore } from '@/utils/State/modalstore'

export default function Navbar() {
  const { toggleModal } = useModalStore()

  return (
    <div className='z-20 flex h-[100dvh] flex-col justify-between gap-8'>
      <div className='flex select-none flex-col items-center justify-between gap-5 p-2 pt-5 sm:gap-8'>
        <NavIcons
          icon={<ImProfile />}
          title='profile'
          onClick={() => toggleModal('profile')}
        />
        <NavIcons
          icon={<BsFileCodeFill />}
          title='work'
          onClick={() => toggleModal('work')}
        />
        <NavIcons
          icon={<FaToolbox />}
          title='skills'
          onClick={() => toggleModal('skills')}
        />
        <NavIcons
          icon={<GiAbstract029 />}
          title='about'
          onClick={() => toggleModal('about')}
        />
        <NavIcons
          icon={<MdContactMail />}
          title='contact'
          onClick={() => toggleModal('contact')}
        />
        <NavIcons
          icon={<FaGamepad />}
          title='ropasc'
          onClick={() => toggleModal('game')}
        />
        <NavIcons
          icon={<FaPiggyBank />}
          title='tipjar'
          onClick={() => toggleModal('tipjar')}
        />

        <Link href='/resume' target='_blank'>
          <NavIcons icon={<IoNewspaper />} title='resume' />
        </Link>
      </div>
      <div className='flex items-center justify-center p-2 pb-2 sm:pb-3'>
        <ModeToggle />
      </div>
    </div>
  )
}
