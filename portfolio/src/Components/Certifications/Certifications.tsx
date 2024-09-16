import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import CertificationsItem from "./CertificationsItem";

import { certificationsData } from "./CertificationsData";
import "./Certifications.css"

function Certifications() {
    const headerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: headerRef,
        offset: ["0 1", '1 1']
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const bodyRef = useRef(null);
    const isInView = useInView(bodyRef);
    const mainControls = useAnimation();
    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const certifications = certificationsData;
    
    return (
        <div className="certificationsContainer">
            <motion.div 
                ref={headerRef}
                className="certificationsHeader"
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
            >
                <h1 className="certificationsHeaderText">C</h1>
                <h1 className="certificationsHeaderText">E</h1>
                <h1 className="certificationsHeaderText">R</h1>
                <h1 className="certificationsHeaderText">T</h1>
                <h1 className="certificationsHeaderText">I</h1>
                <h1 className="certificationsHeaderText">F</h1>
                <h1 className="certificationsHeaderText">I</h1>
                <h1 className="certificationsHeaderText">C</h1>
                <h1 className="certificationsHeaderText">A</h1>
                <h1 className="certificationsHeaderText">T</h1>
                <h1 className="certificationsHeaderText">E</h1>
                {/* <h1 className="certificationsHeaderText">O</h1>
                <h1 className="certificationsHeaderText">N</h1> */}
                <h1 className="certificationsHeaderText">S</h1>
            </motion.div>
            <motion.div
                className="certificationsBody"
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
                { certifications.map((certification, index) => (
                    <CertificationsItem key={index} certification={certification}/>
                ))}
            </motion.div>
        </div>
    )
};

export default Certifications;