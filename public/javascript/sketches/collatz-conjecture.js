function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#09019b");
  strokeWeight(2);
  noLoop();
  const len = 50;
  const angle = 0.25;
  for (let i = 1; i < 300; i++) {
    resetMatrix();
    translate(width / 2, height);
    let n = i;
    while (n !== 1) {
      n = collatz(n);
      if (n % 2 === 0) {
        rotate(angle);
      } else {
        rotate(-angle);
      }
      stroke(180, 40, 0, 100);
      line(0, 0, 0, -len);
      translate(0, -len);
    }
  }
}

function draw() {}

function collatz(n) {
  if (n % 2 === 0) {
    return n / 2;
  }
  return 3 * n + 1;
}
