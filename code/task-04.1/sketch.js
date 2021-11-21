const max = 400;
var circleSize = 10,
  startX = 0,
  startY = 40,
  leafWidth = 120,
  leafHeight = 220,
  leafStem = 30,
  stemWidth = 10;




function setup() {
  createCanvas(max, max, SVG);
  background(255);
  angleMode(DEGREES);
  noLoop();
};

function draw() {
  translate(max / 2, max / 2);
  noFill();

  stroke("red");
  beginShape();
  vertex(startX, startY + leafHeight * 0.3);
  vertex(startX, startY - leafHeight / 1.6);
  endShape();
  for (let i = 0; i <= 21; i++) {
    beginShape();
    vertex(startX, startY + leafHeight * 0.3 - i * 9);
    vertex(startX - 80 +i*2, startY + leafHeight * 0.3 - (40 + i * 10));
    vertex(startX, startY + leafHeight * 0.3 - i * 9);
    vertex(startX + 80-i*2, startY + leafHeight * 0.3 - (40 + i * 10));
    endShape();
  }

  stroke("black");
  beginShape();
  vertex(startX, startY - leafHeight * 0.6);
  quadraticVertex(startX + leafWidth / 2, startY - leafHeight * 0.3, startX + leafWidth / 2, startY + 0);
  quadraticVertex(startX + leafWidth / 2, startY + leafWidth / 2, startX + 5, startY + leafHeight * 0.3);
  vertex(startX + stemWidth / 2, startY + leafHeight * 0.3 + leafStem);
  vertex(startX - stemWidth / 2, startY + leafHeight * 0.3 + leafStem);
  vertex(startX - stemWidth / 2, startY + leafHeight * 0.3);
  quadraticVertex(startX - leafWidth / 2, startY + leafWidth / 2, startX - leafWidth / 2, startY + 0);
  quadraticVertex(startX - leafWidth / 2, startY - leafHeight * 0.3, startX + 0, startY - leafHeight * 0.6);
  endShape();

  beginShape();
  for (let i = 0; i <= 360; i++) {
    curveVertex(polarX((circleSize / 2), i), polarY((circleSize / 2), i) - 70);
  };
  endShape(CLOSE);

  save();
};


function polarX(radius, degree) {
  let x = radius * cos(degree);
  return x;
}

function polarY(radius, degree) {
  let y = radius * sin(degree);
  return y;
}
