import { AvailableProjects } from '@/routes/home/available-projects'
import { CompletedProjects } from '@/routes/home/completed-projects'
import { HeroSection } from '@/routes/home/hero-section'
import { Whitelabel_data } from '@/whitelabel-config/content'

export const fetchCache = 'force-no-store'
export const tags = ['all']
export const metadata = {
  metadataBase: new URL(Whitelabel_data.site_url),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  title: Whitelabel_data.site_title,
  description: Whitelabel_data.site_description,
  openGraph: {
    images: '/sharing-image.jpeg',
  },
}

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='home-bg relative z-[2] pb-[120px] pt-[107px]'>
          <HeroSection />
          <div className='space-y-20 block mx-auto max-w-[1280px] mt-20'>
            <AvailableProjects />
            {/* <UpcomingProjects /> */}
            <CompletedProjects />
          </div>
        </div>
        <div className='absolute z-[1] w-full h-full top-0 left-0 overflow-hidden'>
          <div className='w-[300px] -left-[150px] lg:w-[744px] aspect-square rounded-full bg-primary absolute lg:-left-[500px] top-[100px]'></div>
          <div className='w-[744px] aspect-square rounded-full bg-primary absolute right-[20px] -bottom-[400px]'></div>
        </div>
      </div>
    </>
  )
}
