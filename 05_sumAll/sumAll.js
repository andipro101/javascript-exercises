const sumAll = function(num1, num2) {
   let min = 0
   let max = 0

   if ((num1 < 0 || num2 < 0) || typeof num1 !== 'number' || typeof num2 !== 'number'){
    return ("ERROR");
   }

    if (num1 < num2){
        min = num1;
        max = num2;
    }
    else{
        min = num2;
        max = num1;
    }
      
    let answer = 0;
    for (let i = min; i <= max ; i++){
        answer += i;
    }
    return answer;
}



// Do not edit below this line
module.exports = sumAll;
