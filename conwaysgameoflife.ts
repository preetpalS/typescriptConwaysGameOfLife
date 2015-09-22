"use strict";
var gameCanvas = <HTMLCanvasElement>document.getElementById("gameCanvas");

// Glider gun example
var a = true;
var d = false;
var firstInitializationArray = [
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, a, d, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, a, a, d, d, d, d, d, d, a, a, d, d, d, d, d, d, d, d, d, d, d, d, a, a, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, a, d, d, d, a, d, d, d, d, a, a, d, d, d, d, d, d, d, d, d, d, d, d, a, a, d, d, d],
    [d, a, a, d, d, d, d, d, d, d, d, a, d, d, d, d, d, a, d, d, d, a, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, a, a, d, d, d, d, d, d, d, d, a, d, d, d, a, d, a, a, d, d, d, d, a, d, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, a, d, d, d, d, d, a, d, d, d, d, d, d, d, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, a, d, d, d, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, a, a, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
    [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d]
]

// Blinker
/*
var firstInitializationArray = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, true, true, true, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
];
*/

function init() {
    var game = new ConwaysGameOfLife(firstInitializationArray, gameCanvas, "#000000", "#ffffff");
    game.run();
}

class ConwaysGameOfLife {
    private arrayA: boolean[][];
    private arrayB: boolean[][];
    private isArrayATheCurrentArray: boolean;
    private numberOfRows: number;
    private numberOfColumns: number;

    constructor(initializationArray: boolean[][], private gameCanvas: HTMLCanvasElement, private aliveCellColor: string, private deadCellColor: string) {
        if (initializationArray.length < 2 && initializationArray[0].length < 2) {
            throw new RangeError();
        } else {
            var isInitializationArrayRectangleP = true;
            this.numberOfRows = firstInitializationArray.length;
            this.numberOfColumns = firstInitializationArray[0].length;

            for (var i = 0; i < this.numberOfRows; ++i) {
                if (initializationArray[i].length !== this.numberOfColumns) {
                    isInitializationArrayRectangleP = false;
                    break;
                }
            }

            if (!isInitializationArrayRectangleP) {
                throw new RangeError();
            } else {
                this.arrayA = <boolean[][]>JSON.parse(JSON.stringify(initializationArray));
                this.arrayB = <boolean[][]>JSON.parse(JSON.stringify(this.arrayA));
                this.isArrayATheCurrentArray = true;
                this.gameCanvas.height = 10 * this.numberOfRows;
                this.gameCanvas.width = 10 * this.numberOfColumns;
            }
        }
    }

    private isPointXYInRangeAndValid(x: number, y: number): boolean {
        if (x < 0 || x >= this.numberOfRows) {
            return false;
        } else {
            if (y < 0 || y >= this.numberOfColumns) {
                return false;
            } else {
                return true;
            }
        }
    }
    private getNumberOfAliveElementsAroundPointXYInCurrentArray(x: number, y: number): number {
        // x and y are 0-index based where x represents the row index, y represents the column index
        var count = 0;
        var currentArray = this.isArrayATheCurrentArray ? this.arrayA : this.arrayB;

        for (var i = (x - 1); i < (x + 2); ++i) {
            for (var j = (y - 1); j < (y + 2); ++j) {
                if (this.isPointXYInRangeAndValid(i, j)) {
                    if (!(x === i && y === j)) {
                        count += currentArray[i][j] ? 1 : 0;
                    }
                }
            }
        }

        return count;
    }

    private updateNonCurrentArrayAndSetAsCurrentArray() {
        var currentArray = this.isArrayATheCurrentArray ? this.arrayA : this.arrayB;
        var nonCurrentArray = (!this.isArrayATheCurrentArray) ? this.arrayA : this.arrayB;

        for (var i = 0; i < this.numberOfRows; ++i) {
            for (var j = 0; j < this.numberOfColumns; ++j) {
                var numberOfAliveNeighbours = this.getNumberOfAliveElementsAroundPointXYInCurrentArray(i, j);
                var isCellAlive = currentArray[i][j];

                if (isCellAlive) {
                    if (numberOfAliveNeighbours < 2) {
                        nonCurrentArray[i][j] = false;

                    } else if (numberOfAliveNeighbours < 4) {
                        nonCurrentArray[i][j] = true;
                    } else {
                        nonCurrentArray[i][j] = false;
                    }
                } else {
                    if (numberOfAliveNeighbours === 3) {
                        nonCurrentArray[i][j] = true;
                    } else {
                        nonCurrentArray[i][j] = false;
                    }
                }
            }
        }

        this.isArrayATheCurrentArray = !(this.isArrayATheCurrentArray);
    }

    private drawCell(x: number, y: number, width: number, height: number, color: string) {
        var ctx = gameCanvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    public drawCurrentArrayOnCanvas() {
        var currentArray = this.isArrayATheCurrentArray ? this.arrayA : this.arrayB;
        var boardHeight = gameCanvas.height;
        var boardWidth = gameCanvas.width;
        var boardPieceWidth = boardWidth / this.numberOfColumns;
        var boardPieceHeight = boardHeight / this.numberOfRows;

        var y = 0;
        for (var i = 0; i < this.numberOfRows; ++i) {
            var x = 0;

            for (var j = 0; j < this.numberOfColumns; ++j) {
                var currentColor = (currentArray[i][j]) ? this.aliveCellColor : this.deadCellColor;
                this.drawCell(x, y, boardPieceWidth, boardPieceHeight, currentColor);
                x += boardPieceWidth;
            }

            y += boardPieceHeight;
        }
    }

    private gameLoop() {
        this.drawCurrentArrayOnCanvas();
        this.updateNonCurrentArrayAndSetAsCurrentArray();
    }

    public run() {
        setInterval(() => this.gameLoop(), 500);
    }
};

init();