"use strict";
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    //   return shape.sideLength ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'rectangle':
            return shape.sideLengthA * shape.sideLengthB;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
