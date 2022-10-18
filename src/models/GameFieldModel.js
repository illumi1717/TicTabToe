class GameField {
    constructor() {
        this.field = [
            ['', '', ''], 
            ['', '', ''], 
            ['', '', '']
        ];

        this.fieldWindows = [];
    }

    updateField(rowId, colId, state) {
        this.field[rowId][colId] = state;
    }

    setFieldWindows(fieldWindows) {
        this.fieldWindows = fieldWindows
    }

    getFieldWindows() {
        return this.fieldWindows;
    }

    getMatrixField() {
        return this.field;
    }

    getRows() {
        return this.field;
    }

    getColumns() {
        let columns = [];

        for (let i = 0; i < 3; i++) {
            let column = [];
            for (let j = 0; j < 3; j++) {
                column.push(this.field[j][i]);
            }
            columns.push(column);
        }

        return columns;
    }

    getDiagonals() {
        let firstDiagonal = [this.field[0][0], this.field[1][1], this.field[2][2]];
        let secondDiagonal = [this.field[2][0], this.field[1][1], this.field[0][2]];

        return [firstDiagonal, secondDiagonal];
    }

    clearField() {
        this.field = [
            ['', '', ''], 
            ['', '', ''], 
            ['', '', '']
        ];
    }
}

export default new GameField()