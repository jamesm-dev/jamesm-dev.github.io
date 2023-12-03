import bushidoLogo from '@/assets/images/bushido/bushido-logo.png'
import bushidoImg from '@/assets/images/bushido/bushido.png'

export interface IPortfolio {
  span: string
  color?: string
  dark?: boolean
  url?: string
  label: string
  team?: string
  image?: string
  imagePlacement?: string
  logo?: string
  title: string
  text: string
}

export const PORTFOLIO: IPortfolio[] = [
  {
    span: 'row-span-2 col-span-1',
    // color: '#E4E2DF',
    label: 'Personal',
    // team: 'Development Team',
    title: 'Netflix Clone',
    text: 'Copy of Netflix using React + Tailwind'
  },
  {
    span: 'row-span-1 col-span-1',
    color: '#E0DAFF',
    label: 'Webpuppies 2023/Present',
    title: 'Full-Stack Engineer',
    text: 'Currenty part of Webpuppies Digital development team'
  },
  {
    span: 'row-span-3 col-span-1',
    url: 'https://twitter.com/bushidoproj',
    label: 'Personal',
    // team: 'Development Team',
    image: bushidoImg,
    imagePlacement: 'spotlight',
    logo: bushidoLogo,
    title: 'Bushido Project',
    text: '7,777 female samurai NFT collection in Hedera Hashgraph'
  },
  {
    span: 'row-span-2 col-span-1',
    // color: '#161616',
    label: 'Personal',
    // team: 'Development Team',
    title: 'Spotify Clone',
    text: 'Copy of Spotify using React + MUI'
    // dark: true
  },
  {
    span: 'row-span-1 col-span-1',
    color: '#FFD8D1',
    label: 'Others 2019',
    title: 'N4 Japanese Certification',
    text: 'Passed both JLPT and JTEST japanese language exams'
  },
  {
    span: 'row-span-3 col-span-1',
    // color: '',
    label: 'Personal',
    // team: '',
    title: 'Soda85 Digital',
    text: 'Copy of Soda85 landing page using Vue + Tailwind'
  },
  {
    span: 'row-span-2 col-span-1 ',
    // color: '',
    label: 'Personal',
    // team: 'Development Team',
    title: 'Twitter Clone',
    text: 'Copy of Twitter using React + Tailwind'
  },
  {
    span: 'row-span-2 col-span-1',
    // color: '',
    label: 'Personal',
    // team: '',
    title: 'Discord Clone',
    text: 'Copy of Discord using React + Tailwind + Websocket.io'
  }
]
