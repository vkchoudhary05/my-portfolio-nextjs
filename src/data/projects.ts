import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [

   {
    id: "Book Management system -api-nodejs",
    title: "Book Management System API",
    description:
      "A RESTful API developed using Node.js, Express.js, and MongoDB to integrate backend and frontend with ease.",
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
      "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "http://github.com/vkchoudhary05/Project-05-ShoppingCart/tree/Project-05_ShoppingCart",
    tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  },


  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "This repository contains the source code for a portfolio website built using Next.js and Sass.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/vkchoudhary05/my-portfolio-nextjs",
    tags: ["Next.js", "Sass", "Web Development"],
  },


 ];
export default projects;
