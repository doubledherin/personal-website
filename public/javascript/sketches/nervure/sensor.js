class Sensor {
  constructor(angle) {
    this.position = createVector(0, 0);
    this.angle = angle;
    this.distance = 5;
    this.colorValue = 0; // same as the background of the canvas
  }

  update(particlePositionX, particlePositionY, direction) {
    this.position.x =
      (particlePositionX + this.distance * cos(direction) + width) % width;
    this.position.y =
      (particlePositionY + this.distance * sin(direction) + height) % height;
    this.colorValue = this.getPixelColor();
  }

  getPixelColor() {
    const index =
      4 *
        (pixelDensityValue * floor(this.position.y)) *
        (pixelDensityValue * width) +
      4 * (pixelDensityValue * floor(this.position.x));
    return pixels[index];
  }
}
