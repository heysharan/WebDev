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

interface User {
    name: string,
    age: number,
    email: string,
    password: string,
    createdAt: string
}

interface UpdateProps { 
    name: string,
    password: string,
    age: number
}

type updateUser = Pick<User, 'name' | 'password' | 'age' >

// (3) this is most optimal solution for this, even when the 
const updatedUser3 = (updateUser: updateUser) => {

}
// (1)
const updateUser = (name: string, password: string, age: string) => {  // Non-optimal solution, if the User interface grows these agruments also grows, so it best to keep the arguments below 5 for any given function 

}

// (2)
const updatedUser2 = (updateUser: UpdateProps) => { // this is ok, but if we update something in User interface, then we need to update the same thing in UpdateUser also, double work, its very easy to miss this

}