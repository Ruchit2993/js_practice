// 1>How to get a key in a JavaScript object by its value
// function getKeyByValue(object, value) {
//     let res = [];
//     const keys = Object.keys(object);

//     for (let i = 0; i < keys.length; i++) {
//         let prop = keys[i];
//         if (object[prop] === value) {
//             res.push(prop);
//         }
//     }
//     return res;
// }

// function getKeyByValue(object, value) {
//     let res = []
//     for (let prop in object) {
//         if (object.hasOwnProperty(prop)) {
//             if (object[prop] === value)
//                 res.push(prop)
//         }
//     }
//     return res;
// }

// const user = {
//     'name': 'me',
//     'age': 100,
//     'val': 100,
// };
// ans = getKeyByValue(user, 100);

// console.log(ans);


// 2> Convert an Array to an Object

// let a = [1, 2, 3, 4];
// let a = ["q", "w", "e", "e"];
// let b = {}
// let obj = Object.assign({}, a);
// console.log(JSON.stringify(obj));


// for (let i = 0; i < a.length; i++) {
//     b[i] = a[i];
// }
// console.log(b)
// console.log(JSON.stringify(b));


// a.forEach((value, index) => b[index] = value);
// console.log(b);



//  3> Creating an Object from Two Arrays

// let keys = ['name', 'age'];
// let values = ['Alice', 25];

// let result = keys.reduce((obj, key, index) => {
//   obj[key] = values[index];
//   return obj;
// }, {});
// console.log(result)

// let result = {};
// for (let i = 0; i < keys.length; i++) {
//   result[keys[i]] = values[i];
// }
// console.log(result);

// 4>  Grouping Objects by Property
// const students = [
//   { name: "David", sclass: "VI" },
//   { name: "Jane", sclass: "VII" },
//   { name: "Rayy", sclass: "VI" }
// ];

// const grouped = students.reduce((acc, student) => {
//   const key = student.sclass;
//   if (!acc[key]) acc[key] = [];
//   acc[key].push(student.name);
//   return acc;
// }, {});
// console.log(grouped);

// const grouped = {};
// for (const student of students) {
//   const key = student.sclass;
//   if (!grouped[key]) {
//     grouped[key] = [];
//   }
//   grouped[key].push(student.name);
// }
// console.log(grouped);

// const grouped = Object.groupBy(students, ({ sclass }) => sclass);
// console.log(grouped)


// 5>  Inverting an Object

// function invertObject(obj) {
//   const inverted = {};
//   for (const key in obj) {
//     const value = obj[key];
//     if (!inverted[value]) {
//       inverted[value] = key;
//     } else {
//       if (Array.isArray(inverted[value])) {
//         inverted[value].push(key);
//       } else {
//         inverted[value] = [inverted[value], key];
//       }
//     }
//   }
//   return inverted;
// }
// const input = { a: 1, b: 2, c: 1 };
// console.log(invertObject(input));

// function invertObject(obj) {
//     const inverted = {};
//     for (const key in obj) {
//         if (Object.hasOwn(obj, key)) {
//             const value = obj[key];
//             if (!inverted[value]) {
//                 inverted[value] = key;
//             } else {
//                 if (Array.isArray(inverted[value])) {
//                     inverted[value].push(key);
//                 } else {
//                     inverted[value] = [inverted[value], key];
//                 }
//             }
//         }
//     }
//     return inverted;
// }
// const input = { a: 1, b: 2, c: 1 };
// console.log(invertObject(input));

// 6> 

