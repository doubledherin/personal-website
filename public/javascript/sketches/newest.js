let circle1x, circle1y, circle2x, circle2y, circle3x, circle3y, buffer;
const circleSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 240, 219);
  circle1x = circleSize;
  circle1y = circleSize;
  circle2x = circleSize;
  circle2y = circleSize * 2;
  circle3x = circleSize;
  circle3y = circleSize * 3;
  buffer = circleSize;
}

function draw() {
  push();
  fill("#E56E4B");
  strokeWeight(2);
  ellipse(circle1x, circle1y, circleSize, circleSize);
  if (circle1y == circleSize && circle1x < width - circleSize) {
    // Top edge: move right
    circle1x += 3;
  } else if (circle1x >= width - circleSize && circle1y < height - circleSize) {
    // Right edge: move down
    circle1y += 3;
  } else if (circle1y >= height - circleSize && circle1x > circleSize) {
    // Bottom edge: move left
    circle1x -= 3;
  } else if (circle1x == circleSize && circle1y > circleSize) {
    // Left edge: move up
    circle1y -= 3;
  }
  pop();

  push();
  fill("#895129");
  strokeWeight(2);
  ellipse(circle2x, circle2y, circleSize, circleSize);
  if (circle2y == circleSize * 2 && circle2x < width - circleSize * 2) {
    // Top edge: move right
    circle2x += 3;
  } else if (
    circle2x >= width - circleSize * 2 &&
    circle2y < height - circleSize * 2
  ) {
    // Right edge: move down
    circle2y += 3;
  } else if (circle2y >= height - circleSize * 2 && circle2x > circleSize * 2) {
    // Bottom edge: move left
    circle2x -= 3;
  } else if (circle2x <= circleSize * 2 && circle2y > circleSize * 2) {
    // Left edge: move up
    circle2y -= 3;
  }

  pop();

  push();
  fill("#E5C744");
  strokeWeight(2);
  ellipse(circle3x, circle3y, circleSize, circleSize);
  if (circle3y == circleSize * 3 && circle3x < width - circleSize * 3) {
    // Top edge: move right
    circle3x += 3;
  } else if (
    circle3x >= width - circleSize * 3 &&
    circle3y < height - circleSize * 3
  ) {
    // Right edge: move down
    circle3y += 3;
  } else if (circle3y >= height - circleSize * 3 && circle3x > circleSize * 3) {
    // Bottom edge: move left
    circle3x -= 3;
  } else if (circle3x <= circleSize * 3 && circle3y > circleSize * 3) {
    // Left edge: move up
    circle3y -= 3;
  }

  pop();
}
