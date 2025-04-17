let grid;
let cellSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#f5f5dd"); // beige
  noLoop();
}

function draw() {
  grid = new Grid(width, height, cellSize);
  grid.showShapes();
}

// Returns a shape consisting of 1-4 of the following shape combinations:

// Triangle (dotted, 3-dotted, or solid)
// Diamond (dotted)
// Hourglass (solid)

class Shape {
  constructor(x, y, cellSize) {
    const babyBlue = "#a6c9b8";
    const brickRed = "#c04657";
    const mustard = "#ffbf00";
    this.colors = [babyBlue, brickRed, mustard];
    this.x = x;
    this.y = y;
    this.cellSize = cellSize;
    this.numRows = 8;
    this.dotSize = 4;
    this.padding = this.dotSize / 2;
    this.numElements = random([1, 2, 3, 4]);
  }

  draw() {
    stroke("#fff0db");
    strokeWeight(2);
    switch (this.numElements) {
      case 1:
        this.drawOneElement();
        break;
      case 2:
        this.drawTwoElements();
        break;
      case 3:
        this.drawThreeElements();
        break;
      case 4:
        this.drawFourElements();
        break;
    }
  }

  drawOneElement() {
    const r = random();
    const color = random(this.colors);
    const direction = random(["up", "right", "down", "left"]);
    const element = random([
      "filledTriangle",
      "triangleOfDots",
      "hourglass",
      "diamond",
    ]);
    switch (element) {
      case "filledTriangle":
        this.filledTriangle(this.x, this.y, direction, color);
        break;
      case "triangleOfDots":
        this.triangleOfDots(this.x, this.y, direction, color);
        break;
      case "hourglass":
        this.hourglass(color);
        break;
      case "diamond":
        this.diamond(this.x, this.y, color);
        break;
    }
  }

  drawTwoElements() {
    const element = random([
      "diamondWithTriangle",
      "hourglassWithTriangleToTheLeft",
      "hourglassWithDiamondOnRight",
    ]);
    switch (element) {
      case "diamondWithTriangle":
        this.diamondWithTriangle();
        break;
      case "hourglassWithTriangleToTheLeft":
        this.hourglassWithTriangleToTheLeft();
        break;
      case "hourglassWithDiamondOnRight":
        this.hourglassWithDiamondOnRight(random(this.colors));
        break;
    }
  }

  drawThreeElements() {
    const element = random([
      "hourglassWithTwoTrianglesOnLeft",
      "hourglassWithTwoTriangleOnRight",
      "hourglassWithTriangleOnLeftAndDiamondOnRight",
    ]);
    const hourglassColor = random(this.colors);
    switch (element) {
      case "hourglassWithTwoTrianglesOnLeft":
        this.hourglassWithTwoTrianglesOnLeft(hourglassColor);
        break;
      case "hourglassWithTwoTriangleOnRight":
        this.hourglassWithTwoTriangleOnRight(hourglassColor);
        break;
      case "hourglassWithTriangleOnLeftAndDiamondOnRight":
        this.hourglassWithTriangleOnLeftAndDiamondOnRight(hourglassColor);
        break;
    }
  }

  drawFourElements() {
    const element = random([
      "hourglassWithTwoTrianglesOnLeftAndDiamondOnRight",
      "hourglassWithTwoTriangleOnRightAndDiamondOnLeft",
    ]);
    const hourglassColor = random(this.colors);
    switch (element) {
      case "hourglassWithTwoTrianglesOnLeftAndDiamondOnRight":
        this.hourglassWithTwoTrianglesOnLeftAndDiamondOnRight(hourglassColor);
        break;
      case "hourglassWithTwoTriangleOnRightAndDiamondOnLeft":
        this.hourglassWithTwoTriangleOnRightAndDiamondOnLeft(hourglassColor);
        break;
    }
  }

  filledTriangle(x, y, direction, color) {
    fill(color);
    switch (direction) {
      case "left":
        triangle(
          x,
          y,
          x + this.cellSize,
          y - this.cellSize,
          x + this.cellSize,
          y + this.cellSize,
        );
        break;
      case "right":
        triangle(
          x,
          y,
          x - this.cellSize,
          y - this.cellSize,
          x - this.cellSize,
          y + this.cellSize,
        );
        break;
      case "down":
        triangle(
          x,
          y,
          x - this.cellSize,
          y - this.cellSize,
          x + this.cellSize,
          y - this.cellSize,
        );
        break;
      case "up":
        triangle(
          x,
          y,
          x - this.cellSize,
          y + this.cellSize,
          x + this.cellSize,
          y + this.cellSize,
        );
        break;
    }
  }

  triangleOfDots(x, y, direction, dotColor) {
    const angleMap = {
      up: 0,
      right: HALF_PI, // 90°
      down: PI, // 180°
      left: -HALF_PI, // -90°
    };
    const angle = angleMap[direction];

    push();
    noStroke();
    translate(x, y);
    rotate(angle);
    translate(-x, -y);

    fill(dotColor);
    for (let i = 0; i < this.numRows; i++) {
      let numDotsInRow = i * 2 + 1;
      const widthOfAllDotsInRow =
        numDotsInRow * (this.dotSize + this.padding) - this.padding;
      const xCoordinateOfFirstDotInRow =
        x - widthOfAllDotsInRow / 2 + this.padding;
      for (let j = 0; j < numDotsInRow; j++) {
        const dotX =
          xCoordinateOfFirstDotInRow + j * (this.dotSize + this.padding);
        const dotY = y + i * (this.dotSize + this.padding) + this.padding * 2;
        ellipse(dotX, dotY, this.dotSize);
      }
    }
    pop();
  }

  diamond(x, y, diamondColor) {
    push();
    noStroke();
    this.triangleOfDots(x, y - this.cellSize, "up", diamondColor);
    this.triangleOfDots(x, y + this.cellSize, "down", diamondColor);
    pop();
  }

  hourglass(color) {
    this.filledTriangle(this.x, this.y, "down", color);
    this.filledTriangle(this.x, this.y, "up", color);
  }

  hourglassWithDiamondOnRight(hourglassColor) {
    this.hourglass(hourglassColor);
    const diamondColor = random(
      this.colors.filter((c) => c !== hourglassColor),
    );
    this.diamond(this.x + this.cellSize, this.y, diamondColor);
  }

  hourglassWithDiamondToTheLeft(hourglassColor) {
    this.hourglass(hourglassColor);
    const diamondColor = random(
      this.colors.filter((c) => c !== hourglassColor),
    );
    this.diamond(this.x - this.cellSize, this.y, diamondColor);
  }

  triangleOfThreeDots(x, y, direction, dotColor) {
    const angleMap = {
      up: 0,
      right: HALF_PI,
      down: PI,
      left: -HALF_PI,
    };
    const angle = angleMap[direction];

    push();
    noStroke();
    translate(x, y);
    rotate(angle);
    translate(-x, -y);
    fill(dotColor);

    const padding = this.dotSize;
    for (let i = 0; i < 6; i++) {
      const num3DotsInRow = i + 1;
      const width3DotsInRow = 3 * this.dotSize;
      const widthOfAllDotsInRow =
        num3DotsInRow * width3DotsInRow + padding * (num3DotsInRow - 1);
      const xCoordinateOfFirstDotInRow =
        x - widthOfAllDotsInRow / 2 + padding / 2;
      for (let j = 0; j < num3DotsInRow; j++) {
        const dotX =
          xCoordinateOfFirstDotInRow + j * (width3DotsInRow + padding);
        const dotY = y + i * (this.dotSize + padding) + padding * 2;
        this.threeDots(dotX, dotY, this.dotSize);
      }
    }

    pop();
  }

  threeDots(dotX, dotY, dotSize) {
    ellipse(dotX, dotY, dotSize);
    ellipse(dotX + dotSize, dotY, dotSize);
    ellipse(dotX + dotSize * 2, dotY, dotSize);
  }

  hourglassWithTwoTrianglesOnLeft(hourglassColor) {
    this.hourglass(hourglassColor);
    const c1 = random(this.colors.filter((c) => c !== hourglassColor));
    this.triangleOfThreeDots(this.x, this.y, "right", c1);
    const c2 = random(
      this.colors.filter((c) => c !== hourglassColor && c !== c1),
    );
    fill(c2);
    triangle(
      this.x - this.cellSize * 2,
      this.y,
      this.x - this.cellSize,
      this.y - this.cellSize,
      this.x - this.cellSize,
      this.y + this.cellSize,
    );
  }

  hourglassWithTwoTriangleOnRight(hourglassColor) {
    this.hourglass(hourglassColor);
    const c1 = random(this.colors.filter((c) => c !== hourglassColor));
    this.triangleOfThreeDots(this.x, this.y, "left", c1);
    const c2 = random(
      this.colors.filter((c) => c !== hourglassColor && c !== c1),
    );
    fill(c2);
    triangle(
      this.x + this.cellSize * 2,
      this.y,
      this.x + this.cellSize,
      this.y - this.cellSize,
      this.x + this.cellSize,
      this.y + this.cellSize,
    );
  }

  hourglassWithTriangleOnLeftAndDiamondOnRight(hourglassColor) {
    const c1 = random(this.colors.filter((c) => c !== hourglassColor));
    this.triangleOfThreeDots(this.x, this.y, "right", c1);
    this.hourglass(hourglassColor);
    const c2 = random(
      this.colors.filter((c) => c !== c1 && c !== hourglassColor),
    );
    this.diamond(this.x + this.cellSize, this.y, c2);
  }

  hourglassWithTwoTrianglesOnLeftAndDiamondOnRight(hourglassColor) {
    this.hourglassWithTwoTrianglesOnLeft(hourglassColor);
    this.hourglassWithDiamondOnRight(hourglassColor);
  }

  hourglassWithTwoTriangleOnRightAndDiamondOnLeft(hourglassColor) {
    this.hourglassWithTwoTriangleOnRight(hourglassColor);
    this.hourglassWithDiamondToTheLeft(hourglassColor);
  }

  diamondWithTriangle() {
    const diamondColor = random(this.colors);
    this.diamond(this.x, this.y, diamondColor);

    // triangle should always be solid when next to a diamond, and a different color from diamond
    const triangleColor = random(this.colors.filter((c) => c !== diamondColor));
    this.filledTriangle(this.x + this.cellSize, this.y, "down", triangleColor);
  }

  hourglassWithTriangleToTheLeft() {
    const hourglassColor = random(this.colors);
    this.hourglass(hourglassColor);
    // since hourglass is always solid, triangle should be dotted
    const c = random(this.colors.filter((c) => c !== hourglassColor));
    strokeWeight(3);
    stroke("#f5f5dd");
    this.filledTriangle(this.x, this.y, "right", c);
    noStroke();
  }
}

class Grid {
  constructor(w, h, cellSize) {
    this.cellSize = cellSize;
    this.numRows = h / cellSize;
    this.numCols = w / cellSize;
    this.dots = [];
    this.shapes = [];

    this.generateDotsAndNexuses();
    this.generateShapes();
  }

  // Populates this.dots with objects representing dots, soome of which can be "nexuses"
  generateDotsAndNexuses() {
    for (let rowNumber = 1; rowNumber < this.numRows; rowNumber++) {
      for (let columnNumber = 1; columnNumber < this.numCols; columnNumber++) {
        const x = columnNumber * this.cellSize;
        const y = rowNumber * this.cellSize;

        const isNexus = this.canBeNexus(x, y) && random() < 0.6;
        this.dots.push({ x, y, isNexus });
      }
    }
  }

  canBeNexus(x, y) {
    const surroundingDots = [
      ...this.getDotsAbove(x, y),
      ...this.getDotsLeft(x, y),
      ...this.getDotsTopRight(x, y),
      ...this.getDotsTopLeft(x, y),
      ...this.getDotsLsTopLeft(x, y),
      ...this.getDotsLsTopRight(x, y),
    ];

    return surroundingDots.filter((d) => d.isNexus).length === 0;
  }

  getDotsAbove(x, y) {
    return this.dots.filter(
      (d) =>
        d.x === x &&
        (d.y === y - this.cellSize || d.y === y - this.cellSize * 2),
    );
  }

  getDotsLeft(x, y) {
    return this.dots.filter(
      (d) =>
        (d.x === x - this.cellSize ||
          d.x === x - this.cellSize * 2 ||
          d.x === x - this.cellSize * 3) &&
        d.y === y,
    );
  }

  getDotsTopRight(x, y) {
    return this.dots.filter(
      (d) =>
        (d.x === x + this.cellSize && d.y === y - this.cellSize) ||
        (d.x === x + this.cellSize * 2 && d.y === y - this.cellSize * 2),
    );
  }

  getDotsTopLeft(x, y) {
    return this.dots.filter(
      (d) =>
        (d.x === x - this.cellSize && d.y === y - this.cellSize) ||
        (d.x === x - this.cellSize * 2 && d.y === y - this.cellSize * 2),
    );
  }

  getDotsLsTopLeft(x, y) {
    return this.dots.filter(
      (d) =>
        (d.x === x - this.cellSize && d.y === y - this.cellSize * 2) ||
        (d.x === x - this.cellSize * 2 && d.y === y - this.cellSize),
    );
  }

  getDotsLsTopRight(x, y) {
    return this.dots.filter(
      (d) =>
        (d.x === x + this.cellSize && d.y === y - this.cellSize * 2) ||
        (d.x === x + this.cellSize * 2 && d.y === y - this.cellSize),
    );
  }

  generateShapes() {
    for (const dot of this.dots) {
      if (dot.isNexus) {
        this.shapes.push(new Shape(dot.x, dot.y, this.cellSize));
      }
    }
  }

  showShapes() {
    for (const shape of this.shapes) {
      shape.draw();
    }
  }

  // Used for developmewnt purposes only
  showDots() {
    for (const dot of this.dots) {
      if (dot.isNexus) {
        // Make nexuses red and bigger
        fill(255, 0, 0);
        noStroke();
        circle(dot.x, dot.y, 5);
      } else {
        // Make non-nexuses black and smaller
        fill(0);
        circle(dot.x, dot.y, 3);
      }
    }
  }
}
