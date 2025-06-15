// NavLinks
const links = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
];

// Hero Section
const words = [
  { text: "Ideas", img: "/images/ideas.svg" },
  { text: "Concepts", img: "/images/concepts.svg" },
  { text: "Designs", img: "/images/designs.svg" },
  { text: "Code", img: "/images/code.svg" },
];

// AnimatedCounter
const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

// Projects - Project Card Info
const projects = [
  {
    title: "Digital Product Passport - DPP",
    description: "A web App that provides product info and digital passports via QR codes to support recycling and sustainability.",
    github: "https://github.com/DavidAdam1323/eslando-SoCfinal-project",
    demo: "https://eslando.vercel.app/?product=2",
    image: "/images/project1.png",
  },
  {
    title: "CDR Devs — Portfolio Website",
    description: "CDR Devs is a portfolio website by a passionate trio of frontend developers who bring digital visions to life.",
    github: "https://github.com/DavidAdam1323/cdrWebsite-vite",
    demo: "https://cdr-website-vite.vercel.app/",
    image: "/images/project2.png",
  },
  {
    title: "Neural Vision Publicity - NVP",
    description: "A digital marketing website focused on innovative strategies, boost engagement, and drive results online.",
    github: "https://github.com/DavidAdam1323/nvp-website-project",
    demo: "https://davidadam1323.github.io/nvp-website-project/",
    image: "/images/project3.png",
  },
  // Add more projects...
];

export { links, words, counterItems, projects };
