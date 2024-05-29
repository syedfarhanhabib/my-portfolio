import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { SiBackendless } from "react-icons/si";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const skillData = [
    {
        title: "Frontend",
        icon: React.createElement(MdDeveloperMode),
        skills: [
            { skill: "HTML5", percentage: "70%" },
            { skill: "CSS (Tailwind)", percentage: "90%" },
            { skill: "Javascript", percentage: "65%" },
            { skill: "TypeScript", percentage: "75%" },
            { skill: "React.js", percentage: "88%" },
            { skill: "Next.js", percentage: "78%" },
        ]
    },
    {
        title: "Tools",
        icon: React.createElement(SiBackendless),
        skills: [
            { skill: "Git & GitHub", percentage: "70%" },
            { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
            { skill: "Javascript", percentage: "75%" },
            { skill: "React.js", percentage: "88%" },
        ]
    },
    {
        title: "Backend",
        icon: React.createElement(SiBackendless),
        skills: [
            { skill: "Node.js", percentage: "70%" },
            { skill: "Express.js", percentage: "20%" }
        ]
    },
]

export const experiencesData = [
    {
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;