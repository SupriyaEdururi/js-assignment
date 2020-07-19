const student={name:'suppi',
age:20,
projects:{diceGame:"Two player dice game using javaScript"}
};
// Destructuring objects
const {name,age,projects:{diceGame}}=student;
console.log(`This is ${name} , my age is ${age} and my project is ${diceGame}`);

