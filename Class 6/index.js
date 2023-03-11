/** @format */

// const double = (x) => x * 2;
// console.log(double(99));

// const square = (x) => x * x;
// console.log(square(10));

function evenSquare(x) {
  if (x % 2 == 0) {
    return x * x;
  }
  return x;
}

const evenSquare2 = (x) => (x % 2 == 0 ? x * x : x);

const data = [
  {
    firstName: "Darren",
    lastName: "Chen",
    age: 30,
  },
  {
    firstName: "Gordon",
    lastName: "Chen",
    age: 28,
  },
  {
    firstName: "Peter",
    lastName: "Parker",
    age: 18,
  },
];

const getNumStudents = (data) => data.length;
console.log(getNumStudents(data));

const getAverageAge = (data) => {
  return data.reduce((total, student) => total + student.age / data.length, 0);
};
console.log(getAverageAge(data));
