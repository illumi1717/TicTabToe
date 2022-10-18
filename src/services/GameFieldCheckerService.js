export default class GameFieldCheckerService {
    static stringifyCoombinations(rows, cols, diagonals) {
        let allCombinations = [];

        let stringifyRows = rows.map(row => row.join(''));
        let stringifyCols = cols.map(col => col.join(''));
        let stringifyDiagonals = diagonals.map(diagonal => diagonal.join(''));

        allCombinations.push(...stringifyRows, ...stringifyCols, ...stringifyDiagonals);

        return allCombinations;
    }

    static checkForVictory(rows, cols, diagonals) {
        const allCombinations = GameFieldCheckerService.stringifyCoombinations(rows, cols, diagonals);
        let winner = null;

        allCombinations.forEach(combination => {
            if (combination.length === 3) {
                let combinationWithoutX = combination.replaceAll('X', '');
                if (combinationWithoutX.length === 3) {
                    winner = 'O';
                } else if (combinationWithoutX.length === 0) {
                    winner = 'X';
                }
            }
        });

        return winner;
    }

    static getFreeBoxes(field) {
        const freeBoxes = [];
        field.forEach((row, rid) => {
            row.forEach((box, cil) => {
                if (box === '') {
                    freeBoxes.push([rid, cil]);
                }
            })
        });
        return freeBoxes;
    }
}