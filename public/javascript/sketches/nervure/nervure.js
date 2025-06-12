let particles = [];
const num = 10000;
let d;
let headingSlider, rotationAngleSlider, sensorAngleSlider, sensorDistanceSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for (let i = 0; i < num; i++) {
    particles.push(new Particle());
  }
  d = pixelDensity();
}

function keyPressed() {
  if (key === "s") {
    saveGif("nervure", 5);
  }
}

function draw() {
  background(10, 10);
  loadPixels();
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}
