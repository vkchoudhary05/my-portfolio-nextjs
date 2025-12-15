import { IServiceItem } from "@/types";

const services: IServiceItem[] = [

  {
    id: 2,
    title: "Web Systems & Architectures",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "Design and implementation of modern web systems with emphasis on modular architecture, responsiveness, and maintainability. Focus areas include client–server interaction, rendering strategies, and standards-compliant front-end development using contemporary web technologies.",
  },
  {
    id: 3,
    title: "Backend Systems & APIs",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "Development of backend systems with a focus on API design, data flow, and scalability. Experience includes building and integrating RESTful services, managing server-side logic, and ensuring secure and efficient communication between system components.",
  },
  {
    id: 4,
    title: "System Design & Problem Analysis",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/ubuntu.png",
    ],
    shortDescription:
      "I define goals, target audiences, and roadmap for success.",
    description:
      "Analytical approach to problem formulation, system requirements, and solution design. Experience in translating abstract problem statements into structured software systems, with attention to usability, constraints, and long-term maintainability.",
  },

  {
    id: 6,
    title: "Data Management & Storage Systems",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "  Design and management of relational and non-relational data systems with emphasis on data integrity, query optimization, and secure storage. Experience includes schema design, efficient data access patterns, and performance-aware database usage.",
  },
];

export default services;
