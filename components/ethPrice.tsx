'use client'
import { FaEthereum } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import { fetchEthereumPriceInUSD } from '@/utils/Apis/coinGecko'
import AnimatedHeading from './animatedText'

const EthPrice = () => {
  const [ethereumPrice, setEthereumPrice] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEthereumPriceInUSD()
        setEthereumPrice(data.ethereum.usd)
      } catch (error) {
        console.error('Error fetching Ethereum price:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className='absolute bottom-4 right-4 z-20 cursor-pointer text-xs duration-200 hover:text-accent'>
      {ethereumPrice ? (
        <div className='flex items-center'>
          <FaEthereum size={20} className='pr-2' />$
          <AnimatedHeading>{ethereumPrice}</AnimatedHeading>
        </div>
      ) : (
        <div className='group flex items-center gap-2'>
          <FaEthereum size={20} />
          <div className='h-4 w-[3.5rem] animate-pulse bg-foreground text-xs' />
        </div>
      )}
    </div>
  )
}

export default EthPrice
