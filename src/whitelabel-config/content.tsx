import Logo from '@/whitelabel-config/images/logo.svg'
import HeroImage from '@/whitelabel-config/images/hero-image.png'
import FooterLogo from '@/whitelabel-config/images/footer-logo.png'
import DiscordIcon from '@/whitelabel-config/images/social-icons/discord-ico.svg'
import FacebookIcon from '@/whitelabel-config/images/social-icons/fb-ico.svg'
import TwitterIcon from '@/whitelabel-config/images/social-icons/x-ico.svg'
import TelegramIcon from '@/whitelabel-config/images/social-icons/tele-ico.svg'
import WebsiteIcon from '@/whitelabel-config/images/social-icons/website-ico.svg'

export const Whitelabel_data = {
  header_logo: Logo,
  hero_title: 'Community-oriented blockchain investment platform',
  hero_image: HeroImage,
  site_title:
    'reDAOSeedStage - Igniting the Potential of Early-Stage Top-Tier Projects',
  site_description:
    'reDAOSeedStage is the premier platform for elevating early-stage, top-tier projects, offering unparalleled support through capital, networks, and mentorship. We are dedicated to transforming visionary ideas into industry leaders, fostering innovation and growth from the ground up. Join our ecosystem and be a part of shaping the futures leading solutions.',
  site_url: 'https://redao-launchpad.vercel.app',
  footer_description: 'We are community-oriented blockchain investment fund.',
  footer_logo: FooterLogo,
  socials: {
    website: {
      icon: WebsiteIcon,
      link: 'https://redao-launchpad.vercel.app',
    },
    twitter: {
      icon: TwitterIcon,
      link: 'https://twitter.com/reDaoAnn',
    },
    telegram: {
      icon: TelegramIcon,
      link: 'https://t.me/launchzoneann',
    },
    discord: {
      icon: DiscordIcon,
      link: '',
    },
    facebook: {
      icon: FacebookIcon,
      link: '',
    },
    other: {
      icon: null,
      link: '',
    },
  },
  copyright_text: 'Copyright by reDAO 2024',
}
