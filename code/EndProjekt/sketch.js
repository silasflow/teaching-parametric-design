const max = 400;
var randomStart = Math.random() * 360; // ändert den Startpunkt der Kugeln um mehr Abwechselung zu bieten
let slider;
var fireworkRadius = 0; // Radius der einzellene Kugeln


function preload() {
  data = loadJSON('Umsatz_Import_Export.json'); // Daten werden geladen
  font = loadFont('Assistant-ExtraBold.ttf');
};

function setup() {
  createCanvas(max, max);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();

  data = Object.values(data);
  slider = createSlider(6, data.length - 1, 6, 1);
  slider.position(160, 400);
  slider.style('width', '80px');

  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);
};

function draw() {
  translate(max / 2, max / 2);


  let arrayIndex = slider.value(); // überführt den Silder Wert in den Index fürs Array
  let visualisedData = data[arrayIndex][1]; // Tabellen Input der Visualiert wird

  fill(0);
  text(str(data[arrayIndex][0]), 200, 360);
  console.log('Jahreszahl: ' + data[arrayIndex][0]);
  console.log('Tabellenlänge: ' + data.length);
  for (let j = 1; j <= 3; j++) {
    explosion(visualisedData, 100);
  };

  // console.log(data);
  console.log('Tabellen Input: ' + visualisedData);

};


function explosion(arrayCount) {
  let segments = arrayCount / 2; // verkleinert die aus der Tabelle gezogenen Zahl
  let ring = round(segments / 3.33); // Teilt die Zahl in drei Teile, damit am Ende drei nacheinadner startende Ring, die die gesamte Zahl bilden
  let ringDegree = 360 / ring; // errechente die benötigte Grad Zahl zwischen den einzellnen Kugeln
  console.log('Gesamtzahl: ' + ringDegree);
  console.log('Kugeln im Ring: ' + ring);
  console.log('Gradzahl zwischen den Kugeln: ' + ringDegree);

  let saturation = 100;

  let hue = 148;
  background(100);
  noStroke();
  // saturation = saturation - (120 / 100);
  fill(hue, saturation, 100);


  // ---- erzeugt einen Ring aus Kugeln ----
  if (fireworkRadius <= 80) {
    for (let i = 0 + randomStart; i <= 360 + randomStart; i = i + ringDegree) {
      circle(polarX(fireworkRadius, i), polarY(fireworkRadius, i), 5)
    };
  }

  if (fireworkRadius - 20 >= 0 && fireworkRadius <= 100) {
    for (let i = 0 + randomStart; i <= 360 + randomStart; i = i + ringDegree) {
      circle(polarX(fireworkRadius - 20, i), polarY(fireworkRadius - 20, i), 5)
    };
  }

  if (fireworkRadius - 40 >= 0) {
    for (let i = 0 + randomStart; i <= 360 + randomStart; i = i + ringDegree) {
      circle(polarX(fireworkRadius - 40, i), polarY(fireworkRadius - 40, i), 5)
    };
  }

  // ---- testet auf maximal Radius des Ringes -----
  if (whatTheRadius(fireworkRadius) === 1) {
    fireworkRadius = 0;
    randomStart = Math.random() * 360
  } else if (whatTheRadius(fireworkRadius) === 0) {
    fireworkRadius += 1.5;
  }
};


// ---- testet auf maximal Radius des Ringes -----
function whatTheRadius(rTest) {
  if (rTest === 120) {
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