import { AvailableProjects } from '@/routes/home/available-projects'
import { CompletedProjects } from '@/routes/home/completed-projects'
import { HeroSection } from '@/routes/home/hero-section'
import { UpcomingProjects } from '@/routes/home/upcoming-projects'

export const metadata = {
  title: 'ReDAO Launchpad - Pioneering IDO Platform for Crypto Innovators',
  description:
    'Join ReDAO Launchpad, the premier platform for launching and participating in Initial DEX Offerings (IDOs). Connect with groundbreaking crypto projects and be part of the financial revolution.',
  image: 'https://example.com/launchpad-image.jpg',
  url: 'https://www.redaolaunchpad.com',
  twitterCard: 'summary_large_image',
  twitterSite: '@ReDAOLaunchpad',
  twitterCreator: '@ReDAOLaunchpad',
  facebookAppId: 'YOUR_FACEBOOK_APP_ID',
}

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='home-bg relative z-[2] pb-[120px]'>
          <HeroSection />
          <div className='space-y-20 block mx-auto max-w-[1280px] mt-20'>
            <AvailableProjects />
            <UpcomingProjects />
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
