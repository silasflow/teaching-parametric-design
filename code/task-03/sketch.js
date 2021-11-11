const max = 400,
  dotCount = 50;
var dot = [],
  radius = 10,
  degree = 0;

function setup() {
  createCanvas(max, max);
  background(0);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);

  for (let i = 0; i <= dotCount; i++) {
    dot.push({
      x: random(0, max),
      y: random(0, max)
    })

  }

};

function draw() {
  background(0);

  var x = radius * cos(degree);
  var y = radius * sin(degree);
  degree++;

  if (whatTheRadius() === true) {
    radius--;
  } else if (whatTheRadius() === false) {
    radius++;
  }



  for (let i = 0; i <= dotCount; i++) {
    stroke(0, 0, 100 / dotCount * i);
    strokeWeight(5);
    point(dot[i].x, dot[i].y)

    beginShape();
    vertex(dot[i].x, dot[i].y);
    vertex(200 + x, 200 + y);
    endShape();
  }

  // fill("black");
  // circle(200, 200, radius * 2);
  // circle(200 + x, 200 + y, 10);
};


function whatTheRadius() {
  if (radius === 200) {
    return true;
  } else if (radius === 10) {
    return false;
  }
}