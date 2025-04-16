class SandGrain {
  constructor(sandColor) {
    this.currentPosition = createVector(random(0, width), random(0, height))
    this.velocity = p5.Vector.random2D()
    this.acceleration = createVector()
    this.maxCurrentVelocity = 5
    this.maxSteeringVelocity = 2
    this.threshold = 0.05
    // this.textPoints = textPoints
    this.sandColor = sandColor
  }

  checkEdges() {
    if (this.currentPosition.x > width) {
      this.currentPosition.x = 0
    } else if (this.currentPosition.x < 0) {
      this.currentPosition.x = width
    }
    if (this.currentPosition.y > height) {
      this.currentPosition.y = 0
    } else if (this.currentPosition.y < 0) {
      this.currentPosition.y = height
    }
  }

  applyForce(force) {
    // go left
    this.acceleration.add(force)
  }

  getSteeringVelocity() {
    let x = map(this.currentPosition.x, 0, width, 0, 1)
    let y = map(this.currentPosition.y, 0, height, 0, 1)
    let chladniValue = this.chladni(x, y)
    let targetPosition = this.currentPosition.copy()

    // if the chladni values are not on nodal lines (+/- the threshold), make the target +/- 3x3 pixels away; otherwise, the target is the same as the current currentPosition, so the particle doesn't move
    if (abs(chladniValue) > this.threshold) {
      targetPosition.x += random(-3, 3)
      targetPosition.y += random(-3, 3)
    }
    let desiredVelocity = p5.Vector.sub(targetPosition, this.currentPosition)
    desiredVelocity.setMag(this.maxCurrentVelocity)
    let steeringVelocity = p5.Vector.sub(desiredVelocity, this.velocity)
    steeringVelocity.limit(this.maxSteeringVelocity)
    return steeringVelocity
  }

  // See https://paulbourke.net/geometry/chladni/
  chladni(x, y) {
    // L is a scalar; changing it zooms in/out and pans
    const L = 1
    return (
      cos((n * PI * x) / L) * cos((m * PI * y) / L) -
      cos((m * PI * x) / L) * cos((n * PI * y) / L)
    )
  }

  update() {
    const steeringVelocity = this.getSteeringVelocity()

    // If the magnitude of the steering velocity is zero,
    // then the grain of sand has reached its target,
    // and is therefore 'home'
    this.checkEdges()
    this.acceleration.add(steeringVelocity)
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxCurrentVelocity)
    this.currentPosition.add(this.velocity)
    this.acceleration.mult(0)
  }

  show() {
    stroke(this.sandColor)
    ellipse(this.currentPosition.x, this.currentPosition.y, 1.5, 1.5)
  }
}
