const max = 400;
let startY = 50,
  circleSize = 250,
  startX = 50,
  endX = 300,
  amplitude = 100,//hoehe der Ausschlaege
  frequence = 10;



function setup() {
  createCanvas(max, max);
  angleMode(DEGREES);
  noLoop();


};

function draw() {
  noFill();
  background(255);

  for (let j = 0; j < 255; j++) {

    beginShape()
    for (let i = 0; i <= endX; i += 1.4) {

      stroke(10 + j);
      curveVertex(startX + i,
        startY + j + polarY(
          amplitude,
          frequence * i)
      );
    }
    endShape();
  }
  for (j = 0; j <= 200; j += 0.5) {
    beginShape();
    for (let i = 0; i <= 360; i++) {
      stroke(255);
      vertex(200 + polarX(130 + j, i), 200 + polarY(130 + j, i))
    }
    endShape();

  };
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