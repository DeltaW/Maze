var w = 800;
var h = 800;

var cols, rows;
var cwh = 80; //cell width and height
var grid = [];

var current; //current cell being visited

var stack = [];

function setup() {
    createCanvas(w, h);
    //createCanvas(windowWidth, windowHeight);
    cols = floor(width / cwh);
    rows = floor(height / cwh);
    frameRate(10);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    //current = grid[0];
    current = grid[floor(random(0, grid.length))];
    console.log(floor(random(0, grid.length)));
}

function draw() {
    //background('rgb(38,139,196)');
     background('rgb(51,51,51)');
    //background('rgba(65,105,225,0.5)'); //royal blue
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    current.visited = true;
    current.highlight();

    // STEP 1
    var next = current.checkNeighbors();
    if (next) {
        next.visited = true;
        // STEP 2
        stack.push(current);
        // STEP 3
        removeWalls(current, next);
        // STEP 4
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}

function removeWalls(a, b) {
    console.log('removed Walls');
    var x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}
