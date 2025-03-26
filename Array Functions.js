// Find Maximum Value
function findMax(arr) {
    return Math.max(...arr);
}

// Find Minimum Value
function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, conditionFn) {
    return arr.filter(conditionFn);
}