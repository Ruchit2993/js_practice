let arr = [
  {
      "name": "bob",
      "order": [
          {"amount": 400, "status": "delivered"},
          {"amount": 200, "status": "delivered"},
          {"amount": 500, "status": "returned"}
      ]
  }  ,
  {
      "name": "John",
      "order": [
          {"amount": 400, "status": "delivered"},
          {"amount": 500, "status": "returned"}
      ]
  }  
];

// [
//     {name: "bob", totalDeliveredAmount: 600},
//     {name: "John", totalDeliveredAmount: 400}
// ]

let res = []


// for(let i = 0; i < arr.length; i++){
//     // console.log(arr[i])
//     let obj = { "name": arr[i].name, "Total": 0 }
//     // console.log(obj)
//     for(let j = 0; j < arr[i].order.length; j++){
//         // console.log(arr[i].order.length)
//         // console.log(arr[i].order[j])
//         // console.log(arr[i].order[j].status)
//         if(arr[i].order[j].status === "delivered"){
//             // console.log(arr[i].order[j].amount)
//             // console.log(obj.Total)
//             obj.Total += arr[i].order[j].amount
//         }
//     }
//     res.push(obj)

// }
// console.log(res)


// for(let a of arr){
//     // console.log(a)
//     // console.log(a.name)
//     let obj = {"name": a.name, "Total": 0}
//     // console.log(obj)
//     for (let b of a.order){
//         // console.log(b.status)
//         if(b.status === "delivered"){
//             // console.log(b.amount)
//             obj.Total += b.amount
//         }
//     }
//     res.push(obj)
// }
// console.log(res)


// let resp = arr.forEach((a) => {
//     // console.log(a)
//     let obj = { "name" : a.name , "Total": 0}
//     // console.log(obj)
//     a.order.forEach((b)=>{
//         // console.log(b)
//         if(b.status === "delivered"){
//             // console.log(b.amount)
//             obj.Total += b.amount
//         }
//     })
//     res.push(obj)
// })
// // console.log(resp)
// console.log(res)

// let resp = arr.map((a) =>{
//     // console.log(a)
//     let obj ={ "name": a.name, "Total": 0}
//     // console.log(obj)
//     a.order.map((b)=>{
//         // console.log(b)
//         if(b.status === "delivered"){
//             obj.Total += b.amount
//         }
//     })
//     // return obj
//     // res.push(obj)
// })
// console.log(resp);
// console.log(res)

// let resp = arr.map((a) =>{
//     // console.log(a)
//     let obj ={ "name": a.name, "Total": 0}
//     // console.log(obj)
//     a.order.reduce((sum ,b)=>{
//         // console.log(b)
//         if(b.status === "delivered"){
//             // sum += b.amount
//             obj.Total +=b.amount
//         }
//     },0)
//     // return obj
//     res.push(obj)
// })
// // console.log(resp);
// console.log(res)