const palindromes = function (word) {
    const punctuationRegex = /[^a-zA-Z0-9]/g;
    
    const wordWithoutPunct = word.toLowerCase().replace(punctuationRegex, "")
    let wordReverse = wordWithoutPunct.split("").reverse().join("")
    if(wordWithoutPunct == wordReverse){
        return true;
    }
    else{
        return false;
    }
};
palindromes('r3ace3car')

// Do not edit below this line
module.exports = palindromes;
