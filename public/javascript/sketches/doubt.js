let font;
let msg = "DOUBT";
let fontSize = 150;
let fontPath;
let points = [];
let num = 20;
let r = 20;
let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  opentype.load("fonts/Geoform-ExtraBold.otf", function (err, f) {
    if (err) {
      console.log(err);
    } else {
      font = f;
    }

    fontPath = font.getPath(msg, 0, 0, fontSize);
    path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path, 1);
    for (let i = 0; i < path.commands.length; i++) {
      if (path.commands[i].type === "M") {
        points.push([]);
      }
      if (path.commands[i].type !== "Z") {
        points[points.length - 1].push(
          createVector(path.commands[i].x, path.commands[i].y),
        );
      }
    }
  });
}

function draw() {
  background("#fdc921");
  strokeWeight(8);
  noFill();
  translate(20, 130);
  let strokeColor = 0;
  for (let k = num; k > 0; k--) {
    strokeColor += 255 / num;
    stroke(strokeColor);
    for (let i = 0; i < points.length; i++) {
      beginShape();
      for (let j = 0; j < points[i].length; j++) {
        vertex(
          points[i][j].x + r * sin(angle + k * 20),
          points[i][j].y + k * 20,
        );
      }
      endShape(CLOSE);
    }
  }
  angle += 3;
}
