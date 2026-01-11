// generate an arrow function
// const add = (a, b) => {
//     this.c =a +b
//     // let c = a + b
//     return this.c
// }

// console.log(add(100, 500)); // Output: 600
// // console.log(c)
// console.log(this.c)
// console.log(this)


// if (true) {
//   function test() {
//     console.log("Hello");
//   }
// }

// test();
// if (false) {
//   function test2() {
//     console.log("Hello");
//   }
// }

// test2();


// make a recursive function to print 1 to 10 with out for loop and while loop

// function printNumbers(n) {
//     if (n > 10) {
//         return;
//     }
//     console.log(n);
//     printNumbers(n + 1);
// }

// printNumbers(1);

// it can be like do while loop
// function loop(n){
//     let count = n
//     console.log(count)
//     count ++;
//     if(count <=10){
//     loop(count);
//     }else console.log("printed")
// }
// loop(10)
// m = 10
// do {
//     console.log(m)
//     m++;
// }
// while(m <= 10)


// makeing a settime out in the for lop

// for(let i = 1 ; i<5; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000)
// }

// promise in for loop

// for (let i = 1; i < 5; i++) {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(i);
//         }, 1000);
//     }).then((value) => {
//         console.log(value);
//     });
// }

// settimeout in for loop with var

// for (var i = 1; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }

// promise in for loop with var

// for (var i = 1; i < 5; i++) {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(i);
//         }, 1000);
//     }).then((value) => {
//         console.log(value);
//     });
// }

// closure in for loop

// for (var i = 1; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     })(i);
// }

// for (var i = 1; i < 5; i++) {
//     // (function (i) {
//     //     setTimeout(function () {
//     //         console.log(i);
//     //     }, 1000);
//     // })(i);
//     console.log(i)
//      function print(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     }
//     print(i);
// }

// count the caharacters in a string

// let Name = "Do js Daily basis othwerwise you will forget";

// let count = {};
// for (let char of Name){
//   if(count[char]){
//     count[char]++;
//   }else {
//     count[char] = 1;
//   }
// }
// console.log(count);

// let Name = "Do js Daily basis othwerwise you will forget";

// let count = {};
// for (let char of Name){
//     if (char === ' ') {
//     continue;
//   }
//   if(count[char]){
//     count[char]++;
//   }
//   else {
//     count[char] = 1;
//   }
// //   console.log(count)
// }
// console.log(count);

// using map to count characters in a string

// let carCount = new Map();
// for(let char of Name){
//   if(carCount.has(char)){
//     carCount.set(char, carCount.get(char) + 1);
//   } else {
//     carCount.set(char, 1 );
//   }
// }
// console.log(carCount);

// using reduce to count characters in a string

// let charArray = Name.split('');

// let charCount = charArray.reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// }, {});

// console.log(charCount);

// now with out counting space

// let charArray = Name.replace(' ', '').split('');

// let charCount = charArray.reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
// }, {});

// console.log(charCount);

// now using map with out counting space

// let charCount = new Map();
// for (let char of Name) {
//   if (char !== ' ') {
//     if (charCount.has(char)) {
//       charCount.set(char, charCount.get(char) + 1);
//     } else {
//       charCount.set(char, 1);
//     }
//   }
// }
// console.log(charCount);

// const fruits = new Map([
//     ['apple', 1],
//     ['banana', 2],
//     ['cherry', 3 ]
// ])

// for(const [key, value] of fruits){
//     console.log(`${key} : ${value}`);
// }


// const deepObj = {
//     a: {
//         b: {
//             c: {
//                 d: 42
//             }
//         },
//         // e: function() {
//         //    return 'Hello, World!';
//         // },
//         f: {
//           g: {
//             h: {
//               i: 'Deep Value'
//             }
//           }
//         }
//     }
// }

// const copy = JSON.parse(JSON.stringify(deepObj));

// console.log(deepObj);

// const deepCopy = structuredClone(deepObj);
// // it will not work for fuunctions and dom elements
// console.log(deepCopy);
// console.log(deepCopy.a.b.c.d);

// pronting array 

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i = i + 1) {
//   // if((i%2)===0){
//   // continue
//   // }else{
//   console.log(arr[i])
//   // }
// }

// for(let x of arr){
//   console.log(x)
// }

// arr.push(6);
// console.log(arr)
// arr.unshift(0)
// console.log(arr)
// let x =  arr.pop();
// console.log(arr)
// console.log("x",x)
// let y = arr.shift()
// console.log(arr)
// console.log("y",y)

// splice(startindex,delindex,intems to be replaced or items)
// let x=arr.splice(2,1,7)
// console.log(arr)
// console.log("x",x, typeof(x))


// map
// let res = arr.map((x)=>{
//   // x = x*x
//   return x*x
// })
// console.log(res)