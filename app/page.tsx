import Skills from '@/components/skills'
import EthPrice from '@/components/ethPrice'
import Contact from '@/components/contact'
import About from '@/components/about'
import RockPaperScissor from '@/components/rockpaperscissor'

export default function Home() {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <EthPrice />
      <RockPaperScissor title='RoPaSc' />
    </div>
  )
}
