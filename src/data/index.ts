import { HomeIcon, AcademicCapIcon, Cog6ToothIcon, DocumentDuplicateIcon, UserIcon, BriefcaseIcon, FolderIcon, PaperAirplaneIcon } from "@heroicons/vue/24/outline";
 
import ProjectImg1 from "../assets/img/project1.png";
import ProjectImg2 from "../assets/img/project2.png";
import ProjectImg3 from "../assets/img/project3.png";
import Logo1 from "../assets/img/logo1.png";
import Logo2 from "../assets/img/logo2.png";
import Logo3 from "../assets/img/logo3.png";
import Logo4 from "../assets/img/logo4.png";
import Avatar1 from "../assets/img/avatar1.png";
import Avatar2 from "../assets/img/avatar2.png";
import Avatar3 from "../assets/img/avatar3.png";
import Avatar4 from "../assets/img/avatar4.png";
import MySql from "../assets/svg/MySql.svg"
import php from "../assets/svg/php.svg";
import Vue from "../assets/svg/vue-9.svg";
import HTML from "../assets/svg/html.svg";
import Java from "../assets/svg/Java.svg";
import CSS from "../assets/svg/css.svg";
  
  export const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: HomeIcon,
    },
    {
      name: "Contact",
      href: "#about",
      icon: UserIcon,
    },
    {
      name: "Education",
      href: "#education",
      icon: AcademicCapIcon,
    },
    
    {
      name: "Skills",
      href: "#skills",
      icon: DocumentDuplicateIcon,
    },
    {
      name: "Services",
      href: "#services",
      icon: BriefcaseIcon,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FolderIcon,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: PaperAirplaneIcon,
    },
  ];
  
  export const projectsItems = [
    {
      title: "Musical Website",
      description:
        "A musical website where you can explore and enjoy a variety of music tracks and genres.",
      image: ProjectImg1,
      repository: "https://github.com/ShandilyaKunal/Musical-Website"
    },
    {
      title: "Markdown Previewer",
      description:
        "A Markdown Previewer that lets you write and instantly preview Markdown content in real-time.",
      image: ProjectImg2,
      repository: "#"
    },
    {
      title: "Library Management System",
      description:
        "A Library Management System to efficiently manage and track books, borrowers, and transactions.",
      image: ProjectImg3,
      repository: "#"
    },
  ];
  
  export const skillsItems = [
    {
      name: "PHP",
      description:
        "PHP processes server-side logic to create dynamic and data-driven web content.",
      logo: php,
    },
    {
      name: "HTML",
      description:
        "HTML structures web content with tags for text, images, and links.",
      logo: HTML,
    },
    {
      name: "CSS",
      description:
        "CSS styles and arranges HTML elements to enhance their visual appearance.",
      logo: CSS,
    },
    {
      name: "MySql",
      description:
        "MySQL is a popular relational database management system for storing and managing data.",
      logo: MySql,
    },
    {
      name: "Vue",
      description:
        "Vue.js is a flexible JavaScript framework that makes building dynamic web interfaces easy and intuitive.",
      logo: Vue,
    },
    {
      name: "Java",
      description:
        "Java is a versatile, object-oriented language used for building platform-independent applications.",
      logo: Java,
    },
  ];
  
  export const servicesItems = [
    {
      title: "PHP Develloper",
      description:
        "Creates dynamic and interactive websites using PHP, with skills in building and managing server-side applications and database integration.",
      logo: Logo1,
    },
    {
      title: "Web Development",
      description:
        "Designs and builds websites and web applications, focusing on both the front-end and back-end to create functional, user-friendly digital experiences.",
      logo: Logo2,
    },
    {
      title: "Frontend Developer",
      description:
        "Specializes in building the visual and interactive parts of websites, using HTML, CSS, and JavaScript to create engaging user experiences.",
      logo: Logo3,
    },
    {
      title: "Backend Developer",
      description:
        "Builds and maintains the server-side components of web applications, handling data storage, server logic, and integration with front-end systems.",
      logo: Logo4,
    },
  ];
  
  export const testimonialsItems = [
    {
      name: "Kirti Rajput",
      review:
        "The project was handled with great care and efficiency. Every requirement was understood clearly, and the solutions provided were both creative and effective. We’re very satisfied with the results.",
      image: Avatar2,
      rating: 4,
    },
    {
      name: "Akash Ranjan",
      review:
        "From the initial discussions to the final delivery, the process was smooth and well-organized. The commitment to high-quality work and clear communication made the entire project feel effortless.",
      image: Avatar3,
      rating: 4,
    },
    {
      name: "Anand",
      review:
        "The attention to detail and dedication were remarkable. The project was completed on time, and the outcome was exactly what we hoped for. It was a pleasure working together, and we’ve already seen positive results.",
      image: Avatar1,
      rating: 4,
    },{
      name: "Ankit Tiwari",
      review:
        "The work was delivered with a high level of professionalism and care. The project’s success was due to a thoughtful approach and the ability to deliver exactly what was needed. We are extremely pleased with the outcome.",
      image: Avatar4,
      rating: 4,
    },
  ];
  // src/data/education.ts
export const educationItems = [
  {
    title: "B.Tech CSE",
    university:"Dr APJ Abdul Kalam Technical University",
    description: "with 7.16 CGPA",
    year: "2020-24",
  },
  {
    title: "Intermidiate",
    university:"Bihar School Exemanition Board,Patna",
    description: "with 50%",
    year: "2017-19",
  },
  {
    title: "High School",
    university:"Bihar School Exemanition Board,Patna",
    description: "With 56%",
    year: "2016-2017",
  },
];
