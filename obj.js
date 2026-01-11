// let user = {"name": "me","age": 23, };
// console.log(user["age"]);
// user["age"] = 24;
// console.log(user["age"]);
// user["nm"] = 15;
// console.log(user);

// let users = [{"name": "me", "age": 12},{"name": "you", "age": 21}];
// console.log(users)


// 1> nomal way above
// 2> new key word

// let cat = new Object();
// cat.type = "pet";
// cat.color ="black"
// console.log(cat

// 3> letructor function
// function dogs(type, color){
//     this.type = type
//     this.color = color
// }
// let dog = new dogs("wild","black")
// console.log(dog)

// 4> Object.assign
// let a = { x : 1}
// let b = { y : 1}
// let c = Object.assign(a,b)
// console.log(c)

// 5> ES6 Classes
// class car {
//   letructor(seater, model) {
//     this.seater = seater;
//     this.model = model;
//   }
//   horn() {
//     console.log("side");
//   }
// }
// let maruti = new car("5", "800");
// maruti["slogan"] = function(){
//     console.log("the god")
// }
// console.log(maruti);
// maruti.slogan();

// 6> Factory function
// function createRobot(name) {
//   return {
//     name: name,
//     type: "Android",
//     identify() {
//       console.log(`I am ${name}`);
//     }
//   };
// }
// let bot1 = createRobot("Data");
// console.log(bot1)

// 7> obj Decentralize
// let jsonString = '{"name": "asd", "role": "Dev"}';
// let navigator = JSON.parse(jsonString);
// console.log(navigator)

// 8> Object.create
// let colors = {
// //   paint: function() {
// //     console.log("painted");
// //   }
// };

// let red = Object.create(colors);
// red.att = "angry";
// console.log(red)

// Modify Object's Property in an Array of Objects

// let a = [
//     { name: "Dev", age: 13 },
//     { name: "It", age: 15 }
// ];

// let res = a.map(item => {
//     if (item.name === "Dev") {
//         // item.age = 14;
//         item.name = "DEV"
//     }
//     return item;
// });
// console.log(res);

// let res = []
// for(let i = 0; i < a.length; i++){
//     // console.log(a[i])
//     if(a[i].name === "It"){
//         a[i].age = 23
//     }
//     res.push(a[i])
// }
// console.log(res)

// let res = []
// for (arr of a) {
//     // console.log(arr)
//       if(arr.name === "It"){
//         arr.age = 23
//     }
//     res.push(arr)
// }
// console.log(res)

// let res = a.forEach((arr)=>{
//     console.log(arr)
// })
// console.log(res)

// let res = a.reduce((acc, item) => {
//     if (item.name === "It") {
//         item.age = 23;
//     }
//     acc.push(item);
//     return acc;
// }, []);
// console.log(res)

// How to Remove Duplicates from an Array of Objects in JavaScript

const a = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 1, name: "Apple" },
    { id: 3, name: "Banana" },
    { id: 4, name: "Apple" }
];


// const uni = [];
// for (let i = 0; i < a.length; i++) {
//   let Dupli = false;
//   for (let j = 0; j < uni.length; j++) {
//     // if (a[i].id === uni[j].id) {
//     //   Dupli = true;
//     //   break;
//     // }
//     if (a[i].name === uni[j].name) {
//       Dupli = true;
//       break;
//     }
//   }
//   if (!Dupli) {
//     uni.push(a[i]);
//   }
// }
// console.log(uni);

// const uni = [];
// for (b of a) {
//     // console.log(b)
//     let Dupli = false;
//     for (c of uni) {
//         // console.log(c)
//         if(b.id === c.id){
//             Dupli = true
//             break;
//         }
//     }
//     if(!Dupli){
//         uni.push(b)
//     }
// }
// console.log(uni)


// Remove Array Element Based on Object Property in JavaScript

// let a = [{ id: 1, name: 'Cat' },{ id: 2, name: 'Rat' },{ id: 3, name: 'Dog' }];

// let res = a.filter(a => a.id !== 2);
// console.log(res);

// let res = []
// for(let i =0; i<a.length; i++){
//     // console.log(a[i])
//     if(a[i].id === 1){
//         continue
//     }
//     res.push(a[i])
// }
// console.log(res)
