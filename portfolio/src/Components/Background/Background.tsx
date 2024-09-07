import React, { useEffect } from "react";
import "./Background.css"

function Background() {
    useEffect(() => {
        generateTriangles(15);
    }, [])

    function generateTriangles(count: number) {
        const container = document.getElementById('background');
        if(container) {
            for(let i = 0; i < count; i++) {
                const triangle = document.createElement('div');
                triangle.className = 'triangle';

                const size = 10;
                triangle.style.borderLeftWidth = `${size / 2}px`;
                triangle.style.borderRightWidth = `${size / 2}px`;
                triangle.style.borderBottomWidth = `${size}px`;

                triangle.style.top = `${Math.random() * 100}%`;
                triangle.style.left = `${Math.random() * 100}%`;

                const randomAngle = Math.random() * 360;
                triangle.style.transform = `rotate(${randomAngle}deg)`;

                container.appendChild(triangle);
            }
        }
    }

    return (
        <div id="background" className="background"></div>
    )
}

export default Background;