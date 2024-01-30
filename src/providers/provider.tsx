'use client'

import React from 'react'
import { WalletProvider } from './wallet-provider'

function Providers({ children }: React.PropsWithChildren) {
  return <WalletProvider>{children}</WalletProvider>
}

export default Providers
