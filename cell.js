function Cell(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]
    this.visited = false;

    this.checkNeighbors = function() {
        var neighbors = [];

        var top = grid[index(i, j - 1)];
        var right = grid[index(i + 1, j)];
        var bottom = grid[index(i, j + 1)];
        var left = grid[index(i - 1, j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            var r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }

    }

    this.highlight = function() {
        var x = this.i * cwh;
        var y = this.j * cwh;
        noStroke();
        //fill('rgba(108,113,196,0.9)');
        fill('rgba(240,230,140,0.9)'); // khaki
        rect(x, y, cwh, cwh);
    }

    this.show = function() {
        var x = this.i * cwh;
        var y = this.j * cwh;
        stroke(255);
        //strokeWeight(1);
        if (this.walls[0]) {
            line(x, y, x + cwh, y);
        } //top line
        if (this.walls[1]) {
            line(x + cwh, y, x + cwh, y + cwh);
        } //right line
        if (this.walls[2]) {
            line(x + cwh, y + cwh, x, y + cwh);
        } //bottom line
        if (this.walls[3]) {
            line(x, y + cwh, x, y);
        } //left line
        if (this.visited) {
            noStroke();
            //fill('rgba(255,55,55,0.5)');
            //fill('rgba(38,139,196,0.1)');
            //fill('rgba(0,255,0,0.4)');
            fill('rgba(0,255,255,0.4)');
            rect(x, y, cwh, cwh);
        }
        for (var i = 0; i < stack.length; i++) {
            if (stack[i] === this) {
                push();
                noStroke();
                //fill('rgba(220,20,60,0.6)');
                fill(255, 0, 255, 100);
                //fill('rgba(51,51,51,0.2'); //dark orange
                rect(x, y, cwh, cwh);
                pop();
            }
        }
    }

}
