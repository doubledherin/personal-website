class Sensor {
  constructor(angle) {
    this.position = createVector(0, 0);
    this.angle = angle;
    this.distance = 5;
  }

  updatePosition(particlePositionX, particlePositionY, direction) {
    this.position.x =
      (particlePositionX + this.distance * cos(direction) + width) % width;
    this.position.y =
      (particlePositionY + this.distance * sin(direction) + height) % height;
  }
}
