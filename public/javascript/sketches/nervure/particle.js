class Particle {
  constructor() {
    // starting direction
    this.heading = random(360);

    // starting location
    this.x = random(width);
    this.y = random(height);

    this.speed = 0.5;

    // next location
    this.newX = cos(this.heading) * this.speed;
    this.newY = sin(this.heading) * this.speed;

    // size
    this.r = 0.5;

    // sensor initialization
    this.frontSensorPosition = createVector(0, 0);
    this.rightSensorPosition = createVector(0, 0);
    this.leftSensorPosition = createVector(0, 0);

    this.sensorAngle = 48;
    this.sensorDistance = 5;
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  update() {
    this.newX = cos(this.heading) * this.speed;
    this.newY = sin(this.heading) * this.speed;

    this.x = (this.x + this.newX + width) % width;
    this.y = (this.y + this.newY + height) % height;

    this.setSensorPosition(
      this.rightSensorPosition,
      this.heading + this.sensorAngle,
    );
    this.setSensorPosition(
      this.leftSensorPosition,
      this.heading - this.sensorAngle,
    );
    this.setSensorPosition(this.frontSensorPosition, this.heading);

    let index, r, l, f;

    index =
      4 * (d * floor(this.rightSensorPosition.y)) * (d * width) +
      4 * (d * floor(this.rightSensorPosition.x));
    r = pixels[index];

    index =
      4 * (d * floor(this.leftSensorPosition.y)) * (d * width) +
      4 * (d * floor(this.leftSensorPosition.x));
    l = pixels[index];

    index =
      4 * (d * floor(this.frontSensorPosition.y)) * (d * width) +
      4 * (d * floor(this.frontSensorPosition.x));
    f = pixels[index];

    if (f > l && f > r) {
      this.heading += 0;
    } else if (f < l && f < r) {
      if (random(1) < 0.5) {
        this.heading += this.sensorAngle;
      }
    } else if (l > r) {
      this.heading += -this.sensorAngle;
    } else if (r > l) {
      this.heading += this.sensorAngle;
    }
  }

  setSensorPosition(sensor, angle) {
    sensor.x = (this.x + this.sensorDistance * cos(angle) + width) % width;
    sensor.y = (this.y + this.sensorDistance * sin(angle) + height) % height;
  }
}
