// calcDistance
// Calculate the distance between 2 points on a cartesian / 2D map
// Credit to erebos
// https://github.com/Kaishiyoku/erebos/blob/dabf5933f88446be0babaca067c5b94e9b21c7ef/src/core/flight/calculateDistance.js
// Uses Pythagorean theorum to calculate it.
function calcDistance2d(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
}

// Similar function, but to calculate the distance between 2 points in a 3D space.
// https://dirask.com/posts/JavaScript-calculate-distance-between-two-points-in-3D-space-xpz9aD
function calcDistance3d(x1, x2, y1, y2, z1, z2) {
    var a = x2 - x1;
    var b = y2 - y1;
    var c = z2 - z1;

    return Math.sqrt(a * a + b * b + c * c);
}
