import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='space-y-20 block mx-auto max-w-[1280px] min-h-[61.5vh]'>
      {children}
    </div>
  )
}

export default Layout
