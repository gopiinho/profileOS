'use client'
import NavIcons from './navIcons'
// Icons
import { MdContactMail } from 'react-icons/md'
import { BsFileCodeFill } from 'react-icons/bs'
import { GiAbstract029 } from 'react-icons/gi'
import { IoNewspaper } from 'react-icons/io5'
import { FaToolbox } from 'react-icons/fa'
import { ModeToggle } from './ui/modetoggle'
import { FaGamepad } from 'react-icons/fa6'

import { useModalStore } from '@/utils/State/modalstore'

export default function Navbar() {
  const {
    toggleWorkVisible,
    toggleContactVisible,
    toggleAboutVisible,
    toggleGameVisible,
  } = useModalStore((state) => ({
    toggleWorkVisible: state.toggleWorkVisible,
    toggleContactVisible: state.toggleContactVisible,
    toggleAboutVisible: state.toggleAboutVisible,
    toggleGameVisible: state.toggleGameVisible,
  }))
  return (
    <div className='z-20 flex flex-col justify-between gap-8'>
      <div className='flex select-none flex-col items-center justify-between gap-8 p-2 pt-5'>
        <NavIcons
          icon={<BsFileCodeFill />}
          title='work'
          onClick={toggleWorkVisible}
        />
        <NavIcons icon={<FaToolbox />} title='skills' />
        <a
          href='https://docs.google.com/document/d/1JoViG2sGYfXkuTTqVE4wuCnBscf_bMHjTnDXhe01cVY/edit'
          target='_blank'
        >
          <NavIcons icon={<IoNewspaper />} title='resume' />
        </a>
        <NavIcons
          icon={<GiAbstract029 />}
          title='about'
          onClick={toggleAboutVisible}
        />
        <NavIcons
          icon={<MdContactMail />}
          title='contact'
          onClick={toggleContactVisible}
        />
        <NavIcons
          icon={<FaGamepad />}
          title='ropasc'
          onClick={toggleGameVisible}
        />
      </div>
      <div className='flex items-center justify-center p-2 pb-5'>
        <ModeToggle />
      </div>
    </div>
  )
}
