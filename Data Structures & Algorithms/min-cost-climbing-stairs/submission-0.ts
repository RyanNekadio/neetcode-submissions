class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let one: number = 0; // dp[i-1] (previous step)
        let two: number = 0; // dp[i-2] (two steps back)

        for (let i = 2; i <= cost.length; i++ ) {
            const next = Math.min(one + cost[i - 1], two + cost[i - 2]);
            
            // slide window forward
            two = one; // two steps back moves to previous step
            one = next; // previous step moves to the next step
        }
        
        //one is the minimum cost to reach the top
        //whereas two would be the maximum cost
        return one;
    }
}
