import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [

   {
    id: "Book Management system -api-nodejs",
    title: "Book Management System API",
    description:"Developed a RESTful API using Node.js, Express.js, and MongoDB to manage structured data operations, including CRUD functionality, authentication, and modular routing.",
    researchDescription: "Demonstrates backend system design, API security fundamentals, and database interaction skills essential for research in scalable and secure web systems.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vkchoudhary05/Book-Management-03",
    tags: ["Node.js", "Express.js", "MongoDB", "WebSocket"],
  },

   {
    id: "e-commerce-api-nodejs",
    title: "E-commerce Store API",
    description:
      "Designed and implemented a backend API for e-commerce workflows, including user management, transaction handling, and third-party service integration (Stripe).",
      researchDescription: "Illustrates experience with real-world data flows, secure transaction processing, and integration of external services relevant to research in web security and privacy.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "http://github.com/vkchoudhary05/Project-05-ShoppingCart/tree/Project-05_ShoppingCart",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },



{
  id: "Url-Shortener",
  title: "Secure URL Shortener System",
  description:
    "Designed and implemented a URL shortening web application enabling users to generate compact, unique links with redirection functionality. The system includes backend validation, database persistence, and scalable routing logic.",
  researchDescription:
    "Illustrates web architecture, HTTP handling, and security fundamentals.",
  icon: "/skills/nodejs.svg",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/vkchoudhary05/your-url-shortener-repo",
  tags: ["Node.js", "Express.js", "MongoDB", "REST API"]
},

    {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website using Next.js and modern frontend practices.",
      researchDescription: "Shows understanding of modern web frameworks, client-side execution, and frontend architecture—important for research on client-side security and JavaScript behavior.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vkchoudhary05/my-portfolio-nextjs",
    tags: ["Next.js", "Sass", "Web Development"],
  },


 ];
export default projects;
