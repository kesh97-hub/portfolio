import React, { useEffect, useRef } from "react";
import Paper from '@mui/material/Paper';

import "./ExperienceItem.css"
import { experienceProps } from "./Experience";
import { delay, motion, useScroll, useTransform } from "framer-motion";


function ExperienceItem(props: experienceProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "0.8 1"] 
    });

    const translateProgress = useTransform(scrollYProgress, [0, 1], [250, 0]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                translateX: translateProgress,
                opacity: opacityProgress,
            }}
        >
            <Paper 
                className="experienceItem"
                sx={{
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: '#222222',
                    bgcolor: '#101010',
                    color: '#DDDDDD'
                }}
                elevation={24}
                square={false}
            >
                <div className="experienceItemHeader">
                    {/* <img className="experienceItemHeaderImage" src={props.experience.imageSrc} alt="Company Logo"></img> */}
                    <h2 className="experienceItemCompanyName">{props.experience.companyName}</h2> 
                    <p className="experienceItemLocation">{props.experience.location}</p>
                </div>
                <div className="experienceItemSubHeader">
                    <h3 className="experienceItemPosition">{props.experience.position}</h3>
                    <p className="experienceItemDate">{props.experience.startDateMonth} {props.experience.startDateYear} - {props.experience.endDateMonth ? props.experience.endDateMonth : "Present"} {props.experience.endDateYear ? props.experience.endDateYear : ""}</p>
                </div>
                <div className="experienceItemDescription">
                    <ul className="experienceItemDescriptionList">
                        {props.experience.description?.map((desc, index) => (
                            <li className="experienceItemDescriptionListItem" key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </Paper>
        </motion.div>
    )
}

export default ExperienceItem;