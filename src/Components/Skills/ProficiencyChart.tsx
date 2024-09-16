import React, { useRef } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Card } from "@mui/material";


import "./ProficiencyChart.css";
import { motion, useScroll, useTransform } from "framer-motion";


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

function ProficiencyChart() {    
    const chartData = {
        labels: ['Python', 'Java', 'Javascript', 'SQL', 'Typescript', 'React.js'],
        datasets: [
            {
                label: 'Proficiency',
                data: [8, 7, 5, 7, 5, 6],
                fill: false,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
            },
        ]
    };
    
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
              beginAtZero: true,
              min: 0,
              max: 10,
              ticks: {
                stepSize: 2,
                backdropColor: 'transparent', // Transparent background for tick labels
                color: 'rgba(255, 255, 255, 0.6)',  // White color for tick labels
              },
              angleLines: {
                color: 'rgba(255, 255, 255, 0.2)', // Color of the angle lines
              },
              grid: {
                // circular: true,
                color: 'rgba(255, 255, 255, 0.2)', // Color of grid lines
              },
              pointLabels: {
                font: {
                  size: 14,
                },
                color: '#fff', // White color for point labels
              },
            },
        },
        animation: {
            duration: 2000, // Duration of the animation in milliseconds
            easing: 'easeOutBounce' as const, // Easing function for the animation
        },
        layout : {
            padding: 0
        },
        plugins: {
            legend: {
                labels: {
                    color: '#fff',
                    font: {
                        size: 14
                    }
                }
            }
        }
    }

    const  ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [[0, 1], [1, 1]]
    });

    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1])
    const translateProgress = useTransform(scrollYProgress, [0, 1], [-150, 0])

    return (
        <motion.div
            ref = {ref}
            style={{
                opacity: opacityProgress,
                translateX: translateProgress,
            }}
        >

            <Card 
                className="skillChartCard"
                sx={{
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: '#222222',
                    bgcolor: '#101010',
                    color: '#DDDDDD'
                }}
            >
                <Radar className="skillChart" data={chartData} options={chartOptions}/>
            </Card>
        </motion.div>
    )
};

export default ProficiencyChart;