// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
var array = [
    -44, 91, -78, -41, -15, 48, 18, 84, -34, 44, 24, 87, -22, -92, -3, -58, -54,
    -20, 1, 90,
];
var count = 1;
while (count < array.length) {
    if (array[count] < 0) {
        array.splice(count, 1);
        count = count - 1;
    }
    count++;
}
count++;
console.log(array);
