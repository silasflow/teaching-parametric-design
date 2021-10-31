const min = 1;
const max = 400;
var x = 1;
var y = 1;
var dia = 2;

function setup() {
  createCanvas(max, max);
  background(0);
};

function draw() {
 dots();
};

function dots() {
  stroke(random(0, 255));
  point(x, y);
  if (x <= max) {
    x++;
  };

  if (x == max && y != max) {
    x = 1;
    y++;
  };

  // if(x == 400 && y == 400){
  //   break;
  // };
};

// function maze() {
//   x = max / 2;
//   y = max / 2;
//   for(let dia = 2; dia <= max; dia + 5){
//   strokeWeight(1);
//   fill(0);
//   stroke(255);
//   arc(x, y, dia, dia, Math.PI / 180 * random(120, 350), Math.PI / 180 * random(120, 350), OPEN);
//   };
// };