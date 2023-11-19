'use client'
import Skills from '@/components/skills'
import EthPrice from '@/components/ethPrice'
import Contact from '@/components/contact'
import About from '@/components/about'
import RockPaperScissor from '@/components/rockpaperscissor'
import { useModalStore } from '@/utils/State/modalstore'

export default function Home() {
  const {
    toggleContactVisible,
    contactVisible,
    aboutVisible,
    toggleAboutVisible,
    toggleGameVisible,
    gameVisible,
  } = useModalStore((state) => ({
    contactVisible: state.contactVisible,
    toggleContactVisible: state.toggleContactVisible,
    aboutVisible: state.aboutVisible,
    toggleAboutVisible: state.toggleAboutVisible,
    gameVisible: state.gameVisible,
    toggleGameVisible: state.toggleGameVisible,
  }))

  return (
    <div className='relative flex w-full items-center justify-center'>
      <EthPrice />
      {aboutVisible ? <About title='About' /> : null}
      {gameVisible ? <RockPaperScissor title='RoPaSc' /> : null}
      {contactVisible ? <Contact title='Contact' /> : null}
    </div>
  )
}
