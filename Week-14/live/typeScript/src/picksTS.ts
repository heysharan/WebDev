// interface User{
//     name: string,
//     age: number
// }

// const sumOfAge = (user1: User, user2: User) => {
//     return user1.age + user2.age
// }

// console.log(sumOfAge({name: 'Sharan', age: 24}, {name: 'Guhan', age: 25}))

// interface User {
//     name: string,
//     age: number,
//     email: string,
//     password: string,
//     createdAt: string
// }

// type userProfile = Pick<User, 'name' | 'email'>

// const displayProfile = (user: userProfile) => {
//     console.log(`Name: ${user.name} Email: ${user.email}`)
// }

// displayProfile({name: 'Sharan', email: 'sharan@sharan.com'})

// interface User {
//     name: string,
//     age: number,
//     email: string,
//     password: string,
//     createdAt: string
// }

// interface UpdateProps { 
//     name: string,
//     password: string,
//     age: number
// }

// type updateUser = Pick<User, 'name' | 'password' | 'age' >

// // (3) this is most optimal solution for this, even when the 
// const updatedUser3 = (updateUser: updateUser) => {

// }
// // (1)
// const updateUser = (name: string, password: string, age: string) => {  // Non-optimal solution, if the User interface grows these agruments also grows, so it best to keep the arguments below 5 for any given function 

// }

// // (2)
// const updatedUser2 = (updateUser: UpdateProps) => { // this is ok, but if we update something in User interface, then we need to update the same thing in UpdateUser also, double work, its very easy to miss this

// }





















// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// const updateUser = (name: string, age: number, password: string) => {
//     // database call to update the user,  [ they can only update name, age, password ]
// }

// // problem with this approach is that, when ever something changes in the User interface, 
// // it should be updated in the updateUser function also general thumb rule for number of arguments to a function should be below 5, if it crosses that, its hard for someone to read the function
// // which can be missed at times
// // NOT THE BEST SOLUTION

// interface User { 
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// interface updateUser {
//     name: string,
//     age: number,
//     password: string
// }

// const UpdateUser = (updateUser: updateUser) => {   
//     //database call, which can only update the name, age, password in the user table 
// }

// // this method is ok, but there is a problem here too, when you change any data type or add a new field in the User table
// // it should be updated in the updateUser interface also, so again here too this small things in a very large project can be
// // missed very easily.
// // THIS SOLUTION IS OK, BUT NOT VERY OPTIMAL SINCE WE SHOULD UPDATE TWO DIFFERENT INTERFACES




// interface User {
//     id: string,
//     name: string,
//     age: number,
//     email: string,
//     password: string
// }

// type updateUser = Pick<User, 'name' | 'age' | 'password'>

// const updateUser = (updateUser: updateUser) => {
// // database call, to update name / age / password
// }

// // this is the most optimal method to update an user in the database, since we dont need to update in two different places
// // MOST OPTIMAL SOLUTION FOR THE PROBLEM 
