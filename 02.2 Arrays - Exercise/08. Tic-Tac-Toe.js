function ticTacToe(input) {

    let matrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let counter = 0;
    let winner = 0;

    for (const movies of input) {

        let tokens = movies.split(' ');

        let row = Number(tokens[0]);
        let col = Number(tokens[1]);

        if (counter % 2 == 0) {
            if (matrix[row][col] == false) {
                matrix[row][col] = 'X'
            } else {
                console.log('This place is already taken. Please choose another!');
                counter--;
            }
        } else {
            if (matrix[row][col] == false) {
                matrix[row][col] = 'O'
            } else {
                console.log('This place is already taken. Please choose another!');
                counter--;
            }
        }

        counter++;

        if (counter == 9) {
            break;
        }

        if (row == 0) {
            if (col == 0) {
                if (matrix[row][col] == matrix[row][col + 1]
                    && matrix[row][col] == matrix[row][col + 2]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row + 1][col]
                    && matrix[row][col] == matrix[row + 2][col]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row + 1][col + 1]
                    && matrix[row][col] == matrix[row + 2][col + 2]) {
                    winner = matrix[row][col];
                    break;
                }
            } else if (col == 1) {
                if (matrix[row][col] == matrix[row][col + 1]
                    && matrix[row][col] == matrix[row][col - 1]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row + 1][col]
                    && matrix[row][col] == matrix[row + 2][col]) {
                    winner = matrix[row][col];
                    break;
                }
            } else if (col == 2) {
                if (matrix[row][col] == matrix[row][col - 1]
                    && matrix[row][col] == matrix[row][col - 2]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row + 1][col]
                    && matrix[row][col] == matrix[row + 2][col]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row + 1][col - 1]
                    && matrix[row][col] == matrix[row + 2][col - 2]) {
                    winner = matrix[row][col];
                    break;
                }
            }
        } else if (row == 1) {
            if (col == 0) {
                if (matrix[row][col] == matrix[row - 1][col]
                    && matrix[row][col] == matrix[row + 1][col]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row][col + 1]
                    && matrix[row][col] == matrix[row][col + 2]) {
                    winner = matrix[row][col];
                    break;
                }
            } else if (col == 1) {
                if (matrix[row][col] == matrix[row][col + 1]
                    && matrix[row][col] == matrix[row][col - 1]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col]
                    && matrix[row][col] == matrix[row + 1][col]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col - 1]
                    && matrix[row][col] == matrix[row + 1][col + 1]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col + 1]
                    && matrix[row][col] == matrix[row + 1][col - 1]) {
                    winner = matrix[row][col];
                    break;
                }
            } else if (col == 2) {
                if (matrix[row][col] == matrix[row][col - 1]
                    && matrix[row][col] == matrix[row][col - 2]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col]
                    && matrix[row][col] == matrix[row + 1][col]) {
                    winner = matrix[row][col];
                    break;
                }
            }
        } else if (row == 2) {
            if (col == 0) {
                if (matrix[row][col] == matrix[row][col + 1]
                    && matrix[row][col] == matrix[row][col + 2]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col]
                    && matrix[row][col] == matrix[row - 2][col]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col + 1]
                    && matrix[row][col] == matrix[row - 2][col + 2]) {
                    winner = matrix[row][col];
                    break;
                }
            } else if (col == 1) {
                if (matrix[row][col] == matrix[row][col + 1]
                    && matrix[row][col] == matrix[row][col - 1]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col]
                    && matrix[row][col] == matrix[row - 2][col]) {
                    winner = matrix[row][col];
                    break;
                }
            } else if (col == 2) {
                if (matrix[row][col] == matrix[row][col - 1]
                    && matrix[row][col] == matrix[row][col - 2]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col]
                    && matrix[row][col] == matrix[row - 2][col]) {
                    winner = matrix[row][col];
                    break;
                }

                if (matrix[row][col] == matrix[row - 1][col - 1]
                    && matrix[row][col] == matrix[row - 2][col - 2]) {
                    winner = matrix[row][col];
                    break;
                }
            }
        }
    }

    if (winner == 0) {
        console.log("The game ended! Nobody wins :(");
    } else if (winner == 'X') {
        console.log("Player X wins!");
    } else if (winner == 'O') {
        console.log("Player O wins!");
    }

    for (const arr of matrix) {
        console.log(arr.join('\t'));
    }
}

ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);
