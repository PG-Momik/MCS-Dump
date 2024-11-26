function printSolution(solution) {
    for (let i = 0; i < solution.length; i++) {
        let row = '';
        for (let j = 0; j < solution[i].length; j++) {
            row += solution[i][j] + ' ';
        }
        console.log(row);
    }
}

function isSafe(maze, x, y, solution) {
    return x >= 0 && x < maze.length && y >= 0 && y < maze[0].length && maze[x][y] === 1 && solution[x][y] === 0;
}

function solveMaze(maze, x, y, solution) {
    if (x === maze.length - 1 && y === maze[0].length - 1) {
        solution[x][y] = 1;
        return true;
    }

    if (isSafe(maze, x, y, solution)) {
        solution[x][y] = 1;

        if (solveMaze(maze, x + 1, y, solution)) {
            return true;
        }

        if (solveMaze(maze, x, y + 1, solution)) {
            return true;
        }

        // Move Up
        if (solveMaze(maze, x - 1, y, solution)) {
            return true;
        }

        if (solveMaze(maze, x, y - 1, solution)) {
            return true;
        }

        solution[x][y] = 0;
        return false;
    }

    return false;
}

function ratInMaze(maze) {
    let solution = new Array(maze.length).fill(null).map(() => new Array(maze[0].length).fill(0));

    if (solveMaze(maze, 0, 0, solution)) {
        printSolution(solution);
    } else {
        console.log("No path found!");
    }
}

let maze = [
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
];

// Call the function
ratInMaze(maze);
_01_Recursion
_02_Sorting
_03_Searching
_04_Tree
_05_Backtracking