// based on this blogpost: https://www.fractalkitty.com/walking-ripples/

// Places a bunch of circles along an x-axis, with slightly varying (via Perlin noise) y coordinates, then fills the pixels within the circles according to whether the pixel is located in an even or an odd number of circles.

const NUMBER_OF_CIRCLES = 50;
const RADII = [100, 120, 140, 160];
let circles;
let cnv;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  circles = createCircles(NUMBER_OF_CIRCLES, RADII);
  noLoop();
  background("#fff5de");
}

function draw() {
  // draw the circles
  for (const c of circles) {
    noStroke();
    ellipse(c.x, c.y, c.d, c.d, 50);
  }

  // expose the pixels array
  loadPixels();

  // iterate through pixels array and
  // set each pixel's color values
  // based on whether it is in an even or odd number of circles
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pixelIndex = (x + y * width) * 4;

      let circleCount = 0;

      for (const c of circles) {
        // check if distance between this pixel and the center of this circle is less than the radius
        if (dist(x, y, c.x, c.y) < c.d / 2 + 1) {
          circleCount += 1;
        }
      }
      // leave black
      if (circleCount === 0) {
        continue;
      } else if (circleCount % 2 === 0) {
        // orange
        pixels[pixelIndex] = 238;
        pixels[pixelIndex + 1] = 155;
        pixels[pixelIndex + 2] = 0;
      } else {
        // teal
        pixels[pixelIndex] = 10;
        pixels[pixelIndex + 1] = 147;
        pixels[pixelIndex + 2] = 150;
      }
    }
  }
  updatePixels();
}

function createCircles(numberOfCircles, radiusList) {
  const circles = [];
  for (let i = 0; i < numberOfCircles; i++) {
    const diameter = random(radiusList) * 2;
    const minX = diameter;
    const maxX = width - diameter;
    const x = random(minX, maxX);
    const n = map(noise(i), 0, 1, -height, height);
    const y = height / 2 + n;

    // Don't draw circle if it's going to fall off the canvas
    if (x + diameter / 2 < width - 10) {
      c = new Circle(x, y, diameter);
      circles.push(c);
    }
  }
  return circles;
}

class Circle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
  }
}
