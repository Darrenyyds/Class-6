/** @format */

const data = [
  {
    name: "apple",
    price: 1.5,
  },
  {
    name: "banana",
    price: 8,
  },
  {
    name: "orange",
    price: 4,
  },
  {
    name: "pear",
    price: 6,
  },
];

// Write a function that takes in an array of products and returns the total price of all the products: getTotalPrice(products) => 19.5

const getTotalPrice = (data) => {
  return data.reduce((total, product) => total + product.price, 0);
};

console.log(getTotalPrice(data));
// Write a function that takes in an array of products and returns the average price of all the products: getAveragePrice(products) => 4.875
const getAveragePrice = (data) => {
  return data.reduce(
    (total, product) => total + product.price / data.length,
    0
  );
};

console.log(getAveragePrice(data));
// Write a function that takes in an array of products and returns the most expensive product: getMostExpensiveProduct(products) => { name: 'banana', price: 8 }
function getMostExpensiveProduct(data) {
  let mostExpensive = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price > mostExpensive.price) {
      mostExpensive = data[i];
    }
  }
  return mostExpensive;
}
console.log(getMostExpensiveProduct(data));
// Write a function that takes in an array of products and returns the cheapest product: getCheapestProduct(products) => { name: 'apple', price: 1.5 }
function getlessExpensiveProduct(data) {
  let lessExpensive = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price < lessExpensive.price) {
      lessExpensive = data[i];
    }
  }
  return lessExpensive;
}
console.log(getlessExpensiveProduct(data));
// Write a function that takes in an array of products and returns the total number of products: getNumberOfProducts(products) => 4
const getNumberOfProducts = (data) => {
  return data.length;
};
console.log(getNumberOfProducts(data));
