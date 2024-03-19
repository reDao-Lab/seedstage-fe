import { AvailableProjects } from '@/routes/home/available-projects'
import { CompletedProjects } from '@/routes/home/completed-projects'
import { HeroSection } from '@/routes/home/hero-section'

export const fetchCache = 'force-no-store'
export const tags = ['all']
export const metadata = {
  metadataBase: new URL('https://redao-launchpad.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title:
    'reDAOSeedStage - Igniting the Potential of Early-Stage Top-Tier Projects',
  description: `reDAOSeedStage is the premier platform for elevating early-stage, top-tier projects, offering unparalleled support through capital, networks, and mentorship. We are dedicated to transforming visionary ideas into industry leaders, fostering innovation and growth from the ground up. Join our ecosystem and be a part of shaping the future's leading solutions.`,
  openGraph: {
    images: '/banner.jpeg',
  },
}

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='home-bg relative z-[2] pb-[120px]'>
          <HeroSection />
          <div className='space-y-20 block mx-auto max-w-[1280px] mt-20'>
            <AvailableProjects />
            {/* <UpcomingProjects /> */}
            <CompletedProjects />
          </div>
        </div>
        <div className='absolute z-[1] w-full h-full top-0 left-0 overflow-hidden'>
          <div className='w-[300px] -left-[150px] lg:w-[744px] aspect-square rounded-full bg-[#cc2727] absolute lg:-left-[500px] top-[100px]'></div>
          <div className='w-[744px] aspect-square rounded-full bg-[#cc2727] absolute right-[20px] -bottom-[400px]'></div>
        </div>
      </div>
    </>
  )
}
