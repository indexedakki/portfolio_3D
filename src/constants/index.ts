import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  langchain,
  huggingface,
  openai,
  tensorflow,
  crewai,
  llamaindex,
  cognizant,
  docdigest,
  webscrape,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Gen AI",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "huggingface",
    icon: huggingface,
  },
  {
    name: "llamaindex",
    icon: llamaindex,
  },
  {
    name: "openai",
    icon: openai,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "crewai",
    icon: crewai,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "October 2022 - July 2024",
    points: [
      "Developing and maintaining an Automated PSUR generation web application using React and FASTapi",
      "Collaborating with cross-functional teams including pharmacovigilance writers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "LLM DocDigest",
    description: "Web application using Streamlit for uploading and processing text files (docx, pdf, txt) ",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "chromadb",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
    ],
    image: docdigest,
    sourceCodeLink: "https://github.com/indexedakki/LLM_Question_Answering",
  },
  {
    name: "WebScrape AI",
    description:
      "FastAPI application that implements an AI-based agent for extracting details from a provided website URL.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: webscrape,
    sourceCodeLink: "https://github.com/indexedakki/scrapper_genAI",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
