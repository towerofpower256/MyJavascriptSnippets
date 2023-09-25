// prettyNumber
// By David McDonald
// Make a number visually pretty by adding in commas for every thousand.
// One of me favourite functions, can't do without. If that number is a billion, I don't want to have to count out 9 zeroes.
function prettyNumber(a) {
    if (!a) return a;
    return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Example
prettyNumber(100) // 100
prettyNumber(1000) // 1,000
prettyNumber(12345678.90) // 12,345,678.90
