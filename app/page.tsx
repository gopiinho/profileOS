import Skills from '@/components/skills'
import EthPrice from '@/components/ethPrice'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <EthPrice />
      <Contact title='contact' />
    </div>
  )
}
