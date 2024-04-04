const repeatString = function(givenString,repeatNumber) {
    let string = ""
    if (repeatNumber < 0){
        string = "ERROR";
    }
    for(let i = 0;i < repeatNumber; i++){
    string += givenString;
    }
    return string
};

// Do not edit below this line
module.exports = repeatString;
