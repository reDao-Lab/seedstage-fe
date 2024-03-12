import * as React from 'react'
import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
} from '@rainbow-me/rainbowkit'
import {
  trustWallet,
  metaMaskWallet,
  coinbaseWallet,
  okxWallet,
  walletConnectWallet,
  coin98Wallet,
  rabbyWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, bsc, arbitrum } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc, arbitrum],
  [publicProvider()],
)

const projectId = '16ecab17339b29f7c87507f8a077edcf'

const appInfo = {
  appName: 'ReDAO',
}

const connectors = connectorsForWallets([
  {
    groupName: 'Popular',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      okxWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      coinbaseWallet({ appName: appInfo.appName, chains }),
      rabbyWallet({ ...appInfo, chains }),
      coin98Wallet({ projectId, chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={appInfo} theme={darkTheme()}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
