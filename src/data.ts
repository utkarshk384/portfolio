import { TechIconType } from "@/components";

export const data: IData = {
  navigationText: {
    home: ["Utkarsh's", "Portfolio"],
    about: ["About", "Me"],
    experience: ["My", "Experiences"],
    projects: ["My", "Projects"],
    tools: ["My", "Tools"],
  },

  hero: [
    "DevOPS Engineer",
    "Full-stack Engineer",
    "Hobbyist Gamer",
    "Musicophile",
    "Tech Enthusiast",
    "Consultant",
  ],
  experience: [
    {
      companyName: "Dotcom Team",
      position: "DevOPS Engineer I",
      duration: "March 2024 - Current",
      logoUrl: "/experience/dotcom-team.webp",
      description: [
        "Worked on core backend of the product by creating various APIs and systems such as the notification system, referral system, and trash functionalities.",
        "Collaborated with the frontend team to integrate APIs and ensure smooth data flow.",
        "Participated in code reviews and contributed to the overall improvement of the codebase.",
        "Implemented database normalization and optimized queries for better performance.",
        "Implemented CI solution by packaging the application using Docker to smoothen the deployment process.",
      ],
      technologies: [
        "Azure",
        "Helm",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Python",
      ],
    },

    {
      companyName: "Qwikskills",
      position: "Backend Engineer",
      duration: "March 2023 - March 2024",
      logoUrl: "/experience/qwikskills.webp",
      description: [
        "Worked on core backend of the product by creating various APIs and systems such as the notification system, referral system, and trash functionalities.",
        "Collaborated with the frontend team to integrate APIs and ensure smooth data flow.",
        "Participated in code reviews and contributed to the overall improvement of the codebase.",
        "Implemented database normalization and optimized queries for better performance.",
        "Implemented CI solution by packaging the application using Docker to smoothen the deployment process.",
      ],
      technologies: ["Express", "Go", "AWS", "Django", "Javascript", "Mysql"],
    },
  ],
  projects: [
    {
      githubUrl: "https://github.com/utkarshk384/ideal-travel-creations",
      title: "Ideal Travel Creations",
      projectUrl: "https://idealtravelcreations.utkarshk.dev",
      description: [
        "A webpage to show destinations and ideas to travel to Bhutan",
        "General details about Bhutan",
      ],
      technologies: [
        "Strapi",
        "NodeJS",
        "NextJS",
        "Mysql",
        "AWS",
        "Typescript",
      ],
      images: [
        "/projects/ideal-travel-creations/hero.webp",
        "/projects/ideal-travel-creations/middle-section.webp",
        "/projects/ideal-travel-creations/testimonial.webp",
      ],
      figmaUrl: "",
    },
    {
      githubUrl: "",
      title: "Moss Tech",
      projectUrl: "https://www.moss-tech.com/",
      description: [
        "An E-learning platform that can be used to learn DevOPS and Data Science",
        "Has got articles for users to go through and learn",
      ],
      technologies: [
        "NodeJS",
        "NextJS",
        "Mysql",
        "AWS",
        "Typescript",
        "Docker",
        "Nginx",
      ],
      images: [
        "/projects/moss-tech/hero.webp",
        "/projects/moss-tech/course-list.webp",
        "/projects/moss-tech/course.webp",
      ],
      figmaUrl:
        "https://www.figma.com/design/PddCB2SJfoEn6wTPiCKY0W/Coder-s-One-Stop?node-id=0-1&t=u4xTqJlFdcDjLGh5-1",
    },
  ],
};

type ExperienceItemProps = {
  technologies: TechIconType[];
  position: string;
  duration: string;
  logoUrl: string;
  companyName: string;
  description: string[];
};

type ProjectItemProps = {
  technologies: TechIconType[];
  title: string;
  githubUrl: string;
  figmaUrl?: string;
  description: string[];
  images: string[];
  projectUrl?: string;
};

interface IData {
  navigationText: {
    home: [string, string];
    about: [string, string];
    experience: [string, string];
    projects: [string, string];
    tools: [string, string];
  };
  hero: string[];
  experience: ExperienceItemProps[];
  projects: ProjectItemProps[];
}
