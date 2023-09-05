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
    allegion,
    caracol,
    carrent,
    jobit,
    tripguide,
    threejs,
    odoo,
    dilato,
    frostFreak,
    caracolApp,
    transfer,
    itchio,
    github
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
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "3D Modeler",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "C# Developer",
      company_name: "Allegion",
      icon: allegion,
      iconBg: "#383E56",
      date: "March 2021 - September 2021",
      points: [
        "Maintenance and documentation of source code for the production environment",
        "Development of a web application for Drag n Drop label editing using ASP.NET Razor.",
        "Code refactoring",
      ],
    },
    {
      title: "Flutter developer",
      company_name: "Museo de Ciencias Caracol",
      icon: caracol,
      iconBg: "#fff",
      date: "October 2021 - March 2022",
      points: [
        "Development of a web application for museum employees to log their shift",
        "Develpoment of a multi-purpose mobile app (Flutter SDK) which allows users to buy museum tickets, be notified on new events and exhibitions offered by the museum.",
        "Development of an AR mobile app (Unity) that allows users to see 3D models of animals and natural phenomena from museum exhibitions, enabling users to engage more and have a more immersive experience"
      ],
    },
    {
      title: "Full Stack Software Developer",
      company_name: "Odoo",
      icon: odoo,
      iconBg: "#a190ad",
      date: "June 2022 - November 2022",
      points: [
        "Development of modifications to the Odoo ERP (Python, XML) system based on customer requests.",
        "Fixing and refactoring code base"
      ],
    },
    {
      title: "Software QA Engineer",
      company_name: "Dilato",
      icon: dilato,
      iconBg: "#000",
      date: "June 2023 - Present",
      points: [
        "Software QA working with Adobe",
        "Creation and execution of test cases",
      ],
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
    {
      name: "Frost Freak",
      description:
        "A first person shooter zombie survival demo game made in unity, 1rst place earner in EXPO Ingenieria at CETYS Universidad",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "3d",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "pink-text-gradient",
        },
      ],
      image: frostFreak,
      codeLinks: [
        {
          name: "github",
          color: "blue-text-gradient",
          icon:github,
          source:"https://github.com/"

        },
        
        {
          name: "itchio",
          color: "pink-text-gradient",
          icon:itchio,
          source:"https://itch.io"
        },
      ],
        
    },
    {
      name: "Museo Caracol App",
      description:
        "General purpose museum mobile app for buying tickets, get latest news and exhibitions at Caracol Museo de Ciencias.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: caracolApp,
      codeLinks: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
          icon:itchio,
          source:"https://itch.io"


        },
        {
          name: "supabase",
          color: "green-text-gradient",
          icon:itchio,
          source:"https://itch.io"


        },
        {
          name: "css",
          color: "pink-text-gradient",
          icon:itchio,
          source:"https://itch.io"


        },
      ],
    },
    {
      name: "Crypto Currency Transfer",
      description:
        "",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: transfer,
      codeLinks: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
          icon:itchio,
          source:"https://itch.io"

        },
        {
          name: "supabase",
          color: "green-text-gradient",
          icon:itchio,
          source:"https://itch.io"


        },
        {
          name: "css",
          color: "pink-text-gradient",
          icon:itchio,
          source:"https://itch.io"


        },
      ],
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };