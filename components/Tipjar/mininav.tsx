import { Button } from '../ui/button'
import { IoWallet } from 'react-icons/io5'
import { FaEthereum, FaPiggyBank } from 'react-icons/fa'

import { useModalStore } from '@/utils/State/modalstore'

import { useConnect, useAccount, useDisconnect } from 'wagmi'

export default function MiniNav() {
  const { walletOptionsVisible, toggleWalletOptionsVisible } = useModalStore(
    (state) => ({
      walletOptionsVisible: state.walletOptionsVisible,
      toggleWalletOptionsVisible: state.toggleWalletOptionsVisible,
    })
  )
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect()

  const formatAddress = (address: string | undefined) =>
    address ? `${address.slice(0, 6)}...${address.slice(-4)}` : address

  return (
    <div className='flex h-14 items-center justify-between border-b border-foreground p-4'>
      <span className='gradient select-none text-lg font-black sm:text-4xl'>
        TIPJAR ETH
      </span>
      {isConnected ? (
        <Button
          className='gap-2 text-xs hover:bg-foreground/70 sm:text-base'
          size={'sm'}
          variant={'wallet'}
          onClick={() => disconnect()}
        >
          <FaEthereum />
          {formatAddress(address)}
        </Button>
      ) : (
        <Button
          className='gap-2 text-xs hover:bg-foreground/70 sm:text-base'
          size={'sm'}
          variant={'wallet'}
          onClick={toggleWalletOptionsVisible}
        >
          <IoWallet />
          Connect
        </Button>
      )}
    </div>
  )
}
