/** @format */

const nums = [90, 100, 125, 105, 95, 127];

function getFullName = (firstName, lastName) => 
  capitalize(firstName) + " " + capitalize(lastName)

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log(getNum(1, nums));
console.log(getNum(2, nums));
console.log(getNum(3, nums));

const student1 = getFullName("PeTer", "ParkEr");
console.log(student1);
