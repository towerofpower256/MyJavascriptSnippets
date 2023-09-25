//  Group array
// Group an array by one of it's properties into a multi-level array
// Credit to
// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
function groupBy(arr, key) {
    return arr.reduce(function (newArr, x) {
        (newArr[x[key]] = newArr[x[key]] || []).push(x);
        return newArr;
    }, {});
};

// Example - group by Location
var people = [
  {location: "Australia", name: "David"},
  {location: "Australia", name: "Adam"},
  {location: "Japan", name: "Katamari"}
];
groupBy(people, "location");
// {
//    "Australia": [
//        { "location": "Australia", "name": "David" },
//        { "location": "Australia","name": "Adam" }
//    ],
//    "Japan": [
//        { "location": "Japan", "name": "Katamari" }
//    ]
//}
