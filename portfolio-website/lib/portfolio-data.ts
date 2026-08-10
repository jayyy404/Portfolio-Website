export interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: "West Select",
    description: "A centralized e-commerce app for students in the university.",
    tech: ["Dart", "Flutter", "Firebase", "Cloudinary"],
    link: "https://github.com/jayyy404/west_select",
  },
  {
    title: "Cervis",
    description:
      "A hybrid deep learning model mobile app for Pap smear analysis to enhance rural healthcare accessibility.",
    tech: ["Mobile App", "Deep Learning"],
  },
  {
    title: "AirPlay",
    description: "A Spotify clone project fused with gesture detection using the MediaPipe library in Next.js.",
    tech: ["Next.js", "MediaPipe"],
  },
  {
    title: "Object Detection System",
    description: "Basic AI-powered object detection model using Python and OpenCV.",
    tech: ["Python", "OpenCV"],
    link: "https://github.com/jayyy404/Object-Detection",
  },
  {
    title: "Personalized Health Coach",
    description:
      "A web-based health assistant app designed to provide personalized fitness and wellness recommendations.",
    tech: ["Python", "Flask", "HTML", "CSS", "Gemini API"],
    link: "https://github.com/jayyy404/Personalized-Health-Coach",
  },
  {
    title: "ExpenseEase",
    description: "A mobile budgeting app developed for a local hackathon.",
    tech: [],
  },
  {
    title: "Portfolio Website",
    description: "A minimalistic portfolio website showcasing projects and achievements with smooth animations.",
    tech: ["TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://sapasapportfolio.vercel.app/",
  },
  {
    title: "Corner Detection System",
    description: "An image processing project that detects and highlights corner points in images.",
    tech: ["Python", "OpenCV"],
    link: "https://github.com/jayyy404/Corner-Detection",
  },
  {
    title: "Sidequest",
    description: "A job listing and recruitment mobile app focused on small-scale and part time gigs.",
    tech: ["Flutter", "Dart", "Firebase"],
    link: "https://github.com/jayyy404/Job-Search-App",
  },
  {
    title: "WVSU Coop Website",
    description: "A modern redesign of the WVSU Cooperative website for improved accessibility and layout.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    link: "https://github.com/jayyy404/WVSU_Coop",
  },
  {
    title: "Parking Occupancy Detection System",
    description:
      "A computer vision-based system that automatically detects and monitors parking space occupancy in real-time using video feeds.",
    tech: ["Python", "OpenCV"],
    link: "https://github.com/jayyy404/Parking-Occupancy-Detection-",
  },
  {
    title: "Newton-Raphson Method Visualizer",
    description: "An interactive application that implements the Newton's method for optimization.",
    tech: ["Python", "Streamlit"],
    link: "https://newton-raphson-optimization.streamlit.app/",
  },
]

export interface ExperienceBullet {
  title: string
  description: string
}

export interface ExperienceEntry {
  role: string
  org: string
  location?: string
  date: string
  bullets: ExperienceBullet[]
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Developer — Intern",
    org: "Prometheus",
    location: "Iloilo City",
    date: "2026",
    bullets: [
      {
        title: "Frontend Architecture & Optimization",
        description:
          "Engineered modular UI/UX component overrides and executed cross-platform optimization passes using React and Tailwind CSS, substantially mitigating rendering layout shifts and maximizing cross-device visual fidelity.",
      },
      {
        title: "Data Layer Refactoring",
        description:
          "Refactored a high-throughput, mission-critical client-side rendering pipeline for document generation, optimizing local memory allocation.",
      },
      {
        title: "Version Control Architecture",
        description:
          "Enforced strict trunk-based version control discipline, managing complex branch-rebasing conflicts and establishing standardized pull-request structures driven by the Conventional Commits semantic specification (feat: fix: refactor:) to maintain automated, scannable, and clean deployment histories.",
      },
    ],
  },
  {
    role: "Freelance Software Developer",
    org: "Mobile & Web Applications",
    date: "2023 - 2026",
    bullets: [
      {
        title: "Healthcare Information System (EHR/Clinical Workflow Platform)",
        description:
          "Architected and deployed a secure, full-stack clinical management platform facilitating real-time data synchronization between healthcare providers and patient records. Engineered a rigid Role-Based Access Control (RBAC) matrix using secure session state management, ensuring distinct, policy-enforced data access boundaries and confidentiality compliance for doctors, nursing staff, and administrative personnel.",
      },
      {
        title: "Biometric Attendance Tracking & Management System",
        description:
          "Developed and integrated an edge-based school attendance infrastructure leveraging real-time facial recognition algorithms to automate student check-ins and identity verification, with optimized video capture rates and image normalization for low-latency facial embedding matches and automated telemetry reporting.",
      },
      {
        title: "E-Commerce Mobile Application",
        description:
          "Developed and deployed native-performing, high-fidelity e-commerce applications for local commercial enterprises using Flutter and Dart, integrating Firebase for serverless backend execution, real-time product database synchronization, secure authentication, and cloud-triggered data workflows.",
      },
    ],
  },
]

export interface SkillCategory {
  name: string
  color: "blue" | "green" | "orange" | "purple" | "cyan" | "yellow"
  techs: string[]
}

export const skillCategories: SkillCategory[] = [
  { name: "Languages", color: "blue", techs: ["Python", "C++", "Dart", "PHP", "SQL"] },
  { name: "Frontend", color: "green", techs: ["React", "Next.js", "Tailwind CSS"] },
  { name: "Mobile", color: "orange", techs: ["Flutter", "Dart", "Android Studio"] },
  { name: "Backend", color: "purple", techs: ["Flask", "PHP"] },
  { name: "Cloud & BaaS", color: "cyan", techs: ["Firebase", "Supabase", "AppWrite", "Render", "Vercel"] },
  { name: "Tools & Design", color: "yellow", techs: ["Git", "VS Code", "Figma"] },
]

export interface Certificate {
  title: string
  issuer: string
  date: string
}

export const certificates: Certificate[] = [
  { title: "Introduction to Data Science", issuer: "Cisco Networking Academy", date: "March 2025" },
  { title: "C++ Essentials 1", issuer: "Cisco Networking Academy", date: "June 2025" },
]

export interface Hackathon {
  title: string
  achievement: string
  project?: string
  date: string
}

export const hackathons: Hackathon[] = [
  {
    title: "Clash of the Coders, WVSU | CICT",
    achievement: "2nd Place",
    project: "ExpenseEase - a mobile budgeting app",
    date: "2022",
  },
  {
    title: "Hacktheon Sejong International University Student Cybersecurity Competition",
    achievement: "Participant",
    date: "2024",
  },
  {
    title: "Westnovation Hackathon, WVSU | CICT",
    achievement: "Finalist",
    project: "Cervis - a mobile based app for pap smear analysis using hybrid deep learning model",
    date: "2025",
  },
]

export const academicHonors = [{ title: "Silver Academic Awardee", date: "2023 - 2025" }]

export interface Affiliation {
  name: string
  description: string
  date: string
}

export const affiliations: Affiliation[] = [
  {
    name: "WVSU-CIPHER",
    description: "Computing Innovations and Programming Hub for Education and Research",
    date: "2024 - 2025",
  },
  {
    name: "CYB:ORG",
    description: "Cyb Robotics Organization",
    date: "2023 - 2024",
  },
]

export const contact = {
  email: "johnpaulsapasap27@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/john-paul-sapasap-1a21542b3/",
    label: "john-paul-sapasap-1a21542b3",
  },
  github: {
    url: "https://github.com/jayyy404",
    label: "jayyy404",
  },
  location: "Iloilo City, Philippines",
}

export const navItems = [
  { id: "experience", label: "Experience", short: "Exp" },
  { id: "skills", label: "Skills", short: "Skills" },
  { id: "achievements", label: "Achievements", short: "Awards" },
  { id: "contacts", label: "Contacts", short: "Contact" },
] as const

export const roles = ["Software Developer", "AI Enthusiast", "Mobile & Web Developer", "Computer Vision Tinkerer"]
