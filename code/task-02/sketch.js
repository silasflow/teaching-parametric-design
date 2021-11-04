const max = 400;

function setup() {
  createCanvas(max, max);
  background(255);
  // rectMode(CENTER);
};

function draw() {
  noLoop();
  let distance = 115;
  let rectSize = 50;
  stroke(0);
  noFill();

  for (let x = 0; 100 + x * 100 <= max; x++) {
    for (let y = 0; 100 + y * 100 <= max; y++) {
      let rNumber = random(0, 5);

      if (rNumber >= 4) {
        swirl(55 + distance * x, 55 + distance * y, 50);
      } else {
        if (x % 2 === 0) {
          rect(30 + distance * x, 30 + distance * y, rectSize);
        } else {
          triangle(
            30 + (rectSize / 2) + distance * x,
            30 + distance * y,
            30 + distance * x,
            30 + rectSize + distance * y,
            30 + rectSize + distance * x,
            30 + rectSize + distance * y, )
        };
      };
    };
  };
};

function swirl(xS, yS, circleR) {
  noFill();
  circle(xS, yS, circleR);
  for (let i = 0; i <= 50; i++) {
    circle(
      xS + random(-circleR / 3, circleR / 3),
      yS + random(-circleR / 3, circleR / 3),
      circleR / 4);
  }
}