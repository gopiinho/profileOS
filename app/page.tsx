'use client'
import Navbar from '@/components/navbar'
import Work from '@/components/work'
import Skills from '@/components/skills'
import Contact from '@/components/contact'
import About from '@/components/about'
import Profile from '@/components/profile'
import RockPaperScissor from '@/components/rockpaperscissor'
import { useModalStore } from '@/utils/State/modalstore'
import Bar from '@/components/bar'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  const {
    workVisible,
    toggleWorkVisible,
    toggleContactVisible,
    contactVisible,
    aboutVisible,
    toggleAboutVisible,
    toggleGameVisible,
    gameVisible,
    profileVisible,
    toggleProfileVisible,
    skillsVisible,
    toggleSkillsVisible,
  } = useModalStore((state) => ({
    workVisible: state.workVisible,
    toggleWorkVisible: state.toggleWorkVisible,
    contactVisible: state.contactVisible,
    toggleContactVisible: state.toggleContactVisible,
    aboutVisible: state.aboutVisible,
    toggleAboutVisible: state.toggleAboutVisible,
    gameVisible: state.gameVisible,
    toggleGameVisible: state.toggleGameVisible,
    profileVisible: state.profileVisible,
    toggleProfileVisible: state.toggleGameVisible,
    skillsVisible: state.skillsVisible,
    toggleSkillsVisible: state.toggleSkillsVisible,
  }))

  return (
    <div className='relative flex h-screen'>
      <Navbar />
      <div className='flex h-full w-full flex-col'>
        <div className='relative flex h-full w-full items-center justify-center'>
          <AnimatePresence>
            {workVisible && <Work title='Work' />}
          </AnimatePresence>
          <AnimatePresence>
            {skillsVisible && <Skills title='Skills' />}
          </AnimatePresence>
          <AnimatePresence>
            {profileVisible && <Profile title='Profile' />}
          </AnimatePresence>
          <AnimatePresence>
            {aboutVisible && <About title='About' />}
          </AnimatePresence>
          <AnimatePresence>
            {gameVisible && <RockPaperScissor title='RoPaSc' />}
          </AnimatePresence>
          <AnimatePresence>
            {contactVisible && <Contact title='Contact' />}
          </AnimatePresence>
        </div>
        <Bar />
      </div>
    </div>
  )
}
