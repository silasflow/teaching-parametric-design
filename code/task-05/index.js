const jscad = require('@jscad/modeling')
const {
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
  const block = cuboid({
    size: [20, 10, 15],
    center: [0, 0, 7.5]
  });

  const singleWindow = cuboid({
    size: [1, 0.5, 1.5],
    center: [0, 0, 0]
  });

  const windows1 = [];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i <= 8; i++) {
      windows1.push(translate([-8 + 2 * i, -5, 2 + 5 * j], singleWindow));
    }
  }

  const windows2 = translate([0, 10, 0], windows1)

  const allWindows = [windows1, windows2];
  const unionWindows = union(allWindows);

  const blockWindows = [block, unionWindows];
  const subtractBlockWindows = subtract(blockWindows);


  const roof = ellipse({
    center: [0, 0],
    radius: [6, 3],
    startAngle: 0,
    endAngle: Math.PI,
    segments: 5
  });
  const extrudeRoof = extrudeLinear({
    height: 20
  }, roof);
  const rotateRoof = rotate([
      Math.PI / 2, 0, Math.PI / 2
    ],
    extrudeRoof
  );
  const roofTop = translate([-10, 0, 15], rotateRoof)

  const chimney = cylinder({
    center: [3, 2, 18],
    height: 4,
    radius: 0.5,
    segments: 32
  })

  const house = [subtractBlockWindows, roofTop, chimney];
  return house;
  // return rotate([-Math.PI / 2, 0, 0], house);
};

module.exports = {
  main
};