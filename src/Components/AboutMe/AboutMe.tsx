import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiDropbox } from 'react-icons/si';
import { MdAlternateEmail, MdLocationPin } from "react-icons/md";
import { motion, useInView, useAnimation } from "framer-motion";

import './AboutMe.css'

import Badge from "../Badge/Badge";

function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView, mainControls]);

    return (
        <div className="aboutMeContainer">
            <div className="introContainer" ref={ref}>
                <motion.h1
                    variants={{
                        hidden: {opacity: 0, x: -75},
                        visible: {opacity: 1, x: 0},
                    }}
                    initial = "hidden"
                    animate = {mainControls}
                    transition= {{
                        duration: 0.5,
                        delay: 0.2
                    }}
                >
                    Hello, I'm Keshav Kumar.
                </motion.h1>
                <motion.p
                    variants={{
                        hidden: {opacity: 0, x: -75},
                        visible: {opacity: 1, x: 0},
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 0.5,
                        delay: 0.4
                    }}
                >
                    A passionate software developer interested in developing data-intensive products and AI.
                </motion.p>
            </div>
            <motion.div 
                className="profileBadgeContainer"
                variants={{
                    hidden: {opacity: 0, y: -200},
                    visible: {opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.8,
                    delay: 0.2,
                }}
            >
                <Badge imageSrc={"/BadgePic.jpg"} nameAbbreviation={"KK"}/>
                <div className="smLinkContainer">
                    <a
                        className="personalLinks"
                        href="mailto:keshavk1808@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#D44638'}}
                    >
                        <MdAlternateEmail/>
                    </a>
                    <a 
                        className="personalLinks"
                        href="https://www.linkedin.com/in/keshkuma"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0077B5'}}
                    >
                            <FaLinkedin/>
                    </a>

                    <a 
                        className="personalLinks"
                        href="https://www.github.com/kesh97-hub"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffff'}}
                    >
                            <FaGithub/>
                    </a>

                    <a 
                        className="personalLinks"
                        href="https://www.leetcode.com/u/kesh97/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#FFA116'}}
                    >
                            <SiLeetcode/>
                    </a>

                    <a 
                        className="personalLinks"
                        href="https://www.dropbox.com/scl/fi/8dcr4vbqnz2r3uxyi02px/Keshav_Resume.pdf?rlkey=oqzeog9my72vu0je4bloqjcnq&st=hv1i4s8n&dl=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0061FF' }}
                    >
                            <SiDropbox/>
                    </a>
                </div>
                <div className="locationContainer">
                    <MdLocationPin className="locationIcon"/>
                    <p className="locationText">Buffalo, NY</p>
                </div>
            </motion.div>
        </div>
    )
}

export default AboutMe;