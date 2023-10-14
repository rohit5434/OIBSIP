function convertCelsiusToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const result = document.getElementById("result");

    // Get the Celsius value from the input
    const celsius = parseFloat(celsiusInput.value);

    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        result.innerText = `${celsius}°C is ${fahrenheit}°F`;
    } else {
        // Display an error message if the input is not a valid number
        result.innerText = "Please enter a valid number for Celsius.";
    }
}
