const max = 400;
var randomStart = Math.random() * 360,
  random1 = Math.random() * 360,
  random2 = Math.random() * 360,
  random3 = Math.random() * 360; // ändert den Startpunkt der Kugeln um mehr Abwechselung zu bieten
let slider;
var fireworkRadius = 0; // Radius der einzellene Kugeln
var gravity = 0;
var j = 1;
var data;
var arrayIndex;
var alpha = 1;

function preload() {
  data = loadJSON('Umsatz_Import_Export.json'); // Daten werden geladen
  font = loadFont('IBMPlexSans-Bold.ttf');
};

function setup() {
  createCanvas(max, max);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  frameRate(60);

  // noLoop();

  data = Object.values(data);
  slider = createSlider(6, data.length - 1, 6, 1);
  slider.position(160, 400);
  slider.style('width', '80px');

  sliderSpeed = createSlider(0, 1, 0.25, 0.01);
  sliderSpeed.position(160, 420);
  sliderSpeed.style('width', '80px');

  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);

};

function draw() {
  translate(max / 2, max / 2);


  arrayIndex = slider.value(); // überführt den Silder Wert in den Index fürs Array
  let visualisedData = data[arrayIndex][1]; // Tabellen Input der Visualiert wird

  fill(0);
  text(str(data[arrayIndex][0]), 200, 420);
  console.log('Jahreszahl: ' + data[arrayIndex][0]);
  console.log('Tabellenlänge: ' + data.length);

  background(0);
  for (let i = 0; i < 3; i++) {
    explosion();
    console.log('j: ' + j);
  }

  // for (j = 1; j <= 3; j++) {
  //   let visualisedData = data[arrayIndex][j];

  // };

  // console.log(data);
  console.log('Tabellen Input: ' + visualisedData);

};


function explosion() {
  let segments;
  let hue;
  let offset;

  console.log(data);
  if (j === 1) {
    hue = 148;
    segments = data[arrayIndex][j] / 2;
    offset = 5;
    randomStart = random1;
  } else if (j === 2) {
    hue = 60;
    segments = data[arrayIndex][j] / 2300;
    offset = 0;
    randomStart = random2;
  } else if (j === 3) {
    hue = 32;
    segments = data[arrayIndex][j] / 90;
    offset = 10;
    randomStart = random3;
  };

  let ring = round(segments / 3.33); // Teilt die Zahl in drei Teile, damit am Ende drei nacheinadner startende Ring, die die gesamte Zahl bilden
  let ringDegree = 360 / ring; // errechente die benötigte Grad Zahl zwischen den einzellnen Kugeln
  console.log('Zahl Segmente: ' + segments);
  console.log('Gesamtzahl: ' + ringDegree);
  console.log('Kugeln im Ring: ' + ring);
  console.log('Gradzahl zwischen den Kugeln: ' + ringDegree);



  noStroke();
  fill(hue, 100, 100, alpha);


  // ---- erzeugt einen Ring aus Kugeln ----
  if (fireworkRadius + 10 - offset <= 80) {
    for (let i = 0 + random1; i <= 360 + random1; i = i + ringDegree) {
      circle(polarX(fireworkRadius + offset, i), polarY(fireworkRadius + offset, i) + gravity, 5)
    };
  }

  if (fireworkRadius - 20 - offset >= 0 && fireworkRadius <= 100) {
    for (let i = 0 + random2; i <= 360 + random2; i = i + ringDegree) {
      circle(polarX(fireworkRadius - 20 - offset, i), polarY(fireworkRadius - 20 - offset, i) + gravity, 5)
    };
  }

  if (fireworkRadius - 40 - offset >= 0) {
    for (let i = 0 + random3; i <= 360 + random3; i = i + ringDegree) {
      circle(polarX(fireworkRadius - 40 - offset, i), polarY(fireworkRadius - 40 - offset, i) + gravity, 5)
    };
  }

  if (j < 3) {
    j++
  } else {
    j = 1;
  }

  // ---- testet auf maximal Radius des Ringes -----
  if (whatTheRadius(fireworkRadius) === 1) {
    fireworkRadius = 0;
    gravity = 0;
    alpha = 1;
    // randomStart = Math.random() * 360;
    random1 = Math.random() * 360;
    random2 = Math.random() * 360;
    random3 = Math.random() * 360;
  } else if (whatTheRadius(fireworkRadius) === 0) {
    fireworkRadius += sliderSpeed.value();
    // gravity += 0.1;
    alpha -= 0.002;
  }
};


// ---- testet auf maximal Radius des Ringes -----
function whatTheRadius(rTest) {
  if (rTest >= 120) {
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