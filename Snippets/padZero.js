// padZero
// By David McDonald
// Pad a number with the required amount of zeroes. A function beloved by all, it's been done a thousand times.
// https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// https://www.tutorialspoint.com/How-to-pad-a-number-with-leading-zeros-in-JavaScript

function padZero(a, zeroes) {
    return (""+a).padStart(zeroes, '0');
}

// Examples
padZero(9, 4); // 0009
padZero(123456, 4) // 123456
var hours = 4; var mins = 9; padZero(hours, 2)+":"+padZero(mins, 2); // 04:09
