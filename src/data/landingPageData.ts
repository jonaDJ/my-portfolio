import meta from "../assets/images/meta-symbol.jpg";
export interface AboutSectionProps {
  role: string;
  description: string[];
}

export interface ExperienceAndEducationProps {
  items: ExperienceAndEducationItemProps[];
}

export interface ExperienceAndEducationItemProps {
  id: string;
  type: string;
  title?: string;
  dates: string;
  location: string;
  description: string;
  degree?: string;
}

export interface CertificateProps {
  id: number;
  title: string;
  img: string;
}

export interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export interface SkillsDataProps {
  categories: SkillCategoryProps[];
}

export interface LandingPageProps {
  aboutSectionData: AboutSectionProps;
  experienceAndEducationData: ExperienceAndEducationProps;
  skillsData: SkillsDataProps;
  certificatesData: CertificateProps[];
}

const landingPageData = {
  aboutSectionData: {
    role: "SOFTWARE DEVELOPER",
    description: [
      "Hi there! Welcome to my portfolio. I'm a software developer with a passion for creating user-friendly, accessible, and responsive web applications. I have experience in all aspects of the software development life cycle, from requirements gathering to deployment.",
      "I specialize in front-end web development, but I also have experience in backend development. To learn more about my work, please visit my portfolio or contact me directly.",
    ],
  },
  experienceAndEducationData: {
    items: [
      {
        id: "ee-1",
        type: "experience",
        title: "Frontend Engineer",
        dates: "2009-present",
        location: "USA",
        description:
          "Experienced frontend engineer specializing in web development, with a focus on enhancing accessibility and web performance. Passionate about delivering seamless user experiences and driving growth through cutting-edge technologies and innovative solutions.",
      },
      {
        id: "ee-2",
        type: "experience",
        title: "SDE 1",
        dates: "2022-2023",
        location: "USA",
        description:
          "Dedicated Software Development Engineer (SDEU) at AWS Amazon, with a focus on customer-centric features and optimizing the AWS Athena serverless query system. Committed to quality, performance, and security, while actively participating in feature projects and delivering results on time.",
      },
      {
        id: "ee-3",
        type: "experience",
        title: "Software Engineer Intern",
        dates: "2021-2022",
        location: "USA",
        description:
          "Enthusiastic Software Engineer Intern, specializing in user interface development. Proficient in ReactJS, React Native, and TypeScript. Played a key role in migrating legacy applications to ReactJS and improving user experiences through responsive design techniques.",
      },
      {
        id: "ee-4",
        type: "education",
        degree: "Master of Science in Computer Science",
        dates: "2021-2022",
        location: "USA",
        description:
          "Studied and delved deep into computer science, successfully completing ten subjects, and acquiring a wealth of knowledge in the field. GPA: 3.5/4",
      },
      {
        id: "ee-5",
        type: "experience",
        title: "Software Engineer",
        dates: "2021-2022",
        location: "India",
        description:
          "Experienced professional with a focus on developing and optimizing frontend components for single-page applications, enhancing user interactions and experiences. Proficient in improving application responsiveness and enabling dynamic user interface customization based on i",
      },
      {
        id: "ee-6",
        type: "education",
        degree: "Bachelor in Computer Science",
        dates: "2015-2019",
        location: "India",
        description:
          "Over a four-year program, I earned certification as a top-ranking student, successfully completing a rigorous curriculum of 32 subjects, which included hands-on computer labs and four distinct projects, demonstrating my commitment to academic excellence and practical application of knowledge.",
      },
    ],
  },
  skillsData: {
    categories: [
      {
        category: "Frontend",
        skills: [
          "ReactJS",
          "TypeScript",
          "JavaScript",
          "Angular",
          "HTML5",
          "ES6+",
          "RxJS",
          "DOM",
          "Virtual DOM",
          "CSS3",
          "SASS",
          "LESS",
          "Bootstrap",
          "jQuery",
          "Redux",
          "Functional Programming",
          "Arrow Functions",
          "Ajax",
          "JSON",
          "Web Applications",
          "Promises",
          "Async-Await",
          "a11y",
          "Babel",
          "Webpack bundle",
          "NPM",
          "SEO",
          "tailwind",
        ],
      },
      {
        category: "NodeJS",
        skills: ["NodeJS", "Python", "SQL"],
      },
      {
        category: "Others",
        skills: [
          "WCAG 2.1",
          "UX/UI",
          "FIGMA prototyping",
          "Jest",
          "Jenkins",
          "Mockups",
          "AWS",
          "CI/CD",
          "GitHub",
          "Agile methodology",
          "Code-review",
          "On-call",
          "IntelliJ",
          "Visual Studio Code",
          "Babel",
          "Firebase",
          "Webpack bundle",
          "npm",
          "Unit testing",
          "Integration test",
          "Postman",
        ],
      },
      // Add other skill categories here
    ],
  },
  certificatesData: [
    {
      id: 1,
      title: "Version Control",
      img: meta,
    },
    {
      id: 2,
      title: "Advanced React",
      img: meta,
    },
    {
      id: 3,
      title: "Principles of UX/UI Design",
      img: meta,
    },
    {
      id: 4,
      title: "React Basics",
      img: meta,
    },
    {
      id: 5,
      title: "Programming with JavaScript",
      img: meta,
    },
    {
      id: 6,
      title: "HTML and CSS in depth",
      img: meta,
    },
    {
      id: 7,
      title: "Front-End Developer Capstone",
      img: meta,
    },
    {
      id: 8,
      title: "Introduction to Front-End Development",
      img: meta,
    },
  ],
  // Add other certificate items here
};

export default landingPageData;
