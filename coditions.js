// 1> Simple Condition with else is leader

// var marks = 82;
// let marks = 82;
// const marks = 82;
// if (marks >= 90) {
//     console.log("A");
// } else if (marks >= 75) {
//     console.log("B");
// } else if (marks >= 35) {
//     console.log("C");
// } else {
//     console.log("Fail");
// }
// var marks = 82; // fail beacuse the var is hoisted and identifiled as undefined and will go in the else part
// let marks = 82; // give error if defined above con will work
// const marks = 82; // same as let

// 2> can be also simplyfied by ternary 

// let marks = 32;
// let resutlt = (marks > 50 ) ? "pass":"fail";
// complex one
// let resutlt = marks >= 90  ? "A" : marks >= 75 ? "B" : marks >=35 ? "c" : "fail";
// console.log(resutlt)

// there are 6 falsy velues false 0 "" null undefined NaN

// let a = "";
// let a = null;
// let a = 0;
// let a = undefined;
// let a = NaN;

// other values that are can say that this has to be some values are called the truthy values
// let a = " ";
// let a = {};
// let a = [];
// let a = "0";
// let a = "false"; // "true"
// let a = "-1"; // any non zero numbers Infinity

// to over come this confusion alys use the === when comapring
// if(a){
//     console.log("truthy")    
// }
// else{
//     console.log("falsy")
// }

// Logical operators return values not bool
// && AND Both true then true and it gives right when left is true mean it will give first falsy or last truthy
// || OR any one ture then true but the catch is that if the first is truty then it will not check the second and gives the result
// ?? Nullish operator gives right operand if left is null or undefined result = (a !== null && a !== undefined) ? a : b;
// mean it will return the right value only when left is null or undefined will consider only null and undefined to give right value 
// other falsy values will remain truthy

// const b // error
// let b // undefined as like var
// let a = null
// let a = false
// let b ="v"
// console.log( a ?? b)

// console.log(false || "JS" && 0 || "DONE"); // 3>
// will give done beacaue it the precedence of && is high so it is grouped 
// so it will become false || ("js" && 0 ) || "Done" > false || 0 || "done"

// this gives true because it is defined as new that's why it is become an object and object is always gives truthy
// console.log(Boolean(new Boolean(false)))

