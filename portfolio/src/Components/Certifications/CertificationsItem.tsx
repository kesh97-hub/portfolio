import { Card } from "@mui/material";
import { PiCertificate } from "react-icons/pi";


import { Certification } from "./CertificationsData";
import "./CertificationsItem.css"
import { motion } from "framer-motion";

interface certificationProps {
    certification: Certification;
}

function CertificationsItem(props: certificationProps) {
    return (
        <motion.div
            key={props.certification.id}
            variants={{
                "hidden": { opacity: 0, x:150 },
                "visible": { opacity: 1, x: 0 }
            }}
        >
            <Card
                className="certificationsItemContainer"
                sx={{
                    borderRadius: 4,
                    border: '1px solid',
                    borderColor: '#222222',
                    bgcolor: '#101010',
                    color: '#FFFFFF'
                }}
            >
                <div className="certificationsItemHeader">
                    <p>{props.certification.offeredBy}</p>
                    <p>{props.certification.source}</p>
                </div>
                <div className="certificationsItemBody">
                    <a
                        className="certificationLink"
                        href={props.certification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <PiCertificate className="certificationIcon"/>
                    </a>
                    <h3 className="certificationName">{props.certification.name}</h3>
                    <p className="certificationDateContainer">Issued on: <span className="certificationDate">{props.certification.date}</span></p>
                </div>
            </Card>
        </motion.div>
    )
}

export default CertificationsItem;