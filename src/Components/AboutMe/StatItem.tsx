import { statItem } from "./StatData"
import "./StatItem.css"

interface StatItemProps {
    statItem: statItem
}

function StatItem(props: StatItemProps) {
    var { key, value } = props.statItem;

    if(key.includes("Percentage")) {
        value = value.toString() + '%';
    }
    else if(typeof value === 'number'){
        value = Math.round(value).toLocaleString();
    }
    console.log(key, value);

    return (
        <div className="stat">
            <p className="statKey">{key}</p>
            <p className="statValue">{value}</p>
        </div>
    )
}

export default StatItem;