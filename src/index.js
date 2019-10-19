module.exports = function solveSudoku(matrix) {
    for (let col = 0; col < 9; col++) {
        for (let row = 0; row < 9; row++) {
            if (matrix[col][row] == 0) {
                for (let num = 1; num < 10; num++) {
                    if (checkValidation(matrix, col, row, num)) {
                        matrix[col][row] = num;
                        if (solveSudoku(matrix)) {
                            return matrix;
                        } else {
                            matrix[col][row] = 0;
                        }
                    }
                }
            return false;
            }
        }
    }
    return matrix;
}
function checkValidation(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        let rowBox = Math.floor(row / 3) * 3 + Math.floor(i / 3);
        let colBox = Math.floor(col / 3) * 3 + i % 3;
        if (board[row][i] == num || board[i][col] == num || board[rowBox][colBox] == num) {
            return false;
        }
    }
    return true;
}