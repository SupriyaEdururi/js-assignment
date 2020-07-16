var marks=prompt("Enter the mark's");
//using if
 if (marks>=75) {
     console.log(`Marks are ${marks} and grade is A`);
 } else if(marks>=50 && marks<75) {
     console.log(`Marks are ${marks} and grade is B`);
 }else if(marks>=25 && marks<50) {
     console.log(`Marks are ${marks} and grade is c`);
 }else{
     console.log(`Marks are ${marks} and grade is D`);

}
//using ternary
var result=(marks>=75)?`Marks are ${marks} and grade is A`:(marks>=50 && marks<75)?`Marks are ${marks} and grade is B`:(marks>=25 && marks<50)?`Marks are ${marks} and grade is c`:`Marks are ${marks} and grade is D`;
console.log(result);
