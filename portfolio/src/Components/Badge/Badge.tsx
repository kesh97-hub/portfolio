import React from "react";
import './Badge.css'

interface badgeProps {
    imageSrc: string;
    nameAbbreviation: string;
}

function Badge({imageSrc, nameAbbreviation} : badgeProps) {
    return (
        <div className="badgeContainer">
            <div className="badge">
                <div className="badgeImageContainer">
                    <img src={imageSrc} alt={nameAbbreviation} className="badgeImage"/>
                </div>
                <div className="abbreviation">
                    {nameAbbreviation}
                </div>
            </div>
        </div>
    )
}

export default Badge;