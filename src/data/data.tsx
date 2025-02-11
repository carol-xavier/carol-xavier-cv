import {
  AcademicCapIcon,
  // ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Carol Xavier's Resume",
  description: "Site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Carol Xavier.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Ceará (Brazil) based <strong className="text-stone-100">Data Analyst</strong>, currently working as a volunteer
        at <strong className="text-stone-100">Themis Furigo Institute</strong> helping build a data-driven culture for
        strategic decisions to make a better world.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training <strong className="text-stone-100">crossfit</strong>,
        enjoying <strong className="text-stone-100">theater, movies, good concerts</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">beaches</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have a background in Biotechnology and transitioned to the tech industry, where I now specialize in data analysis. 
  My expertise includes collecting, processing, and analyzing data using 𝗣𝘆𝘁𝗵𝗼𝗻, 𝗦𝗤𝗟, 𝗚𝗼𝗼𝗴𝗹𝗲 𝗖𝗹𝗼𝘂𝗱 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺, 𝗟𝗼𝗼𝗸𝗲𝗿 𝗦𝘁𝘂𝗱𝗶𝗼, 𝗣𝗼𝘄𝗲𝗿𝗕𝗜, 𝗧𝗮𝗯𝗹𝗲𝗮𝘂 and 𝗠𝗲𝘁𝗮𝗯𝗮𝘀𝗲, 
  with experience developing dashboards, automating processes, and analyzing large datasets in a fintech.`,
  aboutItems: [
    {label: 'Location', text: 'Fortaleza-CE, Brazil', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Brazilian', Icon: FlagIcon},
    {label: 'Interests', text: 'Crossfit, Brazilian music, Good movies', Icon: SparklesIcon},
    {label: 'Study', text: 'Federal University of Ceará', Icon: AcademicCapIcon},
    {label: 'Volunteering', text: 'Instituto Themis Furigo', Icon: BuildingOffice2Icon}, /*Troquei Employment por Volunteering*/
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Portuguese',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Power BI - Sales Dashboard',
    description: 'Power BI was used to develop a straightforward dashboard with KPIs of a store of cocoa-derived sweets.',
    url: 'https://app.powerbi.com/view?r=eyJrIjoiNmQ1OTUzNmYtZTI0Mi00MmNmLWI3MzMtZDk3NGRjYjA0YTgxIiwidCI6ImFjMzUyZjliLWViNjMtNGNhMi05Y2Y5LWY0YzQwMDQ3Y2VmZiIsImMiOjZ9',
    image: porfolioImage1,
  },
  {
    title: 'Pyhton - Pynomaly Alert',
    description: 'EDA (exploratory data analysis) of ecommerce sales data. Furthermore, a sales forecast was prepared using Prophet. An automated alert that arrives in the email of those responsible for the site was created using the criterion of points outside the confidence interval. In this case, if sales are lower than expected, this may indicate a malfunction in the system.',
    url: 'https://github.com/carol-xavier/Anomaly-Detection',
    image: porfolioImage2,
  }
  // {
  //   title: 'Project title 3',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage3,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2022',
    location: 'Driven Education',
    title: 'Full-Stack Web Development',
    content: <p>Intensive +1200 hours focused on practical projects using HTML, CSS, Javascript, ReactJS, NodeJS, MongoDB (NoSQL),
      Postgres, Typescript, AWS, Containers (Docker), CI/CD, DevOps</p>,
  },
  {
    date: 'May 2021',
    location: 'Utah State University',
    title: 'PhD. Student in Animal, Reproduction and Development',
    content: <p>Relevant courses: Design of Experiments, Biostatistics Methods, and Special Problem in Applied Statistics.</p>,
  },
  {
    date: 'January 2017',
    location: 'Federal University of Ceará',
    title: "Bachelor's degree in Biotechnology",
    content: <p>A program that focuses on the application of the biological sciences and technology to the preparation of new and enhanced agricultural,
      environmental, clinical, and industrial products. The cornerstone of my academic journey, which has been a great adventure. </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Data Analyst',
    location: 'Themis Furigo Institute',
    title: 'Data Analyst',
    content: (
      <p>
        Establish the Data Sector of the institute, fostering a culture that prioritizes data-driven decision-making.
        {/*Establish and lead the Data Sector of the institute, fostering a culture that prioritizes data-driven decision-making.*/}
      </p>
    ),
  },
  {
    date: 'November 2023 - August 2024',
    location: 'CloudWalk Inc.',
    title: 'Data Analyst',
    content: (
      <p>
        Advanced use of Python, SQL, and Google Cloud Platform <br />
        • Writing SQL queries for data analysis, manipulation, and feature engineering <br />
        • Processing large volumes of data<br />
        Collaboration and support <br />
        • Suggesting and participating in team collaborations for innovative projects <br />
        • Meeting the data demands of different product owners
      </p>
    ),
  },
  {
    date: 'December 2022 - May 2023',
    location: 'CloudWalk Inc.',
    title: 'Operations Analyst',
    content: (
      <p>
        •Operations and product monitoring, looking for anomalies to report to the responsible teams <br />
        •Develop dashboards and process automation to improve annomaly detection
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Erick Antunes',
      text: 'I had the pleasure of working with Carol, and I can confidently say that she is an exceptional professional. Her excellent command of English, combined with her strong experience in data analysis and programming, made her a key contributor to our team. Carol consistently demonstrated responsibility and logical thinking, which was evident in her ability to efficiently monitor both external and internal processes while working with me in the operations area, where she conducted analyses always seeking to find solutions to improve our tools and processes. She was always attentive to any anomalies and ensured they were reported to the responsible teams. Her proactive approach, attention to detail, and strong problem-solving skills made her an invaluable asset. I highly recommend Carol for any role that requires analytical expertise and solid technical knowledge!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    }
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You can reach out to me through any of the channels below:',
  items: [
    {
      type: ContactType.Email,
      text: 'carolxavier.ana@gmail.com',
      href: 'mailto:carolxavier.ana@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Fortaleza CE, Brazil',
      href: 'https://www.google.ca/maps/place/Fortaleza+-+CE/@-3.7931392,-38.6021882,12z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Carol Xavier Silva',
      href: 'https://www.linkedin.com/in/carolxaviersilva/',
    },
    {
      type: ContactType.Github,
      text: 'carol-xavier',
      href: 'https://github.com/carol-xavier',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/carol-xavier'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/carolxaviersilva/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
];
