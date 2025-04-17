let boundingBox, corrois, m, n, sand, sandColor;
let numberOfSandGrains;
let navHeight = 65;

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight - navHeight);
  canvas.parent("home");
  canvas.touchStarted(newVibration);
  canvas.mousePressed(newVibration);
  numberOfSandGrains = max(width, height) * 10;
  sandColor = "#e4d6a7";
  newVibration();
  cursor(HAND);
  loadPixels();
}

function newVibration() {
  setNodeCounts();
  sand = Array.from(
    { length: numberOfSandGrains },
    () => new SandGrain(sandColor),
  );
}

// m and n are used in the chladni function.
// See Chladni plate mathematics here: https://paulbourke.net/geometry/chladni/
function setNodeCounts() {
  const min = 1;
  const max = 50;
  // m is the number of diametric (i.e. linear) nodes on the vibrating plate
  m = floor(random(min, max));
  // n is the number of radial (i.e. circular) nodes on the vibrating plate
  n = floor(random(min, max));

  // prevent m and n from being equal, as the results are uninteresting as a consequence
  while (m === n) {
    n = floor(random(min, max));
  }
}

function addSand() {
  for (let i = 0; i < numberOfSandGrains / 100; i++) {
    sand.push(new SandGrain(sandColor));
  }
}

function swipeSand() {
  const swipeRadius = width / 15;
  const swipeStrength = 5;
  for (let grain of sand) {
    // the distance between the grain of sand and the mouse
    const distance = dist(
      mouseX,
      mouseY,
      grain.currentPosition.x,
      grain.currentPosition.y,
    );

    if (distance < swipeRadius) {
      // the direction to push the grain away from the mouse
      const swipeForce = createVector(
        grain.currentPosition.x - mouseX,
        grain.currentPosition.y - mouseY,
      );
      swipeForce.setMag(swipeStrength);

      // Apply the swipeForce to the grain
      grain.velocity.add(swipeForce);
    }
  }
}

function mouseIsMoving() {
  return mouseX !== pmouseX || mouseY !== pmouseY;
}

function mouseMoved() {
  addSand();
}

function draw() {
  background(0);

  if (mouseIsMoving()) {
    swipeSand();
  }
  for (let grain of sand) {
    grain.update();
    grain.show();
  }
}
