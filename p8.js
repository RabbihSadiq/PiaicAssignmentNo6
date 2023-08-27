//Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}
var inputTemperatures = [25, 30, 15, 105, 100, 38, 39];
var fahrenheitTemperatures = [];
for (var _i = 0, inputTemperatures_1 = inputTemperatures; _i < inputTemperatures_1.length; _i++) {
    var inputTemperature = inputTemperatures_1[_i];
    var fahrenheit = celsiusToFahrenheit(inputTemperature);
    fahrenheitTemperatures.push(fahrenheit);
}
console.log("Converted temperatures in Fahrenheit:");
console.log(fahrenheitTemperatures);
