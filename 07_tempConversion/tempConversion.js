const convertToCelsius = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    if (celsius % 1 !== 0){
        celsius = celsius.toFixed(1)
    }
    return(Number(celsius));

};

const convertToFahrenheit = function(celsius) {
    let fahrenheit = (9/5 * celsius) + 32;
    if (fahrenheit % 1 !== 0){
        fahrenheit = fahrenheit.toFixed(1)
    }
    return(Number(fahrenheit));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
