import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
  FaHtml5,
  FaJs,
  FaReact,
 
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiMongodb, SiTails } from "react-icons/si";
import { FaAngular, FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  //{ label: "Award", href: "#award" },
 // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Achraf Abdelfadel",
  info: "Engineering Student @ ENSAB, interesting in Web Dev.",
};
export const CERTIFICATIONS =[
  {
    logo: <FaReact/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
  {
    logo: <FaPython/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
  {
    logo: <FaJava/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
  {
    logo: <FaReact/>,
    name:"React Js",
    ref:"https://www.react.com/",
  },
]
export const ABOUT = {
  text1:
    "Engineering Student @ ENSAB | CEC Designer",
  text2:
    "I am a first-year engineering student at the National School of Applied Sciences of Berrechid (ENSAB). As a designer at the CEC Computer Engineering club, I collaborate on creative and technical projects, helping organize and promote events. I am passionate about problem-solving, teamwork, and continuously improving my communication and design skills. My goal is to contribute to innovative web solutions through a combination of creativity and collaboration.",
};

export const PROJECTS = [
  {
    title: "Personel portfolio",
    subtitle:
      "A full  platform built with React,Js Tailwinds, &nd framer motion.",
    image: image1,
    link:"https://github.com/abdelfadelAchraf/personal-portfolio",
  },
  {
    title: "A Quiz App",
    subtitle:
      "A Quiz App built with HTML, CSS and JAVASCRIPT",
    image: image2,
    link:"https://github.com/abdelfadelAchraf/quiz-App",

  },
  {
    title: "Dentist App",
    subtitle: "A project for taking Appointement buit with HTML,CSS,and javascript.",
    image: image3,
  },
  /*
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image6,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image7,
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image8,
  },*/
];
/** {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  */
export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-white" />,
    name: "Html5",
    experience: "3+ years",
  },
  {
    icon: <FaJs className="text-4xl lg:text-6xl text-white" />,
    name: "Js",
    experience: "1.5+ years",
  },
  {
    icon: <FaCss3 className="text-4xl lg:text-6xl text-white" />,
    name: "Css3",
    experience: "3+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ year",
  },
  {
    icon: <FaAngular className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "Angular",
    experience: "0.5+ year",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "0.5+ year",
  },
 
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "1/2+ years",
  },
  {
    icon: <FaBootstrap className="text-4xl lg:text-6xl text-white" />,
    name: "Bootstrap",
    experience: "1+ year",
  },
  {
    icon: <TbBrandTailwind className="text-4xl lg:text-6xl text-white" />,
    name: "Bootstrap",
    experience: "1+ year",
  },
  
  
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

export const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    title: "CEO, Tech Innovators",
    quote:
      "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
    image: user1,
  },
  {
    name: "Michael Lee",
    title: "CTO, Creative Minds",
    quote:
      "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
    image: user2,
  },
  {
    name: "Sophia Martinez",
    title: "Lead Developer, Digital Solutions",
    quote:
      "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
    image: user3,
  },
  {
    name: "Daniel Thompson",
    title: "Project Manager, InnovateX",
    quote:
      "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
    image: user4,
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://facebook.com/abdelfadel achraf",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  /*{
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },*/
  {
    href: "https://instagram.com/Hraf1010",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/abdelfadelHraf",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/abdelfadelAchraf",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/achraf-abdelfadel-6b67282a6/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
