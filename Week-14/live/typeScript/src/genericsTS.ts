
// type Input = number | string

// const firstEle = (arg: Input[]) => {
//     return arg[0]
// }

// const value = firstEle(['Hi', 'Hello']);

// console.log(value.toUpperCase()) // since TS is not able to infer the type of value as string automatically this operation cant be performed 



// const identity = <T>(arg: T): T => {
//     return arg
// }

// console.log(identity<string>('Sharan'))   //takes only strings as input
// console.log(identity<number>(123))        //takes only numbers as input 



// const getFirstElement = (arg: (string | number)[]) => {
//     return arg[0];
// }

// console.log(getFirstElement([1, 2, 4, 5]))
// console.log(getFirstElement([1, 2, 4, 'Sharan'])) // Problem (1) even thought this should not work ideally, but since the type of getFirstElement is number or string it works
// let el1 = getFirstElement(['Sharan', 'Dev', 'Hello'])
// console.log(el1.toUpperCase())  //Problem (2) since TS is not able to infer the type of el1 as string automatically




// const getFirstElement = <T>(arg: T[]) : T => {
//     return arg[0];
// }
 
// let el1 = getFirstElement([1, 2, 4, 5])                         // since we have not mentioned <number> or <string> the array can contain any data
// let el2 = getFirstElement(['Sharan', 'Dev', 'Hello'])
// let el3 = getFirstElement<number>([1, 2, 4, 5])                 // since we mention <number> the array can only contain numbers
// let el4 = getFirstElement<string>(['Sharan', 'Dev', 'Hello'])   //  since we mention <string> the array can only contain strings
// //let el5 = getFirstElement<string>([1, 2, 4, 5, 'Sharan'])       // this we cant do will throw error               


// console.log(el2.toUpperCase(), el1, el2, el3, el3, el4)   // now problem (2) is solved since TS is automatically able to infer the type


// const getFirstElement = <T>(arg: T[]) : T => {
//     return arg[0];
// }

// interface User { 
//     name: string
// }

// const el1 = getFirstElement<User>([{ name: 'Sharan'}, {name: 'Guhan'}])

// console.log(el1)