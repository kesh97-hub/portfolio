import React, { useRef, useEffect } from "react";
import Paper from '@mui/material/Paper';
import { motion, useScroll, useTransform } from "framer-motion";

import "./Experience.css"
import ExperienceItem from "./ExperienceItem";

export type Experience = {
    id: number,
    imageSrc?: string,
    companyName: string,
    location?: string,
    position: string,
    team?: string,
    startDateMonth: string,
    startDateYear: string,
    endDateMonth?: string,
    endDateYear?: string,
    description?: string[]
};

export interface experienceProps {
    experience: Experience;
}

function Experience() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.5])
    const opacityProgress = useTransform(scrollYProgress, [0.2, 1], [0, 1])

    const experiences: Experience[] = [
        {
            id: 1,
            imageSrc: "",
            companyName: "Oracle",
            location: "Bengaluru, India",
            position: "Senior Application Developer",
            team: "Fusion Advanced Pricing",
            startDateMonth: "February",
            startDateYear: "2022",
            endDateMonth: "June",
            endDateYear: "2023",
            description: [
                "Developed a robust archival system using PL/SQL, leading to a significant 40% reduction in the size of active database tables.",
                "Designed and implemented secure pricing delta APIs using Spring boot for order feeder systems to consume changes in prices of 80,000+ products.",
                "Partnered with the DB performance team to enhance query efficiency, reducing load time from over 4 hours to under 3 hours during heavy load for transferring pricing deltas from SaaS to PaaS platforms."
            ],
        },
        {
            id: 2,
            imageSrc: "",
            companyName: "Oracle",
            position: "Application Developer",
            location: "Bengaluru, India",
            team: "Fusion Advanced Pricing",
            startDateMonth: "June",
            startDateYear: "2019",
            endDateMonth: "February",
            endDateYear: "2022",
            description: [
                "Implemented repricing feature in Oracle Fusion Order Management, enhancing order processing efficiency and accuracy of 100,000+ orders from external order feeder systems.",
                "Spearheaded the transition from Oracle E-Business Suite to Oracle Fusion, overseeing and implementing over 20 features in the Fusion Advanced Pricing application.",
                "Developed a full stack application with Oracle JET and Spring Boot to seamlessly capture and analyze Fusion pricing payloads and web services, cutting testing and debugging time by 50%."
            ],
        }
    ]

    return (
        <div className="experienceContainer">
            <motion.div 
                ref={ref}
                className="experienceHeader"
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
            >
                <h1 className="experienceHeaderText">E</h1>
                <h1 className="experienceHeaderText">X</h1>
                <h1 className="experienceHeaderText">P</h1>
                <h1 className="experienceHeaderText">E</h1>
                <h1 className="experienceHeaderText">R</h1>
                <h1 className="experienceHeaderText">I</h1>
                <h1 className="experienceHeaderText">E</h1>
                <h1 className="experienceHeaderText">N</h1>
                <h1 className="experienceHeaderText">C</h1>
                <h1 className="experienceHeaderText">E</h1>
            </motion.div>
            <motion.div className="experienceBody">
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp}></ExperienceItem>
                ))}
            </motion.div>
        </div>
    )
}

export default Experience;