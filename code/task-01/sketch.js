const min = 1;
const max = 400;
var x = 1;
var y = 1;
var dia = 2;

function setup() {
  createCanvas(max, max);
  background(0);
  frameRate(10);
};

function draw() {
dots();


};

function mousePressed(){
  maze();
};

function dots() {
  stroke(random(0, 255));
  point(x, y);
  if (x <= max) {
    x++;
  } else if (x === max && y != max) {
    x = 1;
    y++;
  };

  // if(x == 400 && y == 400){
  //   break;
  // };
};

function maze() {
  // for(let dia = 2; dia <= max; dia + 5){
  strokeWeight(1);
  noFill();
  stroke(255);
  arc(mouseX, mouseY, dia, dia, Math.PI / 180 * random(120, 350), Math.PI / 180 * random(120, 350));
  dia = dia + 5
  // };
};