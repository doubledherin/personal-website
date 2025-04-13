let diameter
let angle = 0

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  diameter = width / 4
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  stroke(255, 255, 204)
  diameter = width / 4
  strokeWeight(1.8)
}

function draw() {
  background(10, 15, 40)
  drawingContext.shadowBlur = 50
  drawingContext.shadowColor = color(255, 255, 204)
  translate(width / 2, height / 2)

  // TO DO: make increment based on mouse position distance from center
  // where center is most complex and edges and beyond is least complex
  // or base it on sound! make the person play a note or hum a note
  const increment = floor(map(cos(angle), -1, 1, 15, 181))
  for (let a = 0; a <= 360; a += increment) {
    push()
    rotate(radians(a))
    for (let radianValue = 0; radianValue <= 180; radianValue += 10) {
      // mess with 8
      line(
        sin(radians(radianValue)) * diameter,
        cos(radians(radianValue)) * diameter,
        sin(radians(-radianValue)) * diameter,
        cos(radians(-radianValue)) * diameter
      )
    }
    pop()
  }
  noFill()
  push()
  strokeWeight(1.2)
  ellipse(0, 0, diameter * 2, diameter * 2)
  pop()
  angle += 0.013
}
