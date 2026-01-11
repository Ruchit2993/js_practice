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
// 1> using ...
// let s = new Set(['GFG', 'JS']);
// let a = [...s];
// console.log(a);
// console.log(s);

// 2> using Array.from()
// const s = new Set([1, 1, 2, 3, 4, 4, 5, 6, 5]);
// let a = Array.from(s);
// console.log(a);
// console.log(s)

// 3> forEach loop
// let s = new Set(['GFG', 'JS']);
// let a = [];
// s.forEach((x) => {
//     a.push(x)
// });
// console.log(a);

//  Inserting & Deleting an ele in array
let a = [10, 20, 30, 40];
let y = a.push(50)
let x = a.unshift(50);
let z = a.splice(pos = 2,del = 0,ele = 50)
// a.splice(pos = 2,del = 0,ele1 = 60, ele2 = 70)
console.log(a);
console.log("Unshift",x)
console.log("Push",y)
console.log("Splice",z)
// let w = a.shift()
// let v = a.pop()
// let u = a.splice(idx = 0, del =1 )
// console.log(a)
// console.log(u)
// console.log(v)
// console.log(w)
// Delete First Occurrence from a JS Array
// let idx = a.indexOf(50);
// let idx = a.lastIndexOf(50);
// if (idx !== -1) {
//   a.splice(idx, 1);
// }
let res = a.filter(e => e !== 50);
console.log(a);
console.log(res)