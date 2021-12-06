const max = 400;

function setup() {
  createCanvas(max, max);
};

function draw() {
  if (mouseY <= max && mouseY >= max/30) {
    let f = mouseY / max;
    let startX = mouseX,
      startY = mouseY;

    background(255);
    fill(255 / max * mouseX);
    stroke(255 / max * mouseX);
    beginShape();
    vertex(startX + (77 - startX) * f, startY + (107.5 - startY) * f);
    bezierVertex(startX + (95 - startX) * f, startY + (85.5 - startY) * f, startX + (157.5 - startX) * f, startY + (63 - startY) * f, startX + (212 - startX) * f, startY + (63 - startY) * f);
    bezierVertex(startX + (260 - startX) * f, startY + (63 - startY) * f, startX + (301 - startX) * f, startY + (80 - startY) * f, startX + (301 - startX) * f, startY + (129 - startY) * f);
    bezierVertex(startX + (301 - startX) * f, startY + (129 - startY) * f, startX + (301 - startX) * f, startY + (129 - startY) * f, startX + (301 - startX) * f, startY + (230 - startY) * f);
    bezierVertex(startX + (301 - startX) * f, startY + (252 - startY) * f, startX + (314 - startX) * f, startY + (266 - startY) * f, startX + (334 - startX) * f, startY + (266 - startY) * f);
    vertex(startX + (334 - startX) * f, startY + (337 - startY) * f);
    vertex(startX + (289 - startX) * f, startY + (337 - startY) * f);
    vertex(startX + (289 - startX) * f, startY + (252 - startY) * f);
    bezierVertex(startX + (262.5 - startX) * f, startY + (310 - startY) * f, startX + (221 - startX) * f, startY + (337 - startY) * f, startX + (159 - startX) * f, startY + (337 - startY) * f);
    bezierVertex(startX + (99 - startX) * f, startY + (337 - startY) * f, startX + (66 - startX) * f, startY + (311 - startY) * f, startX + (66 - startX) * f, startY + (263 - startY) * f);
    bezierVertex(startX + (66 - startX) * f, startY + (221 - startY) * f, startX + (95.5 - startX) * f, startY + (190.5 - startY) * f, startX + (138 - startX) * f, startY + (190 - startY) * f);
    vertex(startX + (289 - startX) * f, startY + (190 - startY) * f);
    bezierVertex(startX + (265.5 - startX) * f, startY + (154 - startY) * f, startX + (233 - startX) * f, startY + (136 - startY) * f, startX + (191 - startX) * f, startY + (136 - startY) * f);
    bezierVertex(startX + (158.5 - startX) * f, startY + (136 - startY) * f, startX + (119.5 - startX) * f, startY + (148 - startY) * f, startX + (77 - startX) * f, startY + (172 - startY) * f);
    endShape(CLOSE);

    fill("white");
    beginShape();
    vertex(startX + (289 - startX) * f, startY + (202 - startY) * f);
    bezierVertex(startX + (262.5 - startX) * f, startY + (250.5 - startY) * f, startX + (205 - startX) * f, startY + (269 - startY) * f, startX + (159 - startX) * f, startY + (268 - startY) * f);
    bezierVertex(startX + (122 - startX) * f, startY + (269 - startY) * f, startX + (92.5 - startX) * f, startY + (256.5 - startY) * f, startX + (92 - startX) * f, startY + (238 - startY) * f);
    bezierVertex(startX + (92.5 - startX) * f, startY + (222 - startY) * f, startX + (113 - startX) * f, startY + (203.5 - startY) * f, startX + (132 - startX) * f, startY + (203 - startY) * f);
    endShape(CLOSE);
  }
};