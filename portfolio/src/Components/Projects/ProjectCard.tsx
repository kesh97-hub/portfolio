import { ReactNode, useEffect, useState } from "react";
import { Card, Link } from "@mui/material";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import "./ProjectCard.css";
import { Project } from "./ProjectData";

interface ProjectProps {
    project: Project;
}

function ProjectCard(props: ProjectProps) {
    const [ isFlipped, setIsFlipped ] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    function getNameAbbreviation(name: string): string {
        if(name.split(' ').length <= 1) {
            return name.split(' ')[0][0];
        }
       
        return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
    };

    function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

    return (
        <motion.div
            className="projectCard"
            key={props.project.id}
            variants={{
                "hidden": { opacity: 0, x:-150 },
                "visible": { opacity: 1, x: 0 }
            }}
        >
            <motion.div
                className="projectCardFrontContainer"
                animate={{
                    rotateY: isFlipped ? 180 : 0
                }}
                transition={{
                    duration: 0.6
                }}
            >
                <Card
                    className="projectCardFront"
                    sx={{
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: '#222222',
                        bgcolor: '#101010',
                        color: '#FFFFFF'
                    }}
                >
                    <div className="projectCardFrontHeader">
                        <p className="projectDate">{props.project.startMonth} {props.project.startYear} - {props.project.endMonth ? props.project.endMonth : "Present"} {props.project.endYear ? props.project.endYear : ""}</p>
                        <button className="projectCardFlipButton" onClick={handleFlip}>
                            <FaArrowsRotate className="projectCardFlipButtonIcon"/>
                        </button>
                    </div>
                    <div className="projectCardFrontBody">
                        <h4 className="projectName">{props.project.projectName}</h4>
                        <p className="projectShortDesc">{props.project.shortDescription}</p>
                        <div className="projectTechStack">
                            {props.project.techStack?.map((tech, index) => (
                                <p key={index} className="projectTech">
                                    {tech}
                                    {index < (props.project.techStack?.length ? props.project.techStack?.length - 1 : 0) && <span>&middot;</span>}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="projectCardFrontFooter">
                        <Link
                            href={props.project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#ffffff', fontSize: '2rem' }}
                            className="projectLink"
                        >
                            <FaGithub/>
                        </Link>
                        {/* add collaborators linkedIn profile */}
                        {props.project.collaborators && (
                            <Stack direction="row" spacing={-0.5}>
                                {props.project.collaborators?.map((collaborator, index) => (
                                    <Link 
                                        href={collaborator.linkedInUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="projectCollaboratorLink"
                                        key={index}
                                    >
                                        <Avatar
                                            alt={collaborator.name}
                                            src={collaborator.avatar}
                                            sx={{
                                                width:35,
                                                height:35,
                                                fontSize:14,
                                                bgcolor: stringToColor(collaborator.name),
                                                '& img' : {
                                                    objectFit: "cover",
                                                },
                                            }}
                                        >
                                            {getNameAbbreviation(collaborator.name)}
                                        </Avatar>
                                    </Link>
                                ))}
                            </Stack>
                        )}
                    </div>
                    
                </Card>
            </motion.div>

            <motion.div
                className="projectCardBackContainer"
                animate={{
                    rotateY : isFlipped ? 0 : -180 
                }}
                transition={{
                    duration: 0.6
                }}
            >
                <Card
                    className="projectCardBack"
                    sx={{
                        borderRadius: 4,
                        border: '1px solid',
                        borderColor: '#222222',
                        bgcolor: '#101010',
                        color: '#FFFFFF'
                    }}
                >
                    <div className="projectCardBackHeader">
                        <h3 className="projectCardBackHeaderTitle">Key Features</h3>
                        <button className="projectCardFlipButton" onClick={handleFlip}>
                            <FaArrowsRotate className="projectCardFlipButtonIcon" size={25}/>
                        </button>
                    </div>
                    <div className="projectCardBackBody">
                        <ul className="projectCardDescriptionsList">
                            {props.project.description && props.project.description?.map((desc, index) => (
                                <li className="projectCardDescriptionListItem" key={index}>{desc}</li>
                            ))}
                        </ul>
                        
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
};

export default ProjectCard;