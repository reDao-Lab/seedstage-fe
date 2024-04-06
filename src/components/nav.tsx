'use client'

import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import Link from 'next/link'

import userStore from '@/store/userStore'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { ConnectWalletButton } from './connect-button'

export const Nav = () => {
  const { data: userData, login } = userStore()
  const router = useRouter()

  const logoutAcc = useCallback(() => {
    login(false)
  }, [login])

  const loginAcc = useCallback(() => {
    login(true)
  }, [login])

  return (
    <div className='flex justify-center absolute z-50 px-4 xl:px-0 w-full'>
      <div className='flex py-6 items-center max-w-[1280px] w-full'>
        <Link href={'/'}>
          <Logo />
        </Link>
        <nav
          className={cn('flex items-center space-x-4 lg:space-x-6  ml-8')}
        ></nav>
        <div className='ml-auto flex items-center space-x-4'>
          <ConnectWalletButton />
        </div>
      </div>
    </div>
  )
}
