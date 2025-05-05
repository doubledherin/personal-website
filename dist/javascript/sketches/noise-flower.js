// the value of radius is directly proportional to how wide
// the 'flower' opens. It oscillates between 0 and the window height/2
let radius = 1;

let bloomDirection = "out";

// the bloom velocity controls the speed at which the flower blooms, then withers, then blooms...
let bloomVelocity = 0.65;

let rotation = 24.0;
let rotationIncrement = 0.1;
let r = 255;
let rIncrement = 1;
let g = 128;
let gIncrement = 1;
let b = 128;
let bIncrement = 1;
let opacityIncrement = 1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  noFill();

  // we don't need to declare opacity as a global variable
  // because it's a built-in p5.js variable
  opacity = 255;
}

function draw() {
  stroke(r, g, b, opacity);

  beginShape();
  for (let i = 0; i <= 360; i++) {
    const nx = i / 40;
    const ny = frameCount / 320;

    // The noise function can take 1, 2, or 3 parameters, signifying x, y, and z coordinates of the
    // Perlin noise spatial dimensions. The noise function returns a value between 0 and 1.
    let noiseFactor = noise(nx, ny);

    // noiseFactor is what gives the flower its semi-random, unusual shapes.
    // if noiseFactor is 1, the 'flower' would just be circular
    let x = width / 2 + radius * cos(i) * noiseFactor;
    let y = height / 2 + radius * sin(i) * noiseFactor;
    vertex(x, y);
    rotate(PI / rotation);
  }
  endShape(CLOSE);

  toggleBlooming();
  updateRGBA();
  rotation += rotationIncrement;
}

// The flower blooms 'out' until the radius is greater than the
// vertical middle of the canvas.
// Then it blooms 'in' until the radius becomes less than zero,
// then 'out' again
function toggleBlooming() {
  if (radius > 0 && radius < height / 2) {
    bloomDirection === "out"
      ? (radius += bloomVelocity)
      : (radius -= bloomVelocity);
  } else if (radius > height / 2) {
    bloomDirection = "in";
    radius = height / 2 - bloomVelocity;
  } else {
    // radius < 0
    bloomDirection = "out";
    radius = bloomVelocity;
  }
}

function updateRGBA() {
  if (r > 255) {
    r = -rIncrement;
  }
  if (g > 255) {
    g = -gIncrement;
  }
  if (b > 255) {
    b = -bIncrement;
  }
  r += rIncrement;
  g += gIncrement;
  b += bIncrement;

  // Changing the opacity gives a more interesting, tulle-like quality
  // to the flower
  if (opacity === 0) {
    opacity = 255;
  } else {
    opacity -= opacityIncrement;
  }
}
