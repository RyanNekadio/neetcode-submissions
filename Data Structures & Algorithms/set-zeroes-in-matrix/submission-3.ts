class Solution {
    setZeroes(matrix: number[][]): void {
        const rowLength: number = matrix.length;
        const colLength: number = matrix[0].length;

        let firstRowZero: boolean = false;
        let firstColZero: boolean = false;

        // Step 1: Check if first row has a zero
        for (let j = 0; j < colLength; j++) {
            if (matrix[0][j] === 0) firstRowZero = true;
        }

        // Step 2: Check if first column has a zero
        for (let i = 0; i < rowLength; i++) {
            if (matrix[i][0] === 0) firstColZero = true;
        }

        // Step 3: Use first row/col as markers
        for (let i = 1; i < rowLength; i++) {
            for (let j = 1; j < colLength; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        // Step 4: Zero out cells based on markers
        for (let i = 1; i < rowLength; i++) {
            for (let j = 1; j < colLength; j++) {
                if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }

        // Step 5: Zero out first row if needed
        if (firstRowZero) {
            for (let j = 0; j < colLength; j++) {
                matrix[0][j] = 0;
            }
        }

        // Step 6: Zero out first column if needed
        if (firstColZero) {
            for (let i = 0; i < rowLength; i++) {
                matrix[i][0] = 0;
            }
        }
    }
}
