


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
  eCommerce,
  flutterapp,
  ssr,
  absenteeism,
  contenticon,
  fluttericon,
  webdevicon,
  reacticon,
  combined,

    c,
  cPlus,
  python,
  androidStudio,
  Postgresql,
  postman,
  sql,
  flutter,
  firebase,
  bootstrap,
  ejs,
  expressjs,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  backendicon,
  resume,
  photo,
  webphoto,
  flutterphoto,
  freelancers,iiitm,
} from "../assets";







export const navLinks = [
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

const services = [
  {
    title: "Web Developer",
    icon: webdevicon,
  }, 
  {
    title: "Flutter Developer",
    icon: fluttericon,
  },
  {
    title: "React Native Developer",
    icon: reacticon,
  },
  {
    title: "Backend Developer",
    icon: backendicon,
  },

  {
    title: "Content Creator",
    icon: contenticon,
  },
 
];



const technologies = [
  // {
  //   name: "c",
  //   icon:c,
  // },
  // {
  //   name: "cPlus",
  //   icon:cPlus,
  // },
  // {
  //   name: "python",
  //   icon:python,
  // },
  {
    name: "HTML 5",
    icon:html,
  },
  {
    name: "CSS",
    icon:css,
  },
  {
    name: "bootstrap",
    icon:bootstrap,
  },
  {
    name: "nodejs",
    icon:nodejs,
  },
  {
    name: "expressjs",
    icon:expressjs,
  },
  // {
  //   name: "ejs",
  //   icon:ejs,
  // },
  // {
  //   name: "TypeScript",
  //   icon:typescript,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "PostgreSQL",
    icon: Postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },
  // {
  //   name: "redux",
  //   icon: redux,
  // },
  // {
  //   name: "postman",
  //   icon: postman,
  // },
  {
    name: "Android Studio",
    icon: androidStudio,
  },
  // {
  //   name: "sql",
  //   icon:sql,
  // },
  {
    name: "flutter",
    icon:flutter,
  },
  // {
  //   name: "firebase",
  //   icon:firebase,
  // },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "self employed",
    icon: freelancers,
    iconBg: "#383E56",
    date: "Since jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research workr",
    company_name: "ABV-IIITM GWALIOR",
    icon: iiitm,
    iconBg: "#E6DEDD",
    date: "May 2023 - August 2023",
    points: [
     "Published a RESEARCH PAPER as a first Author for the (IEEE conference)ICCVMI-2023 .",
     "Paper was based on the model developed to perform the Extractive Text Summarization.",
     "Also deployed the model on the website named Salvus Summary Retrieval."
    ],
  },
  {
    title: "Executive",
    company_name: "SGM and E-cell",
    icon: combined,
    iconBg: "#383E56",
    date: "Since 2022 ",
    points: [
      "SGM is a Student Gyan Movement-non profit club  where we provide free education to underpriviliged students.",
      "E-cell is a Enterperneurship club of IIITM-gwalior, club basically focuses upon providing the information related to enterperneurship .",
      
    ],
  },

];

const testimonials = [
  {
    
    name: "Resume",
    link:"https://drive.google.com/file/d/1CV6YZtTCiyiAnHNo0OMwaqnNXUlDBdBG/view?usp=sharing",
    image:resume ,
  },

  {
    name: "photo",
    link:"https://drive.google.com/file/d/1e4tJ9YVCK_jGf7ENPnB6NQiZwE4NGbRg/view?usp=sharing",
    image: photo,
  },

  {
    name: "Web-dev course certificate",
    link:"https://drive.google.com/file/d/1uw-YCFbRm76KitwMkWsByfkl0Hjv4lb9/view?usp=sharing",
    image: webphoto,
  },

  {
    name: "flutter course certificate",
    link:"https://drive.google.com/file/d/1tmxs2IAqDLECPWFmRTEG8Zd6nxnrVOG2/view?usp=sharing",
    image:flutterphoto,
  },

];

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "Web-based platform where users can buy various clothing items,add the same in a cart and can access them with their account anytime.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: eCommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Self Attendance-APP",
    description:
      "Flutter based application that enables users to mark their attendances for different classes and events ,a user can even set the daily reminder for same and accessed its account anytime.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: flutterapp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Absenteeism in Hours",
    description:
      "A comprehensive analysis of the data of employees to study the absenteeism in hours on a day and also prparation of the model to predict the absenteeism.",
    tags: [
      {
        name: "Data Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Logistic Regression",
        color: "green-text-gradient",
      },
      {
        name: "Tableu",
        color: "pink-text-gradient",
      },
    ],
    image: absenteeism,
    source_code_link: "https://github.com/",
  },
  {
    name: "Salvus Summary Retrieval",
    description:
      "A website creation for the deployment of an ML model based on Fuzzy-logic for the extractive text-Summarization.",
    tags: [
      {
        name: "Html-CSS",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Fuzzy-model",
        color: "red-text-gradient",
      },
    ],
    image: ssr,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
