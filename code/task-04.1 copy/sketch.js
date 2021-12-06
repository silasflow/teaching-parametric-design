const max = 400;
var startY = 0,
  circleSize = 250,
  startX = -(circleSize / 2),
  endX = (circleSize / 2),
  amplitude = 30, //hoehe der Ausschlaege
  frequence = 30;



function setup() {
  createCanvas(max, max, SVG);
  background(200);
  angleMode(DEGREES);
  noLoop();
};

function draw() {
  translate(max / 2, max / 2);
  noFill();
  stroke("black");
  beginShape();
  for (let i = 93; i <= 447; i++) {
    vertex(polarX((circleSize / 2), i), polarY((circleSize / 2), i));
  }
  vertex(polarX((circleSize / 2), 447), polarY((circleSize / 2), 447) - 40);
  vertex(polarX((circleSize / 2), 93), polarY((circleSize / 2), 447) - 40);
  vertex(polarX((circleSize / 2), 93), polarY((circleSize / 2), 93));
  endShape();

  beginShape();
  vertex(80, 180);
  vertex(180, 180);
  vertex(80, 180);
  vertex(180, 180);
  endShape();

  stroke("red");
  beginShape()
  for (let i = startX; i <= endX; i += 1.4) {
    curveVertex(polarX((circleSize / 2), i * 3 ),
      startY + polarY(
      amplitude * random(),
      frequence * i)
    );
  }
  endShape();

  // save();
};


function polarX(radius, degree) {
  let x = radius * cos(degree);
  return x;
}

function polarY(radius, degree) {
  let y = radius * sin(degree);
  return y;
}