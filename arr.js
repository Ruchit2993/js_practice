// 1> noraml way // array literals
// let arr = [1,2,3,4,5]

// 2> new keyword 
// let man = new Array("man1","man2")
// console.log(man)

// let arr = new Array(4); // this will create one expty arry with 4 spaces
// console.log(arr)

// 3> Arrray.of()
// let arr = Array.of(4) // this will create an arry with specified ele unike above it caretes given only
// console.log(arr)

// 4> Arrry.from("steing")
// let arr = Array.from("this");
// console.log(arr)

// 5> new Array(4).fill(1)
// let arr = new Array(4).fill(1)
// console.log(arr)

// how to set ele in Array
// using ...
let s = new Set(['GFG', 'JS']);
let a = [...s];
console.log(a);
console.log(s)