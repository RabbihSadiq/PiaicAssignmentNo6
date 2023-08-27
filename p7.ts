// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
function arraySum(arr: number[] = [8, 96, 5, 9, 4, 4, 5, 3, 1, 6, 5]) {
  let count = 0;
  let sum = 0;
  while (count < arr.length) {
    sum += arr[count];
    count++;
  }
  return sum;
}
console.log(arraySum());
