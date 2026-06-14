class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) return n;

        const dp: number[] = new Array(n + 1).fill(0);

        // No. of ways to reach step 1
        dp[1] = 1;
        // No. of ways to reach step 2
        dp[2] = 2;

        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }
}
