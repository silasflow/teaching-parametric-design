const max = 400;
var randomStart = Math.random() * 360; // ändert den Startpunkt der Kugeln um mehr Abwechselung zu bieten
let slider;
var fireworkRadius = 1; // Radius der einzellene Kugeln

function preload() {
  data = loadJSON('Umsatz_Import_Export.json'); // Daten werden geladen

};

function setup() {
  createCanvas(max, max);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  // noLoop();

  slider = createSlider(6, data.length - 1, 1);
  slider.position(160, 400);
  slider.style('width', '80px');
};

function draw() {
  translate(max / 2, max / 2);
  data = Object.values(data);

  let arrayIndex = slider.value(); // überführt den Silder Wert in den Index fürs Array
  let visualisedData = data[arrayIndex][1]; // Tabellen Input der Visualiert wird


  explosion(visualisedData);

  // console.log(data);
  console.log('Tabellen Input: ' + visualisedData);

};

function explosion(arrayCount) {
  let segments = arrayCount / 3; // verkleinert die aus der Tabelle gezogenen Zahl
  let ring = round(segments / 3.33); // Teilt die Zahl in drei Teile, damit am Ende drei nacheinadner startende Ring, die die gesamte Zahl bilden
  let ringDegree = 360 / ring; // errechente die benötigte Grad Zahl zwischen den einzellnen Kugeln
  console.log('Gesamtzahl: ' + ringDegree);
  console.log('Kugeln im Ring: ' + ring);
  console.log('Gradzahl zwischen den Kugeln: ' + ringDegree);
  noStroke();

  // ---- erzeugt einen RIng uas Kugeln ----
  for (let i = 0 + randomStart; i <= 360 + randomStart; i = i + ringDegree) {
    fill(100);
    circle(polarX(max / 4, i), polarY(max / 4, i), 6);
    circle(polarX(fireworkRadius - 1, i), polarY(fireworkRadius - 1, i), 6)
    fill(0);
    circle(polarX(fireworkRadius, i), polarY(fireworkRadius, i), 5)
  };

  // ---- testet auf maximal Radius des Ringes -----
  if (whatTheRadius(fireworkRadius) === 1) {
    fireworkRadius = 1;
  } else if (whatTheRadius(fireworkRadius) === 0) {
    fireworkRadius++;
  }
};

// ---- testet auf maximal Radius des Ringes -----
function whatTheRadius(rTest) {
  if (rTest === max / 4) {
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