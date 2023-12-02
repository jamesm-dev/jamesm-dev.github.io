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
    image:
      'https://scontent.fdvo2-2.fna.fbcdn.net/v/t1.6435-9/93702746_3459386397409867_5035806999455989760_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeE-QuLCTqSp50QzyK01QJv_t4xPXEnwBIS3jE9cSfAEhA4crlaeIfHwikRaZGghwfK-KX1ZwnVPL6594a-wVQs4&_nc_ohc=3kPq17a1WjsAX-zzcs0&_nc_ht=scontent.fdvo2-2.fna&cb_e2o_trans=t&oh=00_AfBY8HOX1zQihyOk1WA-WpAxO3BcHWaUhFDKrwoZIaZ4og&oe=658F700E'
  },
  {
    title: 'Seashell, Samal',
    text: 'First ever company outing with Cloudica',
    year: 2022,
    image:
      'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/286361375_5917059278309221_3007906216295886604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFkSS_CZdLednVgmexRvbBrP0JuEWvkC9Q_Qm4Ra-QL1EDFdYEaOn2lTuC_qE5UjB33kDqRGMNrwR9vTWy2Gd7G&_nc_ohc=IFtwfkYayt8AX-hyYFz&_nc_ht=scontent.fdvo2-1.fna&cb_e2o_trans=t&oh=00_AfBmJzRjD7HxwQF3Io6u-ngs_6sso7yDEjVIkir_2Id6DA&oe=656C6B00'
  },
  {
    title: 'Dahican, Mati',
    text: 'Last travel with siblings before Covid',
    year: 2019,
    image:
      'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/356396998_7118082318206905_5924241636572965783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeESTohccRGwdbjzmhkD2sJllwDGkLc6mJmXAMaQtzqYmQv1sE57j7OOubkuikETVSvUEcKX57U22JoQQS_v3FqM&_nc_ohc=SVBCwP1zxqsAX8uH_Tn&_nc_ht=scontent.fdvo2-1.fna&cb_e2o_trans=t&oh=00_AfCrCY76zNAB9cGsnv0d7b9Akg7_Mt9Q3acG1lAFubdwEQ&oe=656CD5E4'
  },
  {
    title: 'Coron, Palawan',
    text: 'First ever visayas travel with family',
    year: 2023,
    image:
      'https://scontent.fdvo2-1.fna.fbcdn.net/v/t39.30808-6/387194519_6385959431515245_4672967716658857773_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFlegUrzAt797LWuoGWsjbwAeds0nH4iOMB52zScfiI4xrOgr0Yvj8bro3uAqdK8vW0SeTPUR1FAkupkawW_fwu&_nc_ohc=bQr6R-mBk_QAX_y0xo8&_nc_ht=scontent.fdvo2-1.fna&cb_e2o_trans=t&oh=00_AfARB1NEYE95Q7XTed1xfl-WrOxoK2ZomSvxraW9yyp0FQ&oe=656C3280'
  },
  {
    title: 'Eden, Toril',
    text: 'First ever family travel with daugther',
    year: 2022,
    image:
      'https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/311334094_5223398821104651_1138360474234090454_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_eui2=AeFhbEZ3nP2ZlyHFtKngxr1ZcXldUvhMpiRxeV1S-EymJMjp7qbaMdPXyNvQiX6rCblbjz9CvyvW8hAelMkjaEtM&_nc_ohc=1BWLRnpIE9kAX-0pFul&_nc_ht=scontent.fdvo2-2.fna&cb_e2o_trans=t&oh=00_AfA2Ce1gi1RWZBHi7NB1StMDV4R8ABjhf678ZHW7czqs3A&oe=656D1951'
  }
]

export const PROFILE = {
  logo: 'https://scontent.fcgy1-1.fna.fbcdn.net/v/t1.6435-9/89072013_110633127224570_2669575946901651456_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeER89ZeloJ4q5hTWOW0BKaf-SHi2ysEhdr5IeLbKwSF2nvdvXgKmMeYSn8bLEPyEms84yc29EDK-U_MG5ArQpri&_nc_ohc=DcjN-3yqNMIAX9iHpN1&_nc_ht=scontent.fcgy1-1.fna&cb_e2o_trans=t&oh=00_AfCmnKAmu2sY1W-o1MesrSglvt4LvdEjB4v5eXpr7Zy3Zw&oe=658F135B',
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
    "Hi, I'm James, a full-stack developer with almost four years of experience primarily focused on back-end development using native JavaScript, PHP, HTML, and CSS. In 2023, I delved into frameworks, discovering my interest in advancing my skills in front-end development. While adept at replicating websites, I'm keen on enhancing my originality in web design.",

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
      label: 'Practice',
      description: 'Libraries, frameworks, and languages that I prefer to work with',
      items: [
        {
          logo: '',
          name: 'TypeScript',
          type: 'Language',
          nature: 'Front-end'
        },
        {
          logo: '',
          name: 'Vue',
          type: 'Framework',
          nature: 'Front-end'
        },
        {
          logo: '',
          name: 'React',
          type: 'Library',
          nature: 'Front-end'
        },
        {
          logo: '',
          name: 'Tailwind CSS',
          type: 'Library',
          nature: 'Front-end'
        },
        {
          logo: '',
          name: 'Nuxt (Vue)',
          type: 'Framework',
          nature: 'Front-end'
        },
        {
          logo: '',
          name: 'Next (React)',
          type: 'Framework',
          nature: 'Front-end'
        },
        {
          logo: '',
          name: 'Node',
          type: 'Runtime',
          nature: 'Full-stack'
        },
        {
          logo: '',
          name: 'PHP',
          type: 'Language',
          nature: 'Back-end'
        },
        {
          logo: '',
          name: 'MySQL',
          type: 'Database',
          nature: 'Back-end'
        }
      ]
    },
    {
      label: 'Knowledgeable',
      description: 'Libraries and frameworks that I think I can work with',
      items: [
        {
          logo: '',
          name: 'Express (Node)',
          type: 'Framework',
          nature: 'Back-end'
        },
        {
          logo: '',
          name: 'Laravel (PHP)',
          type: 'Framework',
          nature: 'Back-end'
        },
        {
          logo: '',
          name: 'CodeIgniter (PHP)',
          type: 'Framework',
          nature: 'Back-end'
        },
        {
          logo: '',
          name: 'MongoDB',
          type: 'Database',
          nature: 'Back-end'
        }
      ]
    },
    {
      label: 'Tools',
      description: 'Tools that I know and use on a daily basis',
      items: [
        {
          logo: '',
          name: 'Git',
          type: 'Version Control',
          nature: 'Full-stack'
        },
        {
          logo: '',
          name: 'Github',
          type: 'Version Control',
          nature: 'Full-stack'
        },
        {
          logo: '',
          name: 'Figma',
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
