import React, { useRef } from "react";
import ProficiencyChart from "./ProficiencyChart";

import "./Skills.css"
import SkillGrid from "./SkillGrid";
import { motion, useScroll, useTransform } from "framer-motion";

function Skills() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1])
    const opacityProgress = useTransform(scrollYProgress, [0.2, 1], [0, 1])

    return (
        <div className="skillsContainer">
            <motion.div 
                ref={ref}
                className="skillsHeader"
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
            >
                <h1 className="skillsHeaderText">T</h1>
                <h1 className="skillsHeaderText">E</h1>
                <h1 className="skillsHeaderText">C</h1>
                <h1 className="skillsHeaderText">H</h1>
                <h1 className="skillsHeaderText">&nbsp;</h1>
                <h1 className="skillsHeaderText">S</h1>
                <h1 className="skillsHeaderText">K</h1>
                <h1 className="skillsHeaderText">I</h1>
                <h1 className="skillsHeaderText">L</h1>
                <h1 className="skillsHeaderText">L</h1>
                <h1 className="skillsHeaderText">S</h1>
            </motion.div>
            <div className="skillsBody">
                <ProficiencyChart/>
                <SkillGrid/>
            </div>
        </div>
        
    )
}

export default Skills;