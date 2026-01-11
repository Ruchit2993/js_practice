// let a = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
let a = ['Apple', 'Banana', 'Cat', 'Dog', 'Apple', 'Dog']

// 1> Removing Duplicates from arr
// let b = []
// for(let i = 0;  i < a.length; i++){
//     // console.log(a[i])
//     let uni = a[i]
//     if(!b.includes(uni)){
//         b.push(a[i]);
//     }
// }
// console.log(b)

// 2> largest number
// let lar = Math.max(...a);
// console.log(lar)

// a.sort((a, b) => a - b);
// let max = a[a.length - 1];
// console.log(max)

// let max = a[0];
// // console.log(max)
// for (let i = 1; i < a.length; i++) {
//   if (a[i] > max) {
//     max = a[i];
//   }
// }
// console.log(max)

// 3> Second Largest number
// let b = []
// for(let i = 0;  i < a.length; i++){
//     // console.log(a[i])
//     let uni = a[i]
//     if(!b.includes(uni)){
//         b.push(a[i]);
//     }
// }
// console.log(b)
// b.sort((x, y) => x - y);
// let max = b[b.length - 2];
// console.log(max)

// let largest = -Infinity;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > largest) largest = a[i];
// }
// console.log(largest)
// let secondLargest = -Infinity;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] > secondLargest && a[i] < largest) {
//     secondLargest = a[i];
//   }
// }
// console.log(secondLargest)

// 4> Count occurrences of elements

// let count = a.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
// }, {});
// console.log(count)

// let count = {};
// for (let i = 0; i < a.length; i++) {
//   let item = a[i];
//   count[item] = (count[item] || 0) + 1;
// }
// console.log(count);

// 5> to chek arr contains all +ve num

// let res = a.every(num => num > 0);
// console.log(res)

// let res = []
// let positive = true
// for (let i = 0; i < a.length; i++) {
//     // if(a[i] > 0){
//     if (a[i] < 0)
//         // res.push("True")
//         positive = false
//         break;
// }
// // console.log(res)
// console.log(positive)

// 6> Find the first user older than 30
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 34 },
//   { name: "Charlie", age: 30 },
//   { name: "Danny", age: 31 }
// ];

// let b = users.find(user => user.age > 30);
// console.log(b);

// let i = users.findIndex(user => user.age > 30);
// let b = users[i];
// console.log(b)

// let aged = null;
// for (let user of users) {
//   if (user.age > 30) {
//     aged = user;
//     break;
//   }
// }
// console.log(aged)

// 7> find all user older than 30

// let res = users.filter(user => user.age > 30);
// console.log(res); 

// let res = [];
// for (let user of users) {
//     if (user.age > 30) {
//         res.push(user);
//     }
// }
// console.log(res);

// let res = [];
// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 30) {
//         res.push(users[i]);
//     }
// }
// console.log(res)

// 8> printing only names if users
// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 34 },
//   { name: "Charlie", age: 30 },
//   { name: "Danny", age: 31 }
// ];

// let names = []
// for(let i = 0; i < users.length; i++){
//     // console.log(users[i])
//     names.push(users[i].name)
// }
// console.log(names)

// 9> Merge two Sorted Arrays
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];

// let merged = [...arr1, ...arr2].sort((a, b) => a - b);
// console.log(merged)

// let merged = arr1.concat(arr2).sort((x,y)=> x-y)
// console.log(merged)

// 10> Find the longest string

// let longest = "";
// for (const str of a) {
//     if (str.length > longest.length) {
//         longest = str;
//     }
// }
// console.log(longest);

// let longest = a.reduce((x, y) => (x.length >= y.length ? x : y), "");
// console.log(longest); 

