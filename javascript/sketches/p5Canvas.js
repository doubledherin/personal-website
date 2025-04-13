let boundingBox, corrois, m, n, sand, sandColor
let numberOfSandGrains = 30000
let fontSize
let textAlpha = 0 // Initialize alpha value for text transparency
let textAlpha2 = -100
let fadeSpeed = 2 // Speed at which the text fades in

function preload() {
  carrois = loadFont("fonts/CarroisGothicSC-Regular.ttf")
  raleway = loadFont("fonts/Raleway-VariableFont_wght.ttf")
}

function setup() {
  const canvas = createCanvas(windowWidth, windowHeight)
  canvas.parent("home")

  fontSize = width < 600 ? 50 : width / 14
  sandColor = color(252, 229, 174)
  nameBoundingBox = carrois.textBounds("Wendy Dherin", 0, 0, fontSize)
  titleBoundingBox = raleway.textBounds(
    "full-stack developer. generative artist.",
    0,
    0,
    fontSize / 3
  )
  nameX = width / 2 - nameBoundingBox.w / 2
  nameY = height / 2 - nameBoundingBox.h / 2
  titleX = width / 2 - titleBoundingBox.w / 2
  titleY = nameY + nameBoundingBox.h / 2 + 20
  newVibration()
  cursor(HAND)
  loadPixels()
}

function newVibration() {
  setNodeCounts()
  sand = Array.from(
    { length: numberOfSandGrains },
    () => new SandGrain(sandColor)
  )
}

// m and n are used in the chladni function.
// See Chladni plate mathematics here: https://paulbourke.net/geometry/chladni/
function setNodeCounts() {
  const min = 1
  const max = 50
  // m is the number of diametric (i.e. linear) nodes on the vibrating plate
  m = floor(random(min, max))
  // n is the number of radial (i.e. circular) nodes on the vibrating plate
  n = floor(random(min, max))

  // prevent m and n from being equal, as the results are uninteresting as a consequence
  while (m === n) {
    n = floor(random(min, max))
  }
}

function addSand() {
  for (let i = 0; i < 100; i++) {
    sand.push(new SandGrain(sandColor))
  }
}

function swipeSand() {
  const swipeRadius = width / 15
  const swipeStrength = 5
  for (let grain of sand) {
    // the distance between the grain of sand and the mouse
    const distance = dist(
      mouseX,
      mouseY,
      grain.currentPosition.x,
      grain.currentPosition.y
    )

    if (distance < swipeRadius) {
      // the direction to push the grain away from the mouse
      const swipeForce = createVector(
        grain.currentPosition.x - mouseX,
        grain.currentPosition.y - mouseY
      )
      swipeForce.setMag(swipeStrength)

      // Apply the swipeForce to the grain
      grain.velocity.add(swipeForce)
    }
  }
}

function touchStarted() {
  newVibration()
}

function mousePressed() {
  newVibration()
}

// TO DO: Swipe sand when mouse moves over canvas
function mouseIsMoving() {
  return mouseX !== pmouseX || mouseY !== pmouseY
}

function mouseMoved() {
  addSand()
}

function draw() {
  background(0)

  if (textAlpha < 255) {
    textAlpha += fadeSpeed // Increment alpha value
    textAlpha2 += fadeSpeed
  }

  if (mouseIsMoving()) {
    swipeSand()
  }
  for (let grain of sand) {
    grain.update()
    grain.show()
  }
  push()
  noStroke()
  fill(0, 185)
  const rectWidth = max(nameBoundingBox.w, titleBoundingBox.w)
  rect(
    width / 2 - rectWidth / 2,
    height / 2 - 150,
    900,
    200,
    100,
    100,
    100,
    100
  )
  pop()
  push()
  // noStroke()
  strokeWeight(2)
  stroke(sandColor)
  fill(0)
  // fill(252, 229, 174, textAlpha)
  textFont(carrois)
  textSize(fontSize)
  text("wendy dherin", nameX, nameY)
  pop()
  push()
  strokeWeight(3)
  stroke("white")
  // stroke(252, 229, 174, textAlpha2)
  fill(252, 229, 174, textAlpha2)

  textFont(raleway)
  textSize(fontSize / 3)
  text("full-stack developer. generative artist.", titleX, titleY)
  pop()
}
