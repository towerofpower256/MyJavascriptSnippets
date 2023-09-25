// Array Sorter Functions
// By David McDonald
//
// Comparison functions to be used when using array.sort(...)

// =================
// Sort alphabetically
// =================
// Using localeCompare works better with unicode and special funky characters.
// https://stackoverflow.com/questions/28064815/in-which-cases-should-be-used-over-localecompare-and-viceversa-in-javasc
function sortCompareAlphabetically(_a, _b, descending) {
    const a = (!descending ? _a : _b);
    const b = (!descending ? _b : _a);

    return ("" + a).localeCompare("" + b);
}

// Example - Sort alphabetically, ascending A -> Z
myArray.sort((a, b) => sortCompareAlphabetically(a, b, false));

// Example - Sort alphabetically, ascending Z -> A
myArray.sort((a, b) => sortCompareAlphabetically(a, b, true));

// =================
// Sort numerically
// =================
function sortCompareNumerically(_a, _b, descending) {
    const a = (!descending ? _a : _b);
    const b = (!descending ? _b : _a);
    return (a - b);
}

// Example - Sort numerically, ascending 0 -> 9
myArray.sort((a, b) => sortCompareNumerically(a, b, false));

// Example - Sort numerically, ascending 9 -> 0
myArray.sort((a, b) => sortCompareNumerically(a, b, true));
