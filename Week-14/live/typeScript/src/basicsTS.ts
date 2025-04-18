// (1) - assign types to variable x
// let x: number | string = 1;
// x = 'Sharan'
// console.log(x)


// (2) - function implementation with type of input to function but no return type for the fucntion
// const firstProgram = (firstName : string) => {
//     console.log(`Hello ${firstName}`)
// }
// firstProgram('Sharan')


// (3) basic function
// const sum = (a: number, b: number) => {
//     return a + b
// }
// console.log(sum(2, 4))

// (4) basic function
// const user = (age: number) => {
//     if(age > 18) return true
//     else return false
// }
// console.log(user(23));


// (5) - function implementation with type of input to function and return type for the fucntion
// const callBackFn = (fn: () => void) => {
//     setTimeout(fn, 1000)
// }
// callBackFn(() => {
//     console.log('Hi there from setTimout')
// })

// (6) - function implementation with type of input to function and return type for the fucntion
// const delayedCall = (fn: (a: string) => void) => {
//     return setTimeout(fn, 1000)
// }
// const greet = (firstName: string) => {
//     console.log(`Hello ${firstName}`)
// }
// delayedCall(() => greet('Sharan'))





















