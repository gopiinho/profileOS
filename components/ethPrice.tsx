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
    <div className='absolute bottom-2 right-2 cursor-pointer text-xs duration-200 hover:text-[#66d847]'>
      {ethereumPrice ? (
        <div className='flex items-center gap-2'>
          <FaEthereum size={20} />
          <AnimatedHeading>{ethereumPrice}</AnimatedHeading>
        </div>
      ) : (
        <div className='flex items-center gap-2'>
          <FaEthereum size={20} />
          <p className='text-xs'>loading</p>
        </div>
      )}
    </div>
  )
}

export default EthPrice
