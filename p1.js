//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function insertValueInIndex(array, index, value) {
  array.splice(index, 0, value);
  return array;
}
var originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newIndex = 2;
var newValue = 69;
var modifiedArray = insertValueInIndex(originalArray, newIndex, newValue);
console.log(modifiedArray);
