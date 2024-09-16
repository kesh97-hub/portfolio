import React, { ReactNode } from 'react';
import { DiPython, DiJava, DiJavascript1, DiHtml5, DiCss3, DiDocker, DiGit, DiPostgresql, DiMongodb, DiNodejs, DiReact, DiSpark, DiAws, DiScrum, } from 'react-icons/di';
import { SiTypescript, SiNumpy, SiPytorch, SiScikitlearn, SiPandas, SiOpencv, SiSpring, SiApachehadoop, SiApachekafka, SiOracle, SiJira, SiJson, SiSwagger, SiApachespark } from 'react-icons/si';
import { FaSoap, FaDatabase } from 'react-icons/fa'; 
import { TbFileTypeXml } from "react-icons/tb";

export type Skill = {
    id: number,
    icon: JSX.Element;
    name: string;
}

export const skills: Skill[] = [
    // Languages & Libraries
    { id: 1, icon: <DiPython color="#3776AB" size={60}/>, name: "Python" },
    { id: 2, icon: <DiJava color="#007396" size={60}/>, name: "Java" },
    { id: 3, icon: <FaDatabase color="#F80000" size={50}/>, name: "PL/SQL" }, 
    { id: 4, icon: <DiJavascript1 color="#F7DF1E" size={50}/>, name: "JavaScript" },
    { id: 5, icon: <SiTypescript color="#3178C6" size={50}/>, name: "TypeScript" },
    { id: 6, icon: <DiHtml5 color="#E34F26" size={60}/>, name: "HTML" },
    { id: 7, icon: <DiCss3 color="#1572B6" size={60}/>, name: "CSS" },
    { id: 8, icon: <SiPytorch color="#EE4C2C" size={50}/>, name: "PyTorch" },

    // Databases & Frameworks
    { id: 9, icon: <SiOracle color="#F80000" size={50}/>, name: "Oracle" },
    { id: 10, icon: <DiPostgresql color="#336791" size={60}/>, name: "PostgreSQL" },
    { id: 11, icon: <DiMongodb color="#47A248" size={50}/>, name: "MongoDB" },
    { id: 12, icon: <SiSpring color="#6DB33F" size={40}/>, name: "Spring" },
    { id: 13, icon: <DiNodejs color="#339933" size={60}/>, name: "Node.js" },
    { id: 14, icon: <DiReact color="#61DAFB" size={60}/>, name: "React.js" },
    { id: 15, icon: <SiApachehadoop color="#66CCFF" size={60}/>, name: "Hadoop" },
    { id: 16, icon: <SiApachekafka color="#231F20" size={50}/>, name: "Kafka" },
    { id: 17, icon: <SiApachespark color="#E25A1C" size={50}/>, name: "Spark" },

    // Cloud & Developer Tools
    { id: 18, icon: <DiAws color="#FF9900" size={60}/>, name: "AWS" },
    { id: 19, icon: <SiOracle color="#F80000" size={50}/>, name: "OCI" },
    { id: 20, icon: <DiGit color="#F05032" size={60}/>, name: "Git" },
    { id: 21, icon: <DiDocker color="#2496ED" size={60}/>, name: "Docker" },
    { id: 22, icon: <SiJira color="#0052CC" size={40}/>, name: "JIRA" },
    { id: 23, icon: <DiScrum color="#F8B400" size={60}/>, name: "Agile" },
];