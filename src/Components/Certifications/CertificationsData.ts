export type Certification = {
    id: number,
    name: string,
    url: string,
    source: string,
    date?: string,
    offeredBy: string,
}

export const certificationsData: Certification[] = [
    {
        id: 1,
        name: "Python Project for Data Engineering",
        url: "https://coursera.org/share/0dd0492c323ee1f9c6e05e56830042be",
        source: "Coursera",
        offeredBy: "IBM",
        date: "July 19, 2023",
    },
    {
        id: 2,
        name: "Python for Data Science, AI & Development",
        url: "https://coursera.org/share/35e09a61bec9366260db94c16d73d81a",
        source: "Coursera",
        offeredBy: "IBM",
        date: "July 13, 2023",
    },
    {
        id: 3,
        name: "Introduction to Data Engineering",
        url: "https://coursera.org/share/228ae24ad6f329532f9d08e2de5f3ad9",
        source: "Coursera",
        offeredBy: "IBM",
        date: "July 6, 2023",
    },
    {
        id: 4,
        name: "Google Cloud Big Data and Machine Learning Fundamentals",
        url: "https://coursera.org/share/3070a8890ff6c71782023133ef59af6b",
        source: "Coursera",
        offeredBy: "Google Cloud",
        date: "December 18, 2022",
    }
]
    