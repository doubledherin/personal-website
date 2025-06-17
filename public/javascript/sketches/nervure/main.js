const particleCount = 10000;
let particles = [];
let d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  d = pixelDensity();

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
