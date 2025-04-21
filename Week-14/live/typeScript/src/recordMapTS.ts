// type User = {
//     id: string,
//     username: string
// }

// type Users = {
//     [key: string]: User
// }

// const users: Users = {
//     "hi@something.com" : {
//         id: "hi@something.com",
//         username: 'Something'
//     },
//     "hello@something.com" : {
//         id: "hi@something.com",
//         username: 'Something'
//     }
// }



// type User = {
//     id: string,
//     username: string
//     age: number
// }

// type Users = Record<string, User>

// const users: Users = {
//     "hi@something.com" : {
//         id: "hi@something.com",
//         username: 'Something',
//         age: 24
//     },
//     "hello@something.com" : {
//         id: "hi@something.com",
//         username: 'Something',
//         age: 35
//     }
// }



// type User = {
//     id: string,
//     username: string
//     age: number
// }

// type Users = Record<string, User>

// const users: Users = {
//     "hi@something.com" : {
//         id: "hi@something.com",
//         username: 'Something',
//         age: 24
//     },
//     "hello@something.com" : {
//         id: "hi@something.com",
//         username: 'Something',
//         age: 35
//     }
// }

// //to get the age of the first user
// const user1Age = users['hi@something.com'].age

// //update the age of the first user
// const user1UpdateAge = users['hi@something.com'].age = 25



// const users = new Map()

// //setting the key: value pairs for the users variables
// users.set("hi@something.com", { id: "hi@something.com", username: 'Something', age: 24 })
// users.set("hello@something.com", { id: "hello@something.com", username: 'Something', age: 34 })

// //gets the value of the this key
// users.get('hello@something.com')

// //deletes this key
// users.delete('hello@something.com')

// //checks if the key exists
// console.log(users.has('hello@something.com')) 


interface User {
    id: string, 
    username: string, 
    age: number
}

const users = new Map<string, User>()  // <string, User> - this makes sure that User interface model is followed while setting values

//setting the key: value pairs for the users variables
users.set("hi@something.com", { id: "hi@something.com", username: 'Something', age: 24 })
users.set("hello@something.com", { id: "hello@something.com", username: 'Something', age: 34 })

//gets the value of the this key
console.log(users.get('hello@something.com'))

//deletes this key
console.log(users.delete('hi@something.com'))

//checks if the key exists
console.log(users.has('hello@something.com')) 