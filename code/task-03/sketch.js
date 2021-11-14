const max = 400,
  dotCount = 3;
var radius = 10,
  degree = 0,
  i = 1;

function setup() {
  createCanvas(max, max);
  background(0);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  //noLoop();
};

function draw() {
  background(0);
  var x = radius * cos(degree);
  var y = radius * sin(degree);
  degree++;

  if (whatTheRadius(radius) === 1) {
    radius--;
  } else if (whatTheRadius(radius) === 0) {
    radius++;
  }

  console.log(i);
  console.log(radius);

  var dot = [];
  for (let i = 0; i <= dotCount; i++) {
    dot.push({
      x: random(0, max),
      y: random(0, max)
    })
  }

  stroke(0, 0, 100);
  noFill();
  strokeWeight(1);
  // circle(max / 2, max / 2, radius * 2);

  for (let i = 0; i <= dotCount; i++) {
    stroke(0, 0, 100 / dotCount * i);
    strokeWeight(2);
    point(dot[i].x, dot[i].y)

    beginShape();
    vertex(dot[i].x, dot[i].y);  
    vertex(max / 2 + x, max / 2 + y);
    endShape();
  }

  // circle(max / 2 + x, max / 2 + y, 4);

};


function whatTheRadius(rTest) {

  if (rTest === 200) {
    i = 1;
    return i;
  } else if (rTest === 10) {
    i = 0;
    return i;
  } else {
    return i;
  }
}