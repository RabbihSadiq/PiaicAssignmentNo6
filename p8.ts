//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

const inputTemperatures: number[] = [25, 30, 15, 105, 100, 38, 39];
const fahrenheitTemperatures: number[] = [];

for (const inputTemperature of inputTemperatures) {
  const fahrenheit = celsiusToFahrenheit(inputTemperature);
  fahrenheitTemperatures.push(fahrenheit);
}

console.log("Converted temperatures in Fahrenheit:");
console.log(fahrenheitTemperatures);
