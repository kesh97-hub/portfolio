import SkillCard from "./SkillCard";

import "./SkillGrid.css";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { skills } from "./SkillsData";

function SkillGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const mainControls = useAnimation()
    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls]);

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0 },
                visible: { 
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                    }
                }
            }}
            initial="hidden"
            animate={mainControls}
            className="SkillGridCard"
        >
            {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill}/>
            ))}
        </motion.div>
        
    )
};

export default SkillGrid;