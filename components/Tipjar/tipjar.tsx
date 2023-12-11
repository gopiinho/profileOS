'use client'
import { useState, ChangeEvent } from 'react'
import { Card, CardHeader, CardIcon, CardTitle } from '@/components/ui/card'
import { Button } from '../ui/button'
import { CardProps } from '@/utils/constants'
import { useModalStore } from '@/utils/State/modalstore'
import { motion } from 'framer-motion'
import { FaPiggyBank } from 'react-icons/fa'
import MiniNav from './mininav'
import { WalletOptions } from '../walletOptions'
import { parseEther } from 'viem'
import { useContractWrite, useContractRead, useAccount } from 'wagmi'
import tipjarABI from '@/utils/Abis/tipjarAbi.json'
import { tipjarContractAddress } from '@/utils/constants'
import Alltips from './alltips'

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
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [inputValue, setInputValue] = useState('')

  // wagmi.sh contract write setup & wallet
  const { isConnected } = useAccount()

  // prepares tipEth function
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: tipjarContractAddress,
    abi: tipjarABI,
    functionName: 'tipEth',
  })

  /* Function runs on click of the button and runs the wagmi write to process the transaction.
   */
  const handlefunctionWrite = () => {
    const parsedValue = parseEther(`${parseFloat(inputValue)}`)

    /* Write() here uses inputs to use pass in donateEth function. parsedValue is used as a
       parameter for the function and also to pass in as value for the payable function */
    write({
      args: [name, message, parsedValue],
      value: parsedValue,
    })
  }
  // Section handles change of input values
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    let sanitizedValue = value.replace(/[^0-9.]+/g, '') // Remove non-numeric characters except decimal point
    const decimalCount = (sanitizedValue.match(/\./g) || []).length // Count the decimal points

    /* Limit to one decimal point
     */
    if (decimalCount > 1) {
      const parts = sanitizedValue.split('.')
      sanitizedValue = parts[0] + '.' + parts.slice(1).join('')
    }

    setInputValue(sanitizedValue)
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

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
      <Card className='relative h-[95%] w-[95%] overflow-hidden sm:h-[80%] sm:w-[70%]'>
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
          <div className='scrollbar grid h-full gap-10 overflow-scroll py-10 '>
            <div className='flex h-full w-full flex-col gap-8 py-6'>
              <div className='inset-0 mx-auto flex h-min w-[80%] flex-col gap-1 bg-foreground px-2 py-4 text-background lg:w-[400px]'>
                <input
                  type='text'
                  inputMode='text'
                  placeholder='Name'
                  maxLength={30}
                  value={name}
                  onChange={handleNameChange}
                />
                <input
                  type='text'
                  inputMode='text'
                  placeholder='Message'
                  maxLength={60}
                  value={message}
                  onChange={handleMessageChange}
                />
                <input
                  type='text'
                  inputMode='decimal'
                  maxLength={10}
                  placeholder='0.0 ETH'
                  value={inputValue}
                  onChange={handleInputChange}
                />
                {isConnected ? (
                  <Button
                    variant={'threeD'}
                    size={'threeD'}
                    onClick={handlefunctionWrite}
                  >
                    Tip
                  </Button>
                ) : (
                  <Button
                    variant={'threeDnormal'}
                    size={'threeD'}
                    onClick={toggleWalletOptionsVisible}
                  >
                    Connect Wallet
                  </Button>
                )}
              </div>
            </div>
            <div className='mx-auto my-6 grid h-full w-[90%] gap-6 sm:my-0'>
              <h5 className='font-bold uppercase'>History</h5>
              <Alltips />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
