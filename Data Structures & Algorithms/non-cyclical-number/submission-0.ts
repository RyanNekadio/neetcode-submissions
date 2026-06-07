class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    sumOfSquares = (n: number): number => {
        let sum = 0;

        while (n > 0) {
            const lastDigit = n % 10;

            sum+= lastDigit**2;
            n = Math.floor(n / 10);
        }

        return sum;
    }

    isHappy(n: number): boolean {
        const seen = new Set<number>();

        while (n !== 1 && !seen.has(n)) {
            seen.add(n);

            n = this.sumOfSquares(n);
        }

        return n === 1;
    }
}
