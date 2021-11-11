const max = 400;
var dot = [];
const dotCount = 50;


function setup() {
  createCanvas(max, max);
  background(0);
  colorMode(HSB);
  angleMode(DEGREES);
  translate(max / 2, max / 2);


  for (let i = 0; i <= dotCount; i++) {
    dot.push({
      x: random(0, max),
      y: random(0, max)
    })

  }
};

function draw() {
  background(0);

  for (let deg = 0; deg <= 360; deg++) {
    const radius = 50;
    var x = radius * cos(360 / dotCount * deg);
    var y = radius * sin(360 / dotCount * deg);
  }


  for (let i = 0; i <= dotCount; i++) {
    console.log(dot[i]);
    stroke(360, 10, 100 / dotCount * i);
    strokeWeight(5);
    point(dot[i].x, dot[i].y)



    beginShape();
    vertex(dot[i].x, dot[i].y);
    vertex(x, y);
    endShape();
  }
  // noLoop();
};