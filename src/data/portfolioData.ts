export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
}

export interface Certification {
  title: string;
  organization: string;
  duration: string;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
}

export interface Skills {
  programmingLanguages: string[];
  frameworks: string[];
  tools: string[];
  databases: string[];
  practices: string[];
  softSkills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Jawed Afroz",
  title: "Software Engineer",
  location: "Bengaluru, IN",
  phone: "+91 87093 75673",
  email: "jawedafroz6@gmail.com",
  linkedin: "linkedin.com/in/jawed-afroz",
  github: "github.com/afroz6"
};

export const professionalSummary = "I'm a passionate software engineer who believes great code is like poetry - it should be elegant, purposeful, and tell a story. With 3 years of hands-on experience, I've mastered the art of transforming complex business requirements into intuitive, scalable web applications. My journey spans from crafting pixel-perfect frontends with React and TypeScript to architecting robust backend systems. I thrive in collaborative environments where innovation meets practical solutions, always eager to learn, share knowledge, and push the boundaries of what's possible in software development.";

export const skills: Skills = {
  programmingLanguages: ["Java", "JavaScript", "TypeScript", "Python"],
  frameworks: ["Spring Boot", "ReactJS", "JQuery"],
  tools: ["Docker", "Kubernetes", "Git", "SVN", "Jenkins", "Jira", "Linux", "AWS"],
  databases: ["MySQL", "PostgreSQL"],
  practices: ["RESTful APIs", "OOPS", "Data Structures and Algorithms", "Microservices", "Agile", "Scrum"],
  softSkills: ["Team Collaboration", "Problem-Solving", "Communication", "Time Management", "Adaptability"]
};

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Mobileum India Pvt. Ltd.",
    location: "Bengaluru, Karnataka, India",
    duration: "August 2022 - Present",
    achievements: [
      "Implemented features for the Mobileum Enterprise Application (RAID) in collaboration with the development team, enhancing usability for enterprise customers.",
      "Streamlined user workflow by implementing a feature to schedule Static Reports directly from an active dashboard, reducing manual effort and improving operational efficiency.",
      "Developed and integrated an Activity Progress Gadget using Highcharts Solid Gauge, enabling real-time visual representation of task completion and increasing user engagement.",
      "Implemented interpolated point handling for missing values in charts using Highcharts, ensuring more accurate and visually continuous data representation.",
      "Implemented a dynamic Legend feature for Highcharts Treemap, leveraging conditional formatting rules and adapting entries based on drilldown level to display context-relevant data, improving data clarity and usability.",
      "Integrated SSL into Apache Spark connections to secure data transmission and meet security standards.",
      "Leveraged Git and SVN for version control, ensuring smooth collaboration and reliable source code management."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    institution: "Dr. A. P. J. Abdul Kalam Technical University, UP",
    duration: "2018 - 2022",
    grade: "CGPA: 7.73"
  }
];

export const certifications: Certification[] = [
  {
    title: "Newton School Coding Bootcamp Internship",
    organization: "Newton School",
    duration: "December 2021 – November 2022"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Career Promotion",
    description: "Promoted as Software Engineer from Associate Software Engineer in recognition of exceptional performance and contributions.",
    date: "April 2024"
  },
  {
    title: "Team Star Recognition",
    description: "Recognized as Team Star for Exemplary contribution in Q3 2023, demonstrating outstanding teamwork and dedication.",
    date: "Q3 2023"
  }
];
