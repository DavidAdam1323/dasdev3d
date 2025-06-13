// NavLinks
const links = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
];

// Hero Section
const words = [
  { text: "Ideas", img: "public/images/ideas.svg" },
  { text: "Concepts", img: "public/images/concepts.svg" },
  { text: "Designs", img: "public/images/designs.svg" },
  { text: "Code", img: "public/images/code.svg" },
];

// AnimatedCounter
const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 100, suffix: "%", label: "Client Retention Rate" },
];

// Dummy project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my projects and skills.",
    github: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.com",
    image: "/images/portfolio.png",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    github: "https://github.com/your-username/weather-app",
    demo: "https://weather-app-demo.com",
    image: "/images/weather.png",
  },
  {
    title: "Task Manager",
    description: "Manage your tasks efficiently with drag-and-drop features.",
    github: "https://github.com/your-username/task-manager",
    demo: "https://task-manager-demo.com",
    image: "/images/task.png",
  },
  // Add more projects...
];

export { links, words, counterItems, projects };
