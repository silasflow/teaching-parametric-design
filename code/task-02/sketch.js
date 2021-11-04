const max = 400;

function setup() {
  createCanvas(max, max);
  background(255);
  frameRate(0.25);
};

function draw() {
  background(255);
  let distance = 115;
  let rectSize = 60;
  stroke(0);
  noFill();

  for (let x = 0; 100 + x * 100 <= max; x++) {
    for (let y = 0; 100 + y * 100 <= max; y++) {
      let rNumber = random(0, 5);

      if (rNumber >= 4) {
        swirl(55 + distance * x, 55 + distance * y, 120);
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
  circle(xS, yS, circleR*0.8);
  for (let i = 0; i <= 80; i++) {
    circle(
      xS + random(random(-circleR / 6, -circleR / 3), random(circleR / 6, circleR / 3)),
      yS + random(random(-circleR / 6, -circleR / 3), random(circleR / 6, circleR / 3)),
      circleR / 4);
  }
}