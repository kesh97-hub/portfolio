import StatItem from "./StatItem";
import { getUserContestRankingQuery } from "./StatQueries";
import { fetchLeetcodeData } from "./StatServices";

export type statItem = {
    key: string,
    value: number | string,
}

export type stat = {
    name: string,
    stats: statItem[],
}

export const stats: stat[] = [
    {
        name: "Leetcode",
        stats: [
            {
                key: "Rating",
                value: 1738
            },
            {
                key: "Global Rating",
                value: 61015
            },
            {
                key: "Top Percentage",
                value: 10.45
            }
        ]
    },
    {
        name: "Running",
        stats: [
            {
                key: "Fastest 5K",
                value: "27:00 min"
            }
        ]
    }
];





export const getStats = async () => {
    try {
        const data = await fetchLeetcodeData('kesh97')
        const leetcodeRanking = data.userContestRanking

        const leetcodeStats: statItem[] = [
            {
            key: "Rating",
            value: leetcodeRanking.rating
            },
            {
            key: "Global Rating",
            value: leetcodeRanking.globalRanking
            },
            {
            key: "Top Percentage",
            value: leetcodeRanking.topPercentage
            }
        ];

        const runningStats: statItem[] = [
            {
            key: "Fastest 5K",
            value: "27:00 min"
            }
        ];

        const stats: stat[] = [
            {
            name: "Leetcode",
            stats: leetcodeStats
            },
            {
            name: "Running",
            stats: runningStats
            }
        ];
        
        return stats;
    } catch (error: any) {
        console.error('Error fetching data:', error);
    }
}