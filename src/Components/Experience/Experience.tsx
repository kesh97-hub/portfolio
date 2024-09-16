import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import "./Experience.css"
import ExperienceItem from "./ExperienceItem";
import { Experience, experiences } from "./ExperienceData";

function Experiences() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1])
    const opacityProgress = useTransform(scrollYProgress, [0.2, 1], [0, 1])

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

export default Experiences;