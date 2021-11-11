const max = 400,
  dotCount = 50;
var radius = 10,
  degree = 0;

function setup() {
  createCanvas(max, max);
  background(0);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);


};

function draw() {
  background(0);
  whatTheRadius()
  var x = radius * cos(degree);
  var y = radius * sin(degree);
  degree++;

  if (whatTheRadius()) {
    radius--;
  } else {
    radius++;
  }

  var dot = [];
  for (let i = 0; i <= dotCount; i++) {
    dot.push({
      x: random(0, max),
      y: random(0, max)
    })

  }


  for (let i = 0; i <= dotCount; i++) {
    stroke(0, 0, 100 / dotCount * i);
    strokeWeight(5);
    point(dot[i].x, dot[i].y)

    beginShape();
    vertex(dot[i].x, dot[i].y);
    vertex(max / 2 + x, max / 2 + y);
    endShape();
  }

};


function whatTheRadius() {
  if (radius === 200) {
    return true;
  } else if (radius === 10) {
    return false;
  }
}