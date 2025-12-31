let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 240, 219);
  x = 100;
  y = 100;
}

function draw() {
  fill("#E56E4B");
  strokeWeight(2);
  ellipse(x, y, 100, 100);
  x += 1;
}
