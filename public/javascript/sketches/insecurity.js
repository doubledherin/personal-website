let grid;
let w;
let h;
let m = 50; // modulus
let shape;

function setup() {
  w = windowWidth - (windowWidth % m);
  h = windowHeight - (windowHeight % m);
  createCanvas(min(w, h), min(w, h));
  grid = new Grid(width, height, m);
  background(255, 240, 219);
  grid.showShapes();
  noLoop();
}

function draw() {}

class Shape {
  constructor(t, x, y, m) {
    this.color = random([
      "#313715",
      "#d16014",
      "#939f5c",
      "#bbce8a",
      "#e2f9b8",
    ]);
    this.type = t;
    this.x = x;
    this.y = y;
    this.m = m;
    this.dotSize = m / 20;
    this.fillType = "solid"; // TO DO: random(['solid', 'singledot', 'tripledot'])
  }
  show() {
    if (this.fillType === "solid") {
      fill(this.color);
    } else {
      noFill();
      stroke(3);
    }
    switch (this.type) {
      case "left":
        triangle(
          this.x,
          this.y,
          this.x + this.m,
          this.y - this.m,
          this.x + this.m,
          this.y + this.m,
        );
        break;
      case "right":
        triangle(
          this.x,
          this.y,
          this.x - this.m,
          this.y - this.m,
          this.x - this.m,
          this.y + this.m,
        );
        break;
      case "up":
        triangle(
          this.x,
          this.y,
          this.x - this.m,
          this.y + this.m,
          this.x + this.m,
          this.y + this.m,
        );
        break;
      case "down":
        triangle(
          this.x,
          this.y,
          this.x - this.m,
          this.y - this.m,
          this.x + this.m,
          this.y - this.m,
        );
        break;
      case "hourglass":
        triangle(
          this.x,
          this.y,
          this.x - this.m,
          this.y + this.m,
          this.x + this.m,
          this.y + this.m,
        );
        triangle(
          this.x,
          this.y,
          this.x - this.m,
          this.y - this.m,
          this.x + this.m,
          this.y - this.m,
        );
        break;
      case "diamond":
        triangle(
          this.x,
          this.y - this.m,
          this.x - this.m,
          this.y,
          this.x + this.m,
          this.y,
        );
        triangle(
          this.x,
          this.y + this.m,
          this.x - this.m,
          this.y,
          this.x + this.m,
          this.y,
        );
        break;
    }
  }
}

class Grid {
  constructor(w, h, m) {
    this.m = m;
    this.numRows = w / m;
    this.numCols = h / m;
    this.dots = [];
    this.shapes = [];
    this.generateDots();
    this.generateShapes();
    this.showDots();
    this.showShapes();
  }

  generateDots() {
    for (let i = 1; i < this.numRows; i++) {
      for (let j = 1; j < this.numCols; j++) {
        const x = i * m;
        const y = j * m;
        this.dots.push({ x, y });
      }
    }
  }

  generateShapes() {
    for (const dot of this.dots) {
      // skip a third of the time
      if (random() > 0.25) {
        this.shapes.push(
          new Shape(
            random(["left", "right", "up", "down", "hourglass", "diamond"]),
            dot.x,
            dot.y,
            m,
          ),
        );
      }
    }
  }

  isLeftEdge(x, y) {
    return x === m;
  }

  isRightEdge(x, y) {
    return x === m * this.numRows;
  }

  isTopEdge(x, y) {
    return y === m;
  }

  isBottomEdge(x, y) {
    return y === m * this.numCols;
  }

  showDots() {
    for (const dot of this.dots) {
      fill(0);
      circle(dot.x, dot.y, 3);
    }
  }

  showShapes() {
    for (const shape of this.shapes) {
      shape.show();
    }
  }
}
