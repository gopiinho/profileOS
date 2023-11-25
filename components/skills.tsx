import { Card, CardHeader, CardTitle, CardIcon } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'
import { FaToolbox } from 'react-icons/fa'

export default function Skills({ title }: CardProps) {
  const { toggleSkillsVisible } = useModalStore((state) => ({
    toggleSkillsVisible: state.toggleSkillsVisible,
  }))

  return (
    <motion.div
      initial={{
        scale: 0,
        x: '0%',
        y: '25%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '25%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='h-[95%] w-[95%] sm:h-[70%] sm:w-[60%]'>
        <CardHeader onClick={toggleSkillsVisible}>
          <CardIcon>
            <FaToolbox />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div className='scrollbar flex h-full flex-col gap-3 overflow-scroll p-3'>
          <div className='flex h-full flex-col gap-3 sm:flex-row'>
            <div className='w-full border border-primary p-2'>
              <div
                className='py-2 text-xl font-semibold uppercase sm:py-3 sm:text-2xl xl:text-3xl'
                style={{ fontFamily: 'modeseven' }}
              >
                <span className='text-2xl text-accent xl:text-4xl'>B</span>
                lockchain
              </div>
              <div className='grid gap-2'>
                <div className='bg-primary p-2'>
                  <div className='text-lg font-semibold uppercase'>
                    Smart Contracts
                  </div>
                  <div className='ml-3 grid'>
                    <span>-Solidity</span>
                    <span>-Foundry</span>
                    <span>-Hardhat</span>
                  </div>
                </div>
                <div className='bg-primary p-2'>
                  <div className='text-lg font-semibold uppercase'>
                    Interactions
                  </div>
                  <div className='ml-3 grid'>
                    <span>-Wagmi.sh</span>
                    <span>-Ethers.js</span>
                    <span>-Rainbow Kit</span>
                  </div>
                </div>
                <div className='bg-primary p-2'>
                  <div className='text-lg font-semibold uppercase'>Tools</div>
                  <div className='ml-3 grid'>
                    <span>-IPFS</span>
                    <span>-Openzepplin</span>
                    <span>-Chainlink</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full border border-primary p-2'>
              <div
                className='py-2 text-xl font-semibold uppercase sm:py-3 sm:text-2xl xl:text-3xl'
                style={{ fontFamily: 'modeseven' }}
              >
                Web<span className='text-2xl text-accent xl:text-4xl'>A</span>
                pps
              </div>
              <div className='grid gap-2'>
                <div className='bg-primary p-2'>
                  <div className='text-lg font-semibold uppercase'>
                    Frontend
                  </div>
                  <div className='ml-3 grid'>
                    <span>-Typescript</span>
                    <span>-Next.js</span>
                    <span>-Astro</span>
                  </div>
                </div>
                <div className='bg-primary p-2'>
                  <div className='text-lg font-semibold uppercase'>UI/UX</div>
                  <div className='ml-3 grid'>
                    <span>-Tailwindcss/CSS</span>
                    <span>-Shadcn-ui</span>
                    <span>-Framer Motion</span>
                  </div>
                </div>
                <div className='bg-primary p-2'>
                  <div className='text-lg font-semibold uppercase'>
                    Design Tools
                  </div>
                  <div className='ml-3 grid'>
                    <span>-Figma</span>
                    <span>-(Lots of Inspirations)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full flex-col justify-between border border-primary p-2'>
              <div>
                <div
                  className='py-2 text-xl font-semibold uppercase sm:py-3 sm:text-2xl xl:text-3xl'
                  style={{ fontFamily: 'modeseven' }}
                >
                  Dev
                  <span className='text-2xl text-accent xl:text-4xl'>T</span>
                  ools
                </div>
                <div className='grid gap-2'>
                  <div className='bg-primary p-2'>
                    <div className='text-lg font-semibold uppercase'>
                      Management
                    </div>
                    <div className='ml-3 grid'>
                      <span>-Git & Github</span>
                      <span>-Jira / Slack</span>
                    </div>
                  </div>
                  <div className='bg-primary p-2'>
                    <div className='text-lg font-semibold uppercase'>
                      Deployments
                    </div>
                    <div className='ml-3 grid'>
                      <span>-Vercel / Netlify</span>
                      <span>-AWS / Azure</span>
                    </div>
                  </div>
                  <div className='bg-primary p-2 '>
                    <div className='text-lg font-semibold uppercase'>
                      Testing
                    </div>
                    <div className='ml-3 grid'>
                      <span>-Mocha</span>
                      <span>-Foundry</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className='p-1 text-[0.6rem]'>
                Ability to always learn and adapt.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
