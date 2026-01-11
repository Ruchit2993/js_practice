// How to get a key in a JavaScript object by its value
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


// ----------------------------------- Convert an Array to an Object

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



//  ----------------------------------
