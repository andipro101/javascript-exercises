const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(array) {
 return array.reduce((oldest, current) => {
    if(!oldest.yearOfDeath){
      oldest.yearOfDeath = new Date().getFullYear();
    };
    if(!current.yearOfDeath){
      current.yearOfDeath = new Date().getFullYear();
    };
    let currentOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    let currentYongest = current.yearOfDeath - current.yearOfBirth;
    if(currentOldest < currentYongest){
      return current;
    }
    else{
      return oldest;
    }
  })
 };




console.log(findTheOldest(people));


// Do not edit below this line
module.exports = findTheOldest;
