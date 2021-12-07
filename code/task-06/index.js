const jscad = require('@jscad/modeling')
const {
  polygon,
  line,
  arc,
  circle,
  ellipse,
  rectangle,
  cube,
  sphere,
  cylinder,
  cuboid,
  roundedCuboid,
  geodesicSphere,
  ellipsoid,
  roundedCylinder,
  cylinderElliptic,
  torus
} = jscad.primitives;
const {
  extrudeRectangular,
  extrudeLinear,
  extrudeRotate
} = jscad.extrusions;
const {
  colorize,
  colorNameToRgb
} = jscad.colors;
const {
  union,
  subtract,
  intersect,
  scission
} = jscad.booleans;
const {
  translate,
  rotate,
  scale,
  center,
  align
} = jscad.transforms;

const main = () => {
  const shapes = [];

  for (let j = 0; j <= 7; j++) {
    for (let i = 0; i <= 7; i++) {

        shapes.push(roundedCylinder({
          roundRadius: 1,
          center: [0 + 10 * i, 0 + 10 * j, 0 + 5 * j + 5 * i],
          height: 10 + 10 * i + 10 * j,
          radius: 5,
          segments: 16,
        }));

    }
  }

  const base = translate([35, 35, -10], roundedCuboid({
    size: [90, 90, 20],
    roundRadius: 3,
    segments: 14,
  }));


  const all = [shapes, base];

  return all;
};

module.exports = {
  main
};