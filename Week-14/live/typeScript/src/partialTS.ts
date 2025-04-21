// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type updateUser = Pick<User, 'name' | 'age' | 'password'>

// const updateUserDb = (updateUser: updateUser) => {
//     // db call to update the user table, all three fields (name, age, password) is mandatory, 
//     // user should give all 3 inputs or else TS will complain
// }


// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// interface updateUser {
//     name? :string,
//     age?: number,
//     password?: string
// } 

// const updateUserDb = (updateUser: updateUser) => {
//     // db call to update the user table, all three fields (name, age, password) is optional, 
//    // user can give 1 / 2 / 3 inputs or nothing, TS will not complain
//   // THIS SOLUTION IS OK, BUT NOT VERY OPTIMAL, SAME PROBLEM AS PICK SHOULD UPDATE IN TWO PLACES IF 
//  // ANYTHING IS CHANGED OR ADDED
// }



// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type updateUser = Pick<User, 'name' | 'age' | 'password'>

// type updateUserOptional = Partial<updateUser>

// const updateUserDb = (updateUser: updateUserOptional) => {
//     // db call to update the user table, all three fields (name, age, password) is optional, 
//     // user can give 1 / 2 / 3 inputs or nothing TS will not complain
// }