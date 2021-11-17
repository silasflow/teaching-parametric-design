const max = 400;

  function setup() {
    createCanvas(max, max, SVG);
    background(255);
    rectMode(CENTER);
    noLoop();
  };

function draw() {
  rings(100,10);
  save();
};

function rings(radius, weight) { 
  for (let i = 0; i < 4; i++) {
    noFill();
    stroke(255);
    strokeWeight(weight);
    circle(max / 2, max / 5 + max / 5 * i, radius);
    stroke(0);
    strokeWeight(1);
    circle(max / 2, max / 5 + max / 5 * i, radius);
  }
}; 