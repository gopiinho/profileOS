import { useState } from 'react'
import { useContractRead, Address } from 'wagmi'
import { formatEther, parseGwei } from 'viem'
import tipjarABI from '@/utils/Abis/tipjarAbi.json'
import { tipjarContractAddress } from '@/utils/constants'

interface TipProps {
  from: Address
  message: string
  name: string
  amount: bigint
  timestamp: string
}

export default function Alltips() {
  const [allTipsData, setAllTipsData] = useState<TipProps[]>([])
  // gets all previous tips from contract

  const formatAddress = (address: string | undefined) =>
    address ? `${address.slice(0, 6)}...${address.slice(-4)}` : address

  const { data, isError, isLoading } = useContractRead({
    address: tipjarContractAddress,
    abi: tipjarABI,
    functionName: 'getAllTips',
    onSettled(data: TipProps[] | undefined) {
      if (data) {
        setAllTipsData(data)
      }
    },
  })

  return (
    <>
      {isLoading ? (
        <div className='mx-auto h-28 w-full animate-pulse bg-foreground px-3 py-4 text-background sm:w-[40%] sm:px-8'></div>
      ) : (
        <div className='flex flex-col-reverse gap-3'>
          {allTipsData.map((tip) => (
            <div className='mx-auto w-full bg-foreground px-3 py-4 text-background sm:w-[40%] sm:px-8'>
              <div className='flex justify-between gap-2'>
                Name: <span className='text-right'>{tip.name}</span>
              </div>
              <div className='flex justify-between gap-2'>
                Message:
                <span className='text-right'>{tip.message}</span>
              </div>
              <div className='flex justify-between gap-2'>
                Amount:{' '}
                <span className='text-right'>
                  {formatEther(tip.amount)} ETH
                </span>
              </div>
              <div className='flex justify-between gap-2'>
                Address:{' '}
                <span className='text-right'>{formatAddress(tip.from)}</span>
              </div>
              <div className='flex justify-between gap-2'>
                Date:{' '}
                <span className='text-right'>{tip.timestamp.toString()}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
