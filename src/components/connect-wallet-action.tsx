'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from './ui/button'

export function ConnectWalletAction() {
  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openConnectModal,
          openChainModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading'
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === 'authenticated')
          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                style: {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      size={'custom'}
                      className='uppercase'
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  )
                }
                if (chain.id !== 42161) {
                  return (
                    <>
                      <Button
                        size={'custom'}
                        className='uppercase'
                        onClick={openChainModal}
                      >
                        Wrong Network
                      </Button>
                      <p className='pt-2 text-center text-[#b3b3b3] text-xs'>
                        Switch to Arbitrum
                      </p>
                    </>
                  )
                }
                return null
              })()}
            </div>
          )
        }}
      </ConnectButton.Custom>
    </>
  )
}
