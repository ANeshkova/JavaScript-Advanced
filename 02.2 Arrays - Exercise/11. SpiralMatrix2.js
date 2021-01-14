function spiralMatrix2(rows, cols) {

    function inRange(value, maxValue) {
        return 0 <= value && value < maxValue;
    }

    let rowDirs = [0, +1, 0, -1];
    let colDirs = [+1, 0, -1, 0];
    let dir = 0;
    let row = 0;
    let col = 0;
    let matrix = [];

    for (let i = 0; i < rows; ++i) {
        matrix[i] = new Array(cols).fill(null);
    }

    for (let i = 0; i < rows * cols; ++i) {
        matrix[row][col] = i + 1;
        let nextRow = row + rowDirs[dir];
        let nextCol = col + colDirs[dir];

        if (!inRange(nextRow, rows) || !inRange(nextCol, cols) || matrix[nextRow][nextCol]) {
            dir += 1;
            dir %= 4;
        }

        row += rowDirs[dir];
        col += colDirs[dir];
    }

    for (let line of matrix) {
        console.log(line.join(" "));
    }
}

spiralMatrix2(3, 3);
