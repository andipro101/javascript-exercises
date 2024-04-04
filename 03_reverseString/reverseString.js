const reverseString = function(givenString) {
    let splitString = givenString.split("");
    let reveseArray = splitString.reverse("");
    let joinArray = reveseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
