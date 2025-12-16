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
    title: "Hami MiniMarket",
    description:
      "A responsive e-commerce application developed during my Hami Skills internship. Features product categorization, car management, and a clean UI for fresh produce shopping.",
    tags: ["React", "Internship", "UI/UX", "Frontend"],
    imageUrl: "/images/hami-market.png",
    link: "https://github.com/najmabashiir/week3_project",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "SaaS platform leveraging LLMs to help marketers generate blog posts and social media content efficiently.",
    tags: ["Next.js", "Gemini API", "Tailwind", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#",
  },
  {
    id: 3,
    title: "Immersive 3D Portfolio",
    description:
      "An award-winning portfolio site using React Three Fiber to create immersive web experiences.",
    tags: ["R3F", "WebGL", "Blender", "React"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "TechFlow Systems",
    period: "2021 - Present",
    description:
      "Leading the frontend team in migrating legacy monoliths to micro-frontends. Improved site performance by 40%.",
  },
  {
    id: 2,
    role: "Fullstack Developer",
    company: "Creative Solutions Inc.",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client projects. Implemented CI/CD pipelines and automated testing strategies.",
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Node",
    period: "2016 - 2018",
    description:
      "Collaborated with designers to implement responsive UI components. Built RESTful APIs using Node.js.",
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

