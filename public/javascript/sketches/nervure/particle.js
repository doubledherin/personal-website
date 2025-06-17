// Each particle of a slime mold moves, as much as possible, toward other slime-mold particles.
// It does this with the use of 3 sensors: one directly in front of itself, one at an angle to the left,
// and one at an angle to the right.
//
// If a sensor detects another slime-mold particle, the particle heads in the direction of that sensor.
// A slime-mold particle is detected based on the current color value of the pixel where the sensor is located.
// The lighter (higher) the pixel's color, the more weight it is given in determining the particle's direction.
//
// Slime mold particles are white (with a color value of 255) and leave a darkening trail behind them.
// Therefore, the head of a particle's path has more pull on another particle's direction than its trail.
class Particle {
  constructor() {
    // starting direction
    this.direction = random(360);

    // starting location
    this.x = random(width);
    this.y = random(height);

    this.speed = 0.5;

    // next location
    this.newX = cos(this.direction) * this.speed;
    this.newY = sin(this.direction) * this.speed;

    // size
    this.r = 0.5;

    // sensor initialization
    this.sensorAngle = 48;
    this.sensorDistance = 5;

    this.leftSensor = new Sensor(this.sensorAngle);
    this.frontSensor = new Sensor(this.sensorAngle);
    this.rightSensor = new Sensor(this.sensorAngle);
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  update() {
    this.newX = cos(this.direction) * this.speed;
    this.newY = sin(this.direction) * this.speed;

    this.x = (this.x + this.newX + width) % width;
    this.y = (this.y + this.newY + height) % height;

    this.leftSensor.updatePosition(
      this.x,
      this.y,
      this.direction - this.sensorAngle,
    );
    this.frontSensor.updatePosition(this.x, this.y, this.direction);

    this.rightSensor.updatePosition(
      this.x,
      this.y,
      this.direction + this.sensorAngle,
    );

    let index, rValueOfRightSensor, rValueOfLeftSensor, rValueOfFrontSensor;

    index =
      4 * (d * floor(this.leftSensor.position.y)) * (d * width) +
      4 * (d * floor(this.leftSensor.position.x));
    rValueOfLeftSensor = pixels[index];

    index =
      4 * (d * floor(this.frontSensor.position.y)) * (d * width) +
      4 * (d * floor(this.frontSensor.position.x));
    rValueOfFrontSensor = pixels[index];

    index =
      4 * (d * floor(this.rightSensor.position.y)) * (d * width) +
      4 * (d * floor(this.rightSensor.position.x));
    rValueOfRightSensor = pixels[index];

    if (
      rValueOfFrontSensor > rValueOfLeftSensor &&
      rValueOfFrontSensor > rValueOfRightSensor
    ) {
      this.direction += 0;
    } else if (
      rValueOfFrontSensor < rValueOfLeftSensor &&
      rValueOfFrontSensor < rValueOfRightSensor
    ) {
      if (random(1) < 0.5) {
        this.direction += this.sensorAngle;
      }
    } else if (rValueOfLeftSensor > rValueOfRightSensor) {
      this.direction += -this.sensorAngle;
    } else if (rValueOfRightSensor > rValueOfLeftSensor) {
      this.direction += this.sensorAngle;
    }
  }
}
