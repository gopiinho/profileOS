'use client'

import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { CardProps } from '@/utils/constants'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'
import { FaPiggyBank } from 'react-icons/fa'
import MiniNav from './mininav'
import { WalletOptions } from '../walletOptions'

export default function TipJar({ title }: CardProps) {
  const {
    tipjarVisible,
    toggleTipjarVisible,
    walletOptionsVisible,
    toggleWalletOptionsVisible,
  } = useModalStore((state) => ({
    tipjarVisible: state.tipjarVisible,
    toggleTipjarVisible: state.toggleTipjarVisible,
    walletOptionsVisible: state.walletOptionsVisible,
    toggleWalletOptionsVisible: state.toggleWalletOptionsVisible,
  }))

  return (
    <motion.div
      initial={{
        scale: 0,
        x: '0%',
        y: '65%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      transition={{ duration: 0.2 }}
      animate={{ scale: 1, x: '50%', y: '50%' }}
      exit={{
        scale: 0,
        x: '0%',
        y: '65%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      className='absolute inset-0 flex items-center justify-center'
    >
      <Card className='h-[95%] w-[95%] sm:h-[80%] sm:w-[70%]'>
        <CardHeader onClick={toggleTipjarVisible}>
          <CardIcon>
            <FaPiggyBank />
          </CardIcon>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <div
          className='relative flex h-full w-full flex-col text-center text-base'
          style={{ fontFamily: 'modeseven' }}
        >
          <MiniNav />
          {walletOptionsVisible && <WalletOptions />}
        </div>
      </Card>
    </motion.div>
  )
}
