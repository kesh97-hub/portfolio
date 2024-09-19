import axios from "axios";
import { getUserContestRankingQuery } from "./StatQueries";

export async function fetchLeetcodeData(username: string): Promise<any> {
    try {
      const response = await axios.post('https://leetcode.com/graphql', {
        getUserContestRankingQuery,
        variables: { username }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error fetching GraphQL data:', error);
      throw error;
    }
  }