function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push();
  translate(200, 160);
  scale(0.3);
  for (let linesDrawn = 0; linesDrawn < 15; linesDrawn++) {
    petals("green", 36, 50, 50, 120);
  }
  pop();
  fill("yellow")
  ellipse(184, 190, 60)
  push();
  translate(100, 60);
  scale(0.4);
  for (let linesDrawn = 0; linesDrawn < 15; linesDrawn++) {
    petals("blue", 46, 50, 50, 120);
  }
  pop()
  fill("yellow")
  ellipse(86, 95, 60)
  push()
  translate(250, 260);
  scale(0.4);
  for (let linesDrawn = 0; linesDrawn < 20; linesDrawn++) {
    petals("red", 56, 50, 50, 100);
  }
  pop()
  fill("yellow")
  ellipse(240, 285, 60)
}

function petals(color, turn, x, y, diam) {
  noStroke();
  fill(color);
  translate(x, y);
  rotate(turn);
  ellipse(x, y, diam);
}
