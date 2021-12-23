const max = 400;
let data,
  button;

function preload() {
  // data = loadJSON('statistic_id1224_arbeitslosenquote-in-deutschland-bis-2021 2.json');
  // data = loadJSON('statistic_id273406_lebenserwartung-in-deutschland-bei-geburt-nach-geschlecht.json');
  data = loadJSON('statistic_id2229_mordopfer-in-deutschland-bis-2020.json');
  // data = loadJSON('statistic_id427067_instagram-accounts-mit-den-meisten-followern-weltweit-im-november-2021.json');
  // data = loadJSON('statistic_id1365_bevoelkerung-deutschlands-nach-relevanten-altersgruppen-2020.json');
  // data = loadJSON('statistic_id2112_veraenderung-des-bruttoinlandsprodukts-im-vergleich-zum-vorjahr-bis-2020.json');
  // data = loadJSON('statistic_id5573_niederschlagsmenge-in-deutschland-bis-november-2021.json');


}

function setup() {
  createCanvas(max, max, SVG);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);
  noLoop();
  button = createButton('SAVE');
  button.position(0, 400);
  button.mousePressed(saveAll);
};

function draw() {
  translate(200, 200);
  // beginShape();
  // vertex(-2, -2);
  // vertex(2, 2);
  // endShape();
  // beginShape();
  // vertex(2, -2);
  // vertex(-2, 2);
  // endShape();
  // let table = data.values();
  // const table = [32, 28, 23, 18, 25, 20];
  data = Object.values(data);
  console.log(data);
  noFill();
  let f = 0.3;
  index = 1;
  let z = data.length;


  // beginShape();
  // curveVertex(0 * 10 - 100, data[0][index] * f -100);
  // for (let j = 0; j < data.length; j++) {
  //   curveVertex(j * 10 - 100, data[j][index] * f -100);
  //   circle(j * 10 - 100, data[j][index] * f -100,1);
  // };
  // curveVertex(z * 10 - 100, data[0][index] * f - 100);
  // endShape();

  beginShape();
  for (let j = 0; j < data.length; j++) {
    var i = j * (360 / data.length);
    curveVertex(polarX(data[j][index] * f, i), polarY(data[j][index] * f, i));
    console.log(i);
    console.log(j);
  };
  curveVertex(polarX(data[0][index] * f, 0), polarY(data[0][index] * f, 0));
  curveVertex(polarX(data[1][index] * f, 1 * (360 / data.length)), polarY(data[1][index] * f, 1 * (360 / data.length)));
  curveVertex(polarX(data[2][index] * f, 2 * (360 / data.length)), polarY(data[2][index] * f, 2 * (360 / data.length)));
  endShape();

};

function polarX(radius, degree) {
  let x = radius * cos(degree);
  return x;
}

function polarY(radius, degree) {
  let y = radius * sin(degree);
  return y;
}

function saveAll() {
  save();
}