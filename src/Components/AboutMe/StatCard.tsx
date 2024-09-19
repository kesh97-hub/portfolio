import { Card } from "@mui/material";

import "./StatCard.css";
import { stat } from "./StatData";
import StatItem from "./StatItem";


interface statProps {
    stat: stat
}

function StatCard(props: statProps) {
    return (
        <Card 
            className="statsCard"
            sx={{
                borderRadius: 4,
                border: '1px solid',
                borderColor: '#222222',
                bgcolor: '#303030',
                color: '#FFFFFF',
            }}
        >
            <div className="statsHeader">{props.stat.name}</div>
            <div className="statsBody">
                {props.stat.stats.map((statItem, index) => (
                    <StatItem key={index} statItem={statItem} />
                ))}
            </div>
            
        </Card>
    )
};

export default StatCard;