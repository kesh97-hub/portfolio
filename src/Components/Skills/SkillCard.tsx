import React  from "react";
import { Card } from "@mui/material";

import "./SkillCard.css";
import { motion } from "framer-motion";
import { Skill } from "./SkillsData";


export interface skillCardProps {
    skill: Skill;
}

function SkillCard(props: skillCardProps) {
    return (
        <motion.div
            key={props.skill.id}
            variants={{
                "hidden": { opacity: 0, x:-150 },
                "visible": { opacity: 1, x: 0 }
            }}
        >
            <Card 
                className="skillCard"
                sx={{
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: '#222222',
                    bgcolor: '#101010',
                    color: '#DDDDDD',
                    ":hover": {
                        bgcolor: '#151515'
                    }
                }}
            >
                <div className="skillCardIcon">
                    {props.skill.icon}
                </div>
                <div className="skillCardName">
                    {props.skill.name}
                </div>
                
            </Card>
        </motion.div>
    )
}

export default SkillCard;