import { SiOracle } from 'react-icons/si'

export type Experience = {
    id: number;
    companyLogo?: JSX.Element;
    companyName: string;
    location?: string;
    position: string;
    team?: string;
    startDateMonth: string;
    startDateYear: string;
    endDateMonth?: string;
    endDateYear?: string;
    description?: string[];
    awards?: Award[],
};


export type Award = {
    name: string,
    description: string,
}


export const experiences: Experience[] = [
    {
        id: 1,
        companyLogo: <SiOracle color="#F80000" className="companyLogo"/>,
        companyName: "Oracle",
        location: "Bengaluru, India",
        position: "Senior Application Developer",
        team: "Fusion Advanced Pricing",
        startDateMonth: "February",
        startDateYear: "2022",
        endDateMonth: "June",
        endDateYear: "2023",
        description: [
            "Developed a robust archival system using PL/SQL, leading to a significant 40% reduction in the size of active database tables.",
            "Designed and implemented secure pricing delta APIs using Spring boot for order feeder systems to consume changes in prices of 80,000+ products.",
            "Partnered with the DB performance team to enhance query efficiency, reducing load time from over 4 hours to under 3 hours during heavy load for transferring pricing deltas from SaaS to PaaS platforms."
        ],
        awards: [
            {
                name: "Support Hero Award FY23Q1",
                description: "Received Quarterly Excellence Support Hero Award at Oracle for providing comprehensive support documentation to Fusion Order Management users and resolving bugs post-go-live."
            }
        ]
    },
    {
        id: 2,
        companyLogo: <SiOracle color="#F80000" className="companyLogo"/>,
        companyName: "Oracle",
        position: "Application Developer",
        location: "Bengaluru, India",
        team: "Fusion Advanced Pricing",
        startDateMonth: "June",
        startDateYear: "2019",
        endDateMonth: "February",
        endDateYear: "2022",
        description: [
            "Implemented repricing feature in Oracle Fusion Order Management, enhancing order processing efficiency and accuracy of 100,000+ orders from external order feeder systems.",
            "Spearheaded the transition from Oracle E-Business Suite to Oracle Fusion, overseeing and implementing over 20 features in the Fusion Advanced Pricing application.",
            "Developed a full stack application with Oracle JET and Spring Boot to seamlessly capture and analyze Fusion pricing payloads and web services, cutting testing and debugging time by 50%."
        ],
        awards: [
            {
                name:"Rookie of the Year FY21",
                description: "Honored with the Oracle Applications Lab ERP Rookie of the Year Award for FY21 for delivering mission-critical solutions as a member of the Fusion Pricing team."
            }
        ]
    }
]
