const user = { name: "Ruchit", age: 22 };

//  Object.keys to print only keys
// console.log(Object.keys(user))

// Object.values
// console.log(Object.values(user))

// Object.entries() gibes entries of the obj
// console.log(Object.entries(user))

// Object.create to create seen erlier

// Object.assign to copy property of one obj to another

// Object.freeze makes the obj complete immutable 
// Object.freeze(user)
// user.name = "me"
// console.log(user)

// Object.seal using it Cannot add/delete Can update existing
// Object.seal(user);
// user.no = 23
// user.name ="me"
// console.log(user)

// Object.hasOwn checks if the user object has a direct, non-inherited property named "name". It returns a boolean value (true or false). 
// console.log(Object.hasOwn(user, "name"))

// obj.hasOwnProperty(prop);
// console.log(user.hasOwnProperty("age"))

// Object.is(a,b)  to determine if two values, a and b, are the same value
// console.log(typeof(NaN));
// console.log(NaN === NaN);
// console.log(Object.is(NaN,NaN));
// console.log(-0 === +0);
// console.log(typeof(-0),typeof(+0));
// console.log(Object.is(-0,+0))
// console.log(Object.is(2, 2));      // true
// console.log(Object.is('a', 'b')); // false
// console.log(Object.is({}, {}));     // false (different objects in memory)
// let arr1 = [];
// let arr2 = arr1;
// console.log(Object.is(arr1, arr2)); // true (same object reference)

// Object.getOwnPropertyDescriptor(obj, prop) gives property of obj
// console.log(Object.getOwnPropertyDescriptor(user, "name"))

// Object.defineProperty(obj, prop, { values & properyies }
// Object.defineProperty(user, "id", {
//   value: 101,
//   writable: false
// });

// Object.getPrototypeOf(user); to get the prototype of that obj
// console.log(Object.getPrototypeOf(user))

// Object.entries(obj) Convert object to array of entries
// let entries = Object.entries(user); 
// console.log(entries)

// Object.fromEntries(obj) Convert entries back to an object
// const newUser = Object.fromEntries(entries);
// console.log(newUser);



