const particleCount = 10000;
let particles = [];
let pixelDensityValue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  pixelDensityValue = pixelDensity();

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  loadPixels();
  background(10, 25, 100, 2);
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}
