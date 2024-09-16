export type Project = {
    id: number;
    projectName: string;
    startMonth: string;
    startYear: string;
    endMonth?: string;
    endYear?: string;
    techStack?: string[];
    shortDescription?: string;
    description?: string[];
    githubLink?: string;
    collaborators?: Collaborator[]
}

export type Collaborator = {
    name: string,
    avatar?: string,
    linkedInUrl: string,
}

export const projectsData: Project[] = [
    {
        id: 1,
        projectName: "Dense Crowd Counting Model",
        startMonth: "May",
        startYear: "2024",
        endMonth: "August",
        endYear: "2024",
        techStack: ["Python", "PyTorch", "opencv", "Swin-Transformers", "U-Net"],
        shortDescription: "Addressed real-world crowd management challenges, enabling better safety and event monitoring through precise density estimation.",
        description: [
            "Developed a Swin-WNet model combining Swin Transformers and W-Net for accurate crowd counting.",
            "Achieved competitive results on UCF-QNRF dataset with an MAE of 260.48, performing on par with models like M-SFANet.",
            "Utilized a custom loss function combining MAE and BCE, improving accuracy in head localization and overall crowd count."
        ],
        githubLink: "https://github.com/kesh97-hub/dense-crowd-count.git",
        collaborators: [
            {
                name: "Sumana Madhireddy",
                linkedInUrl: "https://www.linkedin.com/in/sumana-madhireddy-b8aa49186/",
                avatar: "/Sumana_Avatar_Pic.jpeg",
            },
        ],
    },
    {
        id: 2,
        projectName: "Fake News Detection App",
        startMonth: "February",
        startYear: "2024",
        endMonth: "May",
        endYear: "2024",
        techStack: [
            "Python",
            "PyTorch",
            "NLP",
            "LLM",
            "Transformers",
            "React.js"
        ],
        shortDescription: "The project tackles the challenge of detecting fake news articles in the era of widespread digital content and social media, where misinformation can easily spread.",
        description: [
            "Developed a cutting-edge architecture using BERT LLM, LSTM, and CNN for fake news detection.", 
            "Achieved state-of-the-art performance of 85.17% classification accuracy.",
            "Built a full stack application using React.js to interact with the AI model."
        ],
        githubLink: "https://github.com/kesh97-hub/fakenewsdetector_ui.git",
        collaborators: [
            {
                name: "Gokul Ram Subramani",
                linkedInUrl: "https://www.linkedin.com/in/gokul-ram-s/",
                avatar: "/Gokul_Avatar_Pic.jpeg",
            },
            {
                name: "Tharun Gangaraju",
                linkedInUrl: "https://www.linkedin.com/in/tharun-gangaraju-b81b521b0/",
                avatar: "/Tharun_Avatar_Pic.jpeg",
            }
        ],
    },
    {
        id: 3,
        projectName: "Online Bookstore Database Design",
        startMonth: "February",
        startYear: "2024",
        endMonth: "May",
        endYear: "2024",
        techStack: ["Python", "PostgreSQL", "System Design", "React.js"],
        shortDescription: "The project addresses the challenges faced by online bookstores in efficiently managing, storing, and retrieving vast volumes of book-related data through the implementation of a robust Database Management System (DBMS).",
        description: [
            "Designed a DBMS for online bookstores to improve data organization, inventory management, and order processing.",
	        "Implemented indexing techniques like B-tree indexing to enhance query performance and reduce response times.",
	        "Developed a React-based user interface for executing SQL queries and visualizing results for analytical purposes.",
        ],
        githubLink: "https://github.com/kesh97-hub/Online_Bookstore.git",
        collaborators: [
            {
                name: "Sneha Talapala",
                linkedInUrl: "https://www.linkedin.com/in/sneha-talapala/",
                avatar: "/Sneha_Avatar_Pic.jpeg",
            },
            {
                name: "Dhanush Babu Ramadoss",
                linkedInUrl: "https://www.linkedin.com/in/dhanush-babu-a23426130/",
                avatar: "/Dhanush_Avatar_Pic.jpeg",
            }
        ],
    },
    {
        id: 4,
        projectName: "Laptop Price Prediction and Recommendation App",
        startMonth: "September",
        startYear: "2023",
        endMonth: "December",
        endYear: "2023",
        techStack: ["Python", "ML", "Data Analysis", "scikit-learn", "React.js"],
        shortDescription: "The project focuses on developing a robust and accurate laptop price prediction model to help consumers make informed decisions in a diverse and competitive laptop market.",
        description: [
            "Cleaned and analyzed an extensive Kaggle dataset of laptops, selecting key features for accurate prediction.",
            "Utilized multiple regression models (Linear, Ridge, KNN, SVR, Decision Tree, Random Forest, XGBoost), with XGBoost yielding the best results after hyperparameter tuning using Optuna.",
            "Developed a Python + Flask backend with APIs for price prediction and chart data, integrated with a React.js frontend to provide a seamless user experience.",

        ],
        githubLink: "https://github.com/kesh97-hub/LaptopPricePredictor_server.git",
        collaborators: [
            {
                name: "Dhanush Babu Ramadoss",
                linkedInUrl: "https://www.linkedin.com/in/dhanush-babu-a23426130/",
                avatar: "/Dhanush_Avatar_Pic.jpeg",
            },
            {
                name: "Kishore Nithin Sridar",
                linkedInUrl: "https://www.linkedin.com/in/kishore-nithin-sridhar/",
                avatar: "/Kishore_Avatar_Pic.jpeg",
            }
        ],
    },
    
]