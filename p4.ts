// Write a program that uses a while loop to print the first 10 even numbers.
console.log(`Even Numbers`);
{
  let evenNumber = 0;
  while (evenNumber < 10) {
    if (evenNumber % 2 === 0) {
      console.log(evenNumber);
      evenNumber++;
    }
    evenNumber++;
  }
}

// For Odd numbers

// console.log(`Now Odd numbers`);
// {
//   let oddNumber = 0;
//   while (oddNumber < 10) {
//     if (oddNumber % 2 != 0) {
//       console.log(oddNumber);
//       oddNumber++;
//     }
//     oddNumber++;
//   }
// }
