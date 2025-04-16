let MIN_CIRCLE_SIZE = 2
let MAX_CIRCLE_SIZE = 11

function setup() {
  createCanvas(windowWidth, windowHeight)
}

const numFrames = 60

function periodicFunction(p) {
  return map(sin(TWO_PI * p), -1, 1, MIN_CIRCLE_SIZE, MAX_CIRCLE_SIZE)
}

function offset(x, y) {
  return 0.017 * dist(x, y, width / 2, height / 2)
}
function keyPressed() {
  if (key === "s") {
    saveGif("rippling-spots", 5)
  }
}
function draw() {
  background(10, 35, 80)
  const t = (1.0 * (frameCount - 1)) / numFrames
  const m = 40
  // stroke(0)
  noStroke()
  fill(0)

  for (i = 0; i < m; i++) {
    for (j = 0; j < m; j++) {
      const x = map(i, 0, m - 1, 0, width)
      const y = map(j, 0, m - 1, 0, height)

      const circleSize = periodicFunction(t - offset(x, y))
      const d = dist(x, y, width / 2, height / 2)
      if (d < max(width, height) / 10) {
        fill(240, 209, 117)
      } else if (d < max(width, height) / 8) {
        fill(240, 214, 139)
      } else if (d < max(width, height) / 4) {
        fill(237, 221, 173)
      } else if (d < max(width, height) / 2) {
        fill(240, 231, 204)
      } else {
        fill(255)
      }

      // strokeWeight(circleSize)
      circle(x, y, circleSize)
    }
  }
}
