let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let arr1 = [11, 12, 13, 14, 52, 16, 27, 18, 29,12]

// function sqrts(x){
//     return Math.sqrt(x)
// }

// let trs = arr.map(x => Math.sqrt(x))
// let trs = arr1.map(x => {
//     if(x > 18){
//         return x
//     } else x = 0
// })

// let trs = arr1.filter((x)=>{
//     if (x>18) return true
//     else return false 
// });
// let trs = arr1.filter((x)=> (x<18)?(x>=18): true);
// console.log(trs)

// const trs = arr1.reduce((total,x) => total + x ,0);

// console.log(add(arr1))

// console.log(trs)

// console.log(arr1.some(x => x<12))
// console.log(arr1.every(x => x<12))
// console.log(arr1.find(x => x>11))
// console.log(arr1.findIndex(x => x>11))
// console.log(arr1.findLastIndex(x => x>11))
// console.log(arr1.sort())

// let cpy = [...arr1];
// let cpy = arr1.slice();

// arr1.pop();
// console.log("arr1",arr1)
// console.log("cpy",cpy)

let arr2 = [11,[10,20],12,[30,40],13]
// let cpy = arr2.slice();
let cpy = structuredClone(arr2)
console.log("cpy",cpy)
console.log("arr2",arr2)
arr2[1].push(14);
// cpy.()

console.log("cpy",cpy)
console.log("arr2",arr2)