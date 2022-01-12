var scale;
var randomStart = Math.random() * 360,
  random1 = Math.random() * 360,
  random2 = Math.random() * 360,
  random3 = Math.random() * 360; // ändert den Startpunkt der Kugeln um mehr Abwechselung zu bieten
let slider,
  sliderSpeed;
var fireworkRadius = 0; // Radius der einzellene Kugeln
var gravity = 0;
var j = 1;
var data;
var arrayIndex;
var alpha = 1;

var rocketX = -100,
  rocketY = 240;


function preload() {
  data = loadJSON('Umsatz_Import_Export.json'); // Daten werden geladen
  font = loadFont('Assistant-ExtraBold.ttf');
};

window.addEventListener('resize', function () {
  resizeCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(60);
  // background(208, 75, 18);
  background(0, 0, 0);
  // noLoop();
  scale = windowHeight / 5;

  data = Object.values(data);
  slider = createSlider(6, data.length - 1, 6, 1);
  slider.style('width', '120px');

  // sliderSpeed = createSlider(0, 1, 0.3, 0.01);
  // sliderSpeed.position(160, 420);
  // sliderSpeed.style('width', '80px');

  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);

};

function draw() {
  translate(windowWidth / 2, windowHeight / 2.5);
  slider.position(windowWidth / 2 - 68, scale * 3.6);

  arrayIndex = slider.value(); // überführt den Silder Wert in den Index fürs Array
  let visualisedData = data[arrayIndex][1]; // Tabellen Input der Visualiert wird

  fill(100);
  text(str(data[arrayIndex][0]), 0, scale * 1.5);
  console.log('Jahreszahl: ' + data[arrayIndex][0]);
  console.log('Tabellenlänge: ' + data.length);

  // background(208, 75, 18, 0.1);
  background(0, 0, 0, 0.1);

  for (let i = 0; i < 3; i++) {
    explosion();
    console.log('j: ' + j);
  }


  // console.log(data);
  console.log('Tabellen Input: ' + visualisedData);

};


function explosion() {
  let segments;
  let hue,
    saturation,
    brightness;
  let eachColorOffset;
  let yOffset = 0;


  console.log(data);
  if (j === 1) {
    hue = 148;
    saturation = 90;
    brightness = 79;
    segments = data[arrayIndex][j] / 2;
    eachColorOffset = 5;
    randomStart = random1;
  } else if (j === 2) {
    hue = 60;
    saturation = 90;
    brightness = 84;
    segments = data[arrayIndex][j] / 2300;
    eachColorOffset = 0;
    randomStart = random2;
  } else if (j === 3) {
    hue = 32;
    saturation = 85;
    brightness = 92;
    segments = data[arrayIndex][j] / 90;
    eachColorOffset = 10;
    randomStart = random3;
  };

  let ring = round(segments / 3.33); // Teilt die Zahl in drei Teile, damit am Ende drei nacheinadner startende Ring, die die gesamte Zahl bilden
  let ringDegree = 360 / ring; // errechente die benötigte Grad Zahl zwischen den einzellnen Kugeln
  console.log('Zahl Segmente: ' + segments);
  console.log('Gesamtzahl: ' + ringDegree);
  console.log('Kugeln im Ring: ' + ring);
  console.log('Gradzahl zwischen den Kugeln: ' + ringDegree);

  let ballRadius = noise(fireworkRadius / 20) * 6 + 2;
  let ringOffset = [
    5,
    20,
    7
  ];
  let wiggle = noise(fireworkRadius) * 2 - 1;
  // let wiggle = random(-2,2);



  noStroke();
  fill(hue, saturation, brightness, alpha);


  // ---- erzeugt einen Ring aus Kugeln ----
  if (fireworkRadius - eachColorOffset <= scale - 40) {
    yOffset = fireworkRadius / ringOffset[2] * 3;
    for (let i = 0 + random1; i <= 360 + random1; i = i + ringDegree) {
      circle(polarX(fireworkRadius + eachColorOffset, i) + wiggle, polarY(fireworkRadius + eachColorOffset, i) + yOffset + wiggle, ballRadius)
    };
  }

  if (fireworkRadius - ringOffset[0] - eachColorOffset >= 0 && fireworkRadius <= scale - 20) {
    yOffset = (fireworkRadius - ringOffset[0]) / ringOffset[2] * 3;
    for (let i = 0 + random2; i <= 360 + random2; i = i + ringDegree) {
      circle(polarX(fireworkRadius - ringOffset[0] - eachColorOffset, i) + wiggle, polarY(fireworkRadius - ringOffset[0] - eachColorOffset, i) + yOffset + wiggle, ballRadius)
    };
  }

  if (fireworkRadius - ringOffset[1] - eachColorOffset >= 0) {
    yOffset = (fireworkRadius - ringOffset[1]) / ringOffset[2] * 3;
    for (let i = 0 + random3; i <= 360 + random3; i = i + ringDegree) {
      circle(polarX(fireworkRadius - ringOffset[1] - eachColorOffset, i) + wiggle, polarY(fireworkRadius - ringOffset[1] - eachColorOffset, i) + yOffset + wiggle, ballRadius)
    };
  }

  if (j < 3) {
    j++
  } else {
    j = 1;
  }

  // ---- testet auf windowHeightimal Radius des Ringes -----
  if (whatTheRadius(fireworkRadius) === 1) {
    fireworkRadius = 0;
    alpha = 1;
    // randomStart = Math.random() * 360;
    random1 = Math.random() * 360;
    random2 = Math.random() * 360;
    random3 = Math.random() * 360;

  } else if (whatTheRadius(fireworkRadius) === 0) {
    // fireworkRadius += sliderSpeed.value();
    fireworkRadius += 0.5;
    alpha = noise(fireworkRadius) + 0.2;
  }
};


// ---- testet auf windowHeightimal Radius des Ringes -----
function whatTheRadius(rTest) {
  if (rTest >= scale) {
    i = 1;
    return i;
  } else {
    i = 0;
    return i;
  }
}

function polarX(radius, degree) {
  let x = radius * cos(degree);
  return x;
}

function polarY(radius, degree) {
  let y = radius * sin(degree);
  return y;
}