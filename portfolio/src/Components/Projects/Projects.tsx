import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";

import { projectsData } from "./ProjectData";
import "./Projects.css"

function Projects() {
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["0 1", "1 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const bodyRef = useRef(null)
    const isInView = useInView(bodyRef);
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div className="projectsContainer">
            <motion.div
                className="projectsHeader"
                ref={headerRef}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
            >
                <h1 className="projectsHeaderText">P</h1>
                <h1 className="projectsHeaderText">R</h1>
                <h1 className="projectsHeaderText">O</h1>
                <h1 className="projectsHeaderText">J</h1>
                <h1 className="projectsHeaderText">E</h1>
                <h1 className="projectsHeaderText">C</h1>
                <h1 className="projectsHeaderText">T</h1>
                <h1 className="projectsHeaderText">S</h1>
            </motion.div>
            <motion.div
                className="projectsBody"
                ref={bodyRef}
                variants={{
                    "hidden": {
                        opacity: 0,
                    },
                    "visible": {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.5,
                        }
                    }
                }}
                initial="hidden"
                animate={mainControls}
            >
                { projectsData.map((proj, index) => (
                    <ProjectCard key={index} project={proj}/>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects;