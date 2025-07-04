import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "FUll Stack Developer",
    company: "SarvoBharat Technologies pvt. Ltd.",
    startDate: "May 2025",
    isCurrentJob: true,
    location: "Pune, India",
    description: [
      "Currently working on developing innovative software solutions.",
      "Contributing to large-scale projects with a focus on performance optimization.",
      "Collaborating closely with cross-functional teams to ensure product quality.",
      "Adhering to clean code practices and modern development techniques.",
    ],
  },

  {
   designation: "Frontend Development Intern",
  company: "Teeoff Technologies Pvt. Ltd.",
  startDate: "Nov 2024",
  endDate: "May 2025",
  isCurrentJob: false,
  location: "Gurgaon, India",
  description: [
    "Developed and maintained dynamic web applications using React.js and Next.js.",
    "Built reusable UI components with a focus on performance, responsiveness, and accessibility.",
    "Integrated RESTful APIs to display real-time data and enable interactive user experiences.",
    "Collaborated with designers and backend developers to translate designs into functional interfaces.",
    "Optimized web pages for faster load times and better SEO using Next.js features like SSR and dynamic routing."
  ]
  },
{
  designation: "Backend Development Trainee",
  company: "FunctionUp Pvt. Ltd.",
  startDate: "Jan 2022",
  endDate: "June 2022",
  isCurrentJob: false,
  location: "Remote",
  description: [
    "Gained hands-on experience in backend development using modern technologies and frameworks.",
    "Built and improved RESTful APIs and backend services under the guidance of senior developers.",
    "Strengthened understanding of server-side architecture, database design, and authentication systems.",
    "Practiced writing clean, modular, and maintainable code with real-world project requirements.",
    "Collaborated in an agile environment, contributing to code reviews and team discussions."
  ],
}

];

export default experiences;
