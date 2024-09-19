import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutMe.css"
import { useEffect, useRef, useState } from "react";
import { Card } from "@mui/material";
import StatCard from "./StatCard";
import { getStats, stat, stats } from "./StatData";

function AboutMe() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [2, 1])
    const opacityProgress = useTransform(scrollYProgress, [0.2, 1], [0, 1])
    
    // const [stats, setStats] = useState<stat[]>([]);
    // const [loading, setLoading] = useState<boolean>(true);
    // const [error, setError] = useState<string | null>(null);

    // useEffect(() => {
    //     // Define an async function inside useEffect
    //     const fetchData = async () => {
    //     try {
    //         const data = await getStats();
    //         setStats(data || []); // Ensure default value in case of undefined
    //     } catch (error: any) {
    //         console.error('Error fetching data:', error);
    //         setError('Failed to load data');
    //     } finally {
    //         setLoading(false);
    //     }
    //     };

    //     // Call the async function
    //     fetchData();
    // }, []);

    return (
        
        <div className="aboutMeContainer">
            <motion.div 
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
                className="aboutMeHeader"
            >
                <h1 className="aboutMeHeaderText">A</h1>
                <h1 className="aboutMeHeaderText">B</h1>
                <h1 className="aboutMeHeaderText">O</h1>
                <h1 className="aboutMeHeaderText">U</h1>
                <h1 className="aboutMeHeaderText">T</h1>
                <h1 className="aboutMeHeaderText">&nbsp;</h1>
                <h1 className="aboutMeHeaderText">M</h1>
                <h1 className="aboutMeHeaderText">E</h1>
            </motion.div>
            <motion.div className="aboutMeBody">
                <Card
                    sx={{
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: '#222222',
                        bgcolor: '#101010',
                        color: '#FFFFFF'
                    }}
                    className="aboutMeCard"
                >
                    <p>With 4 years of experience in software development, I’ve honed my skills in front-end, back-end, System Design and AI. Over the years, I’ve worked on a mix of projects, from full stack development to creating complex archival systems, which has given me a solid grip on both coding and design.</p>

                    <p>Currently, I’m expanding my knowledge and expertise through my MS studies, focusing on Artificial Intelligence and Natural language processing. This academic journey is enriching my understanding of machine learning and data processing and enhancing my ability to tackle complex technical challenges.</p>

                    <p>I’m super passionate about building data-driven products that use AI and love exploring new tech and innovative solutions. When I’m not coding or studying, you’ll probably find me out for a run or catching up on anime.</p>

                    <p>Feel free to explore my portfolio to see my work and get in touch if you’d like to discuss opportunities or collaborate on exciting projects!</p>

                    <div className="statCards">
                        {
                            stats.map((stat, index) => (
                                <StatCard key={index} stat={stat}/>
                            ))
                        }
                    </div>
                </Card>
                
                
            </motion.div>
        </div>
    )
}

export default AboutMe;