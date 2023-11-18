import NavIcons from './navIcons'

// Icons
import { MdContactMail } from 'react-icons/md'
import { BsFileCodeFill } from 'react-icons/bs'
import { GiAbstract029 } from 'react-icons/gi'
import { TiThMenuOutline } from 'react-icons/ti'
import { FaToolbox } from 'react-icons/fa'
import { ModeToggle } from './ui/modetoggle'
import { FaGamepad } from 'react-icons/fa6'

export default function Navbar() {
  return (
    <div className='flex flex-col justify-between gap-8'>
      <div className='flex flex-col items-center justify-between gap-8 p-2 pt-5'>
        <NavIcons icon={<BsFileCodeFill />} title='work' />
        <NavIcons icon={<FaToolbox />} title='skills' />
        <NavIcons icon={<TiThMenuOutline />} title='menu' />
        <NavIcons icon={<GiAbstract029 />} title='about' />
        <NavIcons icon={<MdContactMail />} title='contact' />
        <NavIcons icon={<FaGamepad />} title='ropasc' />
      </div>
      <div className='flex items-center justify-center p-2 pb-5'>
        <ModeToggle />
      </div>
    </div>
  )
}
