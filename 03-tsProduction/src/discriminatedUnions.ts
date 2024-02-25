interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

interface Rectangle {
  kind: 'rectangle';
  sideLengthA: number;
  sideLengthB: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  //   return shape.sideLength ** 2;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;

    case 'square':
      return shape.sideLength ** 2;

    case 'rectangle':
      return shape.sideLengthA * shape.sideLengthB;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
