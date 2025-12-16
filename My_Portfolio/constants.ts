import { Project, Experience, Skill, Workshop } from "./types";

export const RESUME_DATA = {
  name: "Najma Bashir",
  title: "Web Developer",
  titles: ["Web Developer", "UI/UX Designer", "Data Scientist"],
  summary:
    "I build accessible, pixel-perfect, and performant web experiences. With a passion for modern web technologies, I specialize in the React ecosystem, creating intuitive user interfaces and robust backend solutions.",
  location: "Somalia-Mogadishu",
  email: "najmabashiir25@gmail.com",
  avatarUrl: "/images/najma.jpeg",
};

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Three.js / R3F", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Node.js / Express", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 80, category: "Backend" },
  { name: "Python / FastAPI", level: 75, category: "Backend" },
  { name: "AWS / Docker", level: 70, category: "DevOps" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hami MiniMarket App",
    description:
      "A responsive e-commerce application developed during my Hami Skills internship. Features product categorization, car management, and a clean UI for fresh produce shopping.",
    tags: ["React", "Tailwind CSS", "Vite", "Commerce.js"],
    imageUrl: "/images/hami-market.png",
    link: "https://github.com/najmabashiir/week3_project",
  },
  {
    id: 2,
    title: "Hami Market Landing Page",
    description:
      "A responsive landing page for a local grocery store. Built with a focus on semantic HTML and modern CSS flexbox/grid layouts.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    imageUrl: "/images/hami-landing.png",
    link: "https://github.com/najmabashiir/HamiSkills-Internship-Web-Development-Track-Week-1-Project-",
  },
  {
    id: 3,
    title: "Coffee Shop Website",
    description:
      "A modern, responsive coffee shop website featuring an elegant dark theme, smooth animations, and a user-friendly layout for browsing menus and services.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    imageUrl: "/images/coffee-shop.png",
    link: "https://github.com/najmabashiir/Website-Coffee",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "Hami Skills",
    period: "Nov 2025",
    description:
      "Completed a 4-week intensive internship. Collaborated with a team to build real-world projects like the Hami MiniMarket, gaining hands-on experience in full-stack development and team workflows.",
  },
  {
    id: 2,
    role: "Freelance Developer",
    company: "Jumhuriya University",
    period: "Early 2025",
    description:
      "Worked as a freelancer on various development projects. Collaborated with university teams to deliver digital solutions and enhance web presence.",
  },
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    name: "PyCon Somalia",
    organizer: "Python Community Somalia",
    description: "Attended PyCon Somalia conference focusing on Python development and best practices"
  },
  {
    id: 2,
    name: "Bina Somalia",
    organizer: "Bina Somalia",
    description: "Participated in Bina Somalia training program for tech skills development"
  },
  {
    id: 3,
    name: "Somnog Workshop - Software Development",
    organizer: "Somnog",
    description: "Completed software development workshop covering modern development practices"
  }
];

