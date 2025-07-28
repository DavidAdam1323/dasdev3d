import {
  FaHome,
  FaUser,
  FaTools,
  FaFolderOpen,
  FaEnvelope,
  FaBusinessTime,
  FaSmileBeam,
  FaCheckCircle,
  FaRedoAlt,
} from "react-icons/fa";

// NavLinks
const navLinks = [
  { name: "Home", id: "#home", icon: FaHome },
  { name: "About", id: "#about", icon: FaUser },
  { name: "Services", id: "#services", icon: FaTools },
  { name: "Projects", id: "#projects", icon: FaFolderOpen },
  { name: "Contact", id: "#contact", icon: FaEnvelope },
];

// Hero Section Starts Here ----------->
const words = [
  { text: "Ideas", img: "/images/ideas.svg" },
  { text: "Concepts", img: "/images/concepts.svg" },
  { text: "Designs", img: "/images/designs.svg" },
  { text: "Code", img: "/images/code.svg" },
];

// const items = [
//   { word: "ideas", icon: <FaLightbulb className="text-yellow-400 mr-2" /> },
//   { word: "design", icon: <FaPaintBrush className="text-pink-500 mr-2" /> },
//   { word: "concepts", icon: <FaCubes className="text-purple-500 mr-2" /> },
//   { word: "code", icon: <FaCode className="text-green-500 mr-2" /> },
// ];
// Hero Section Ends Here ----------->

// AnimatedCounter
const counterItems = [
  {
    value: 1,
    suffix: "+",
    icon: FaBusinessTime,
    label: "Years of Experience",
    color: "text-amber-400",
  },
  {
    value: 3,
    suffix: "+",
    icon: FaSmileBeam,
    label: "Satisfied Clients",
    color: "text-teal-400",
  },
  {
    value: 5,
    suffix: "+",
    icon: FaCheckCircle,
    label: "Completed Projects",
    color: "text-blue-400",
  },
  {
    value: 100,
    suffix: "%",
    icon: FaRedoAlt,
    label: "Client Retention Rate",
    color: "text-purple-400",
  },
];

// Projects - Project Card Info
const projects = [
  {
    title: "Digital Product Passport - DPP",
    description:
      "A web App that provides product info and digital passports via QR codes to support recycling and sustainability.",
    github: "https://github.com/DavidAdam1323/eslando-SoCfinal-project",
    demo: "https://eslando.vercel.app/?product=2",
    image: "/images/project1.png",
  },
  {
    title: "CDR Devs — Portfolio Website",
    description:
      "CDR Devs is a portfolio website by a passionate trio of frontend developers who bring digital visions to life.",
    github: "https://github.com/DavidAdam1323/cdrWebsite-vite",
    demo: "https://cdr-website-vite.vercel.app/",
    image: "/images/project2.png",
  },
  {
    title: "Neural Vision Publicity - NVP",
    description:
      "A digital marketing website focused on innovative strategies, boost engagement, and drive results online.",
    github: "https://github.com/DavidAdam1323/nvp-website-project",
    demo: "https://davidadam1323.github.io/nvp-website-project/",
    image: "/images/project3.png",
  },
  // Add more projects...
];

// Services
import {
  FiCode,
  FiLayout,
  FiGitBranch,
} from "react-icons/fi";

const services = [
  {
    icon: FiCode,
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with modern standards.",
    skills: [
      "Semantic HTML5 & CSS3 (Flexbox/Grid)",
      "Vanilla JavaScript (ES6+)",
      "React.js fundamentals (Hooks, Components)",
    ],
    projects: "5+ projects delivered",
  },
  {
    icon: FiLayout,
    title: "Website Optimization",
    description: "Improving performance and maintainability of existing sites.",
    skills: [
      "CSS/JS bundle optimization",
      "Mobile responsiveness fixes",
      "Basic SEO improvements",
    ],
    projects: "3+ refactor projects",
  },
  {
    icon: FiGitBranch,
    title: "Collaborative Development",
    description: "Working alongside senior developers in team environments.",
    skills: [
      "Git version control",
      "Agile workflow familiarity",
      "Code reviews participation",
    ],
    projects: "2+ team projects",
  },
];

export { navLinks, words, counterItems, projects, services };
