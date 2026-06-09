class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1: string, num2: string): string {
        if (num1 === "0" || num2 === "0") return "0";

        const result = new Array(num1.length + num2.length).fill(0);

        for (let i = num1.length - 1; i >= 0; i--) {
            for (let j = num2.length - 1; j >= 0; j--) {
                //"0".charCodeAt(0)
                const digit1 = num1.charCodeAt(i) - "0".charCodeAt(0);
                const digit2 = num2.charCodeAt(j) - "0".charCodeAt(0);

                const product = digit1 * digit2;
                const sum = product + result[i + j + 1];

                //follows standard paper-form multiplication
                //% retains only the last digit of sum
                result[i + j + 1] = sum % 10;

                //handles the 1 carry over
                // / removes the last digit of sum
                // hence, this is essentiall result[i + j] += 1
                result [i + j] += Math.floor(sum / 10);
            }
        }

        let start = 0;
        while (start < result.length && result[start] === 0) {
            start++;
        }

        return result.slice(start).join("") || "0";
    }
}
