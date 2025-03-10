let num = 1000;
let range = 20;
let r, g, b;
// global variable 
let i;

let ax = [];
let ay = [];

function setup() 
{
  createCanvas(1000, 1000);
  for(i = 0; i < num; i++) {
    ax[i] = width/2;
    ay[i] = height/2;
  }
  frameRate(30);
}

function draw() 
{
  background(0);
  
  // Shift all elements 1 place to the left
  for( i = 1; i < num; i++) {
    ax[i-1] = ax[i];
    ay[i-1] = ay[i];
  }

  // Put a new value at the end of the array
  ax[num-1] += random(-range, range);
  ay[num-1] += random(-range, range);

  // Constrain all points to the screen
  ax[num-1] = constrain(ax[num-1], 0, width);
  ay[num-1] = constrain(ay[num-1], 0, height);
  
  // Draw a line connecting the points
  for( i=1; i<num; i++) {    
    let val = i/num * 204.0 + 51;
    stroke(val);
    line(ax[i-1], ay[i-1], ax[i], ay[i]);
    
  }
  
}