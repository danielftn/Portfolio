import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import python from "@/public/Python.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Calgary",
    location: "Calgary, AB",
    description:
      "Currently a Software Engineering student at University of Calgary",
    icon: React.createElement(LuGraduationCap),
    date: "September 2022 - Present",
  },
  {
    title: "ICT Cordinator",
    location: "Calgary, AB",
    description: 
      "Coordinated and supported various ICT projects for BrainSTEM Alliance, including website redesign and CRM implementation. Collaborated with Product and Data Analyst on data collection and entry.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
  {
    title: "Coding Instructor",
    location: "Calgary, AB",
    description:
      "Led coding classes for over 20 children aged 4-17, fostering interest in Computer Science and guiding them in exploring foundational programming concepts.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024",
  },
  {
    title: "Earls Bankers Hall",
    location: "Calgary, AB",
    description:
      "Back-of-House Kitchen Team Member responsible for efficiently washing and restacking dishes and cutlery to maintain readiness for customer demand, while effectively communicating with the head chef during peak hours.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - April 2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "E-commerce Website",
    description:
      "Developed an e-commerce website using React, Javascript, CSS, and Python, integrating an API to manage product data and user transactions. The site also featured a secure login system, restricting product access to registered users.",
       tags: ["React", "JavaScript", "CSS", "Python"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Art Museum Database",
    description:
      "Developed an application for an art museum using MySQL and Python to manage an art museum database, featuring an admin interface for SQL command execution, a data entry interface for updating art data, and a browsing interface with a multi-level menu for data lookup. ",
       tags: ["Python", "MySQL"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Flight Management Program",
    description:
      "Designed a C++ program that reads data from a file, allowing users to manage passengers, view information, save updates, display a seat map, and terminate the program. Utilized classes, vectors, and linked lists for efficient operation.",
    tags: ["C++"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Handheld Retro Video Game Console",
    description:
      "Developed a retro video game, 'Brick Breaker,' using C++ and an Arduino microcontroller, with a 3D console design created in Autodesk software.",
    tags: ["C++" , "Autodesk", "Arduino"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Mini Indoor Garden ",
    description:
      "Developed an automated indoor gardening system using C++ and an Arduino microcontroller, utilizing sensors to monitor soil moisture and light levels, with automated watering and LED lighting for optimal plant care.",
    tags: ["C++" , "Autodesk", "Arduino"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Java",
  "Assembly",
  "Framer Motion",

] as const;