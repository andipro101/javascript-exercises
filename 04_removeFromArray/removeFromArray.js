const removeFromArray = function(array, ...itemsToRemove) {
   for(let itemToRemove of itemsToRemove){
      for (let i = 0; i < array.length; i++) {
          if (array[i] === itemToRemove) {
              array.splice(i, 1);
              i--;
          }
      }
   }
   return array;
};


// Do not edit below this line
module.exports = removeFromArray;
