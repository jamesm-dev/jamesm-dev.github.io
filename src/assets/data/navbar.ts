// assets
import logoTypescript from '@/assets/icons/typescript.png'
import logoJavascript from '@/assets/icons/javascript.png'
import logoHTML from '@/assets/icons/html.png'
import logoCSS from '@/assets/icons/css.png'
import logoVue from '@/assets/icons/vue.png'
import logoVite from '@/assets/icons/vite.png'
import logoReact from '@/assets/icons/react.png'
import logoTailwind from '@/assets/icons/tailwind.png'
import logoBootstrap from '@/assets/icons/bootstrap.png'
import logoNode from '@/assets/icons/node.png'
import logoNuxt from '@/assets/icons/nuxt.png'
import logoNext from '@/assets/icons/next.png'
import logoExpress from '@/assets/icons/express.png'
import logoPHP from '@/assets/icons/php.png'
import logoLaravel from '@/assets/icons/laravel.png'
import logoCodeIgniter from '@/assets/icons/codeigniter.png'
import logoMySQL from '@/assets/icons/mysql.png'
import logoMongoDB from '@/assets/icons/mongodb.png'
import logoGit from '@/assets/icons/git.png'
import logoGithub from '@/assets/icons/github.png'
import logoFigma from '@/assets/icons/figma.png'
import logoPhotoshop from '@/assets/icons/photoshop.png'
import logoPostman from '@/assets/icons/postman.png'
import logoWebflow from '@/assets/icons/webflow.png'

import logoProfile from '@/assets/images/logo-profile.jpg'

// moments
import momentUP from '@/assets/images/moments/up-diliman.jpg'
import momentDahican from '@/assets/images/moments/dahican-mati.jpg'
import momentSeashell from '@/assets/images/moments/seashell-samal.jpg'
import momentEden from '@/assets/images/moments/eden-toril.jpg'
import momentCoron from '@/assets/images/moments/coron-palawan.jpg'

export interface IMoment {
  title: string
  text: string
  year: number
  image: string
}

export interface IExperience {
  title: string
  company: string
  address: string
  workSetup: string
  duration: string
}

export interface ISkill {
  logo: string
  name: string
  type: string
  nature: string
  tag?: string
}

export interface IService {
  title: string
  description: string
  contract: string
  url: string
}

export const MOMENTS: IMoment[] = [
  {
    title: 'UP, Diliman',
    text: 'I passed the N4 JTEST and JPLT exams',
    year: 2019,
    image: momentUP
  },
  {
    title: 'Dahican, Mati',
    text: 'Last travel with siblings before Covid',
    year: 2019,
    image: momentDahican
  },
  {
    title: 'Seashell, Samal',
    text: 'First ever company outing with Cloudica',
    year: 2022,
    image: momentSeashell
  },
  {
    title: 'Eden, Toril',
    text: 'First ever family travel with daugther',
    year: 2022,
    image: momentEden
  },
  {
    title: 'Coron, Palawan',
    text: 'First ever visayas travel with family',
    year: 2023,
    image: momentCoron
  }
]

export const PROFILE = {
  logo: logoProfile,
  firstName: 'James',
  lastName: 'Malatabon',
  email: 'jamesmalatabon@gmail.com',
  address: 'Davao, Philippines',
  preferredSetup: 'Remote',

  socials: [
    {
      label: 'Twitter',
      url: 'https://twitter.com/jepaninja'
    },
    {
      label: 'Youtube',
      url: 'https://www.youtube.com/@jepaninja'
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/codewithsantiago'
    },
    {
      label: 'Contra',
      url: 'https://contra.com/jamesmalatabon'
    }
  ],

  introduction:
    "Hi, I'm James, a full-stack engineer with almost four years of experience primarily focused on back-end development using native JavaScript, PHP, HTML, and CSS. In 2023, I delved into frameworks, discovering my interest in advancing my skills in front-end development. While adept at replicating websites, I'm keen on enhancing my originality in web design.",

  experience: [
    {
      title: 'Full-stack Developer',
      company: 'Webpuppies Digital',
      address: 'Singapore',
      workSetup: 'Remote',
      duration: '2023 - Present'
    },
    {
      title: 'Software Developer',
      company: 'Eversun Software Philippines',
      address: 'Davao, Philippines',
      workSetup: 'Remote',
      duration: '2021 - 2022'
    },
    {
      title: 'Full-stack Developer',
      company: 'Simple Content',
      address: 'Sydney, Australia',
      workSetup: 'Remote',
      duration: '2014 - 2015'
    },
    {
      title: 'Web Developer (Junior)',
      company: 'Segworks Technologies Corporation',
      address: 'Davao, Philippines',
      workSetup: 'On-site',
      duration: '2013 - 2014'
    }
  ],

  skills: [
    {
      label: 'Interests / Practicing',
      description: 'Tools that I prefer or have worked with',
      items: [
        {
          logo: logoTypescript,
          name: 'TypeScript',
          type: 'Language',
          nature: 'Front-end',
          tag: '#1 interest'
        },
        {
          logo: logoVue,
          name: 'Vue',
          type: 'Framework',
          nature: 'Front-end',
          tag: '#2 interest'
        },
        {
          logo: logoReact,
          name: 'React',
          type: 'Library',
          nature: 'Front-end'
        },
        {
          logo: logoTailwind,
          name: 'Tailwind CSS',
          type: 'Library',
          nature: 'Front-end',
          tag: '#3 interest'
        },
        {
          logo: logoBootstrap,
          name: 'Bootstrap',
          type: 'Library',
          nature: 'Front-end'
        },
        {
          logo: logoNuxt,
          name: 'Nuxt (Vue)',
          type: 'Framework',
          nature: 'Front-end'
        },
        {
          logo: logoNext,
          name: 'Next (React)',
          type: 'Framework',
          nature: 'Front-end'
        },
        {
          logo: logoNode,
          name: 'Node',
          type: 'Runtime',
          nature: 'Full-stack'
        },
        {
          logo: logoPHP,
          name: 'PHP',
          type: 'Language',
          nature: 'Back-end'
        },
        {
          logo: logoMySQL,
          name: 'MySQL',
          type: 'Database',
          nature: 'Back-end'
        }
      ]
    },
    {
      label: 'Knowledgeable',
      description: 'Tools that I know and think I can work with',
      items: [
        {
          logo: logoExpress,
          name: 'Express (Node)',
          type: 'Framework',
          nature: 'Back-end'
        },
        {
          logo: logoLaravel,
          name: 'Laravel (PHP)',
          type: 'Framework',
          nature: 'Back-end'
        },
        {
          logo: logoCodeIgniter,
          name: 'CodeIgniter (PHP)',
          type: 'Framework',
          nature: 'Back-end'
        },
        {
          logo: logoMongoDB,
          name: 'MongoDB',
          type: 'Database',
          nature: 'Back-end',
          tag: '#4 interest'
        },
        {
          logo: logoWebflow,
          name: 'Webflow',
          type: 'CMS',
          nature: 'Full-stack',
          tag: '#5 interest'
        }
      ]
    },
    {
      label: 'Regular',
      description: 'Tools that I know and use frequently',
      items: [
        {
          logo: logoGit,
          name: 'Git',
          type: 'Version Control',
          nature: 'Full-stack'
        },
        {
          logo: logoGithub,
          name: 'Github',
          type: 'Version Control',
          nature: 'Full-stack'
        },
        {
          logo: logoPostman,
          name: 'Postman',
          type: 'Testing',
          nature: 'Back-end'
        },
        {
          logo: logoFigma,
          name: 'Figma (Prototype Viewing)',
          type: 'Design',
          nature: 'Front-end'
        },
        {
          logo: logoPhotoshop,
          name: 'Photoshop (Basic)',
          type: 'Design',
          nature: 'Front-end'
        }
      ]
    }
  ],

  services: [
    {
      title: 'Full-stack Development',
      description: 'Build ideas into real website from scratch',
      contract: 'Hourly Rate',
      url: 'https://contra.com/s/6qYQov2m-full-stack-development'
    },
    {
      title: 'Front-end Development',
      description: 'Transform designs into websites with accuracy',
      contract: 'Hourly Rate',
      url: 'https://contra.com/s/PsMZYUL6-front-end-development'
    },
    {
      title: 'Landing Page Development',
      description: 'Build landing pages for websites',
      contract: 'Fixed Price',
      url: 'https://contra.com/s/YrcqUmAQ-landing-page-development'
    }
  ]
}
