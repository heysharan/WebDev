/* interface with objects in ts */

// (1)
// interface User {
//     name: string,
//     age: number,
//     address: {
//         city: string,
//         country: string,
//         pincode: number
//     }
// }

// let user: User = {
//     name: 'Sharan',
//     age: 24,
//     address: {
//         city: 'Bengaluru',
//         country: 'India',
//         pincode: 560079
//     }
// }

// const isLegal = (user: User): boolean => {
//     return user.age >= 18
// }

// console.log(isLegal(user))


// (2)
// interface User {
//     name: string,
//     age: number,
//     address?: {          //this make address optional, i.e., you can either define everything, or can avoid it you completely but cant define partially meaning [ address: { pincode: 560079 } ] 
//         city?: string,     
//         country?: string,
//         pincode: number
//     }
// }

// let user: User = {
//     name: 'Sharan',
//     age: 24
// }

// const isLegal = (user: User): boolean => {
//     return user.age >= 18
// }


// console.log(isLegal(user))



// (3)
// interface User {
//     name: string,
//     age: number,
//     address?: {          
//         city?: string,        //if want make address opptional and inside that you only want pincode, then make the other two fields optional, so when defining the address only pincode is compulsory and city and country is optional 
//         country?: string,
//         pincode: number
//     }
// }

// let user: User = {
//     name: 'Sharan',
//     age: 24,
//     address: {
//         pincode: 560079
//     }
// }

// const isLegal = (user: User): { isLegal: boolean , pincode?: number } => {
//     return {
//         isLegal: user.age >= 18, 
//         pincode: user.address?.pincode
//     }
// }


// console.log(isLegal(user))


// (4)
// interface Address {    // we are using a seperate interface for address since both home and office address requirement is the same, so we can avoid code repetition
//     city: string,      
//     country: string,
//     pincode: number
// }

// interface User {
//     name: string,
//     age: number,
//     address: Address  // using Address the as type 
// }

// interface Office {
//     address: Address  //using Address as the type
// }

// let user: User = {
//     name: 'Sharan',
//     age: 24,
//     address: {
//         city: 'Bengaluru',
//         country: 'India',
//         pincode: 560079
//     }
// }

// let office: Office = {
//     address: {
//         city: 'Chennai',
//         country: 'India',
//         pincode: 600017
//     }
// }

// const userProfile = (user: User, office: Office): { name: string, age: number, houseCity: string, houseCountry: string, housePincode: number, officeCity: string, officeCountry: string, officePincode: number} => {
//     return {
//         name: user.name,
//         age: user.age,
//         houseCity: user.address.city,
//         houseCountry: user.address.country,
//         housePincode: user.address.pincode,
//         officeCity: office.address.city,
//         officeCountry: office.address.country,
//         officePincode: office.address.pincode
//     }
// }
// console.log(userProfile(user, office))


/* interface implemented in class in ts */

// (1)
// interface People {
//     name: string,
//     age: number,
//     greet: () => string
// }

// let person: People = {
//     name: 'Sharan',
//     age: 24,
//     greet: () => {
//         return 'Hi there'
//     }
// }

// console.log(person.greet())

// (2)
// interface People {
//     name: string,
//     age: number,
// }

// class Manager implements People {
//     constructor(public name: string, public age: number) {
//         this.name = name,
//         this.age = age
//     }
// }

// const someone = new Manager('Sharan', 22)

// console.log(someone.name)
// console.log(someone.age)


// (3)
// interface People {
//     name: string,
//     age: number,
//     isLegal(): boolean
// }

// class Manager implements People {
//     constructor(public name: string, public age: number) {
//         this.name = name,
//         this.age = age
//     }

//     isLegal() {
//         return this.age >= 18
//     }
// }

// const someone = new Manager('Sharan', 17)

// console.log(someone.name)
// console.log(someone.age)
// console.log(someone.isLegal())


/* extends in class */


// (1)
// interface People {
//     name: string,
//     age: number,
//     isLegal(): boolean
// }

// class Manager implements People {
//     constructor(public name: string, public age: number) {
//         this.name = name,
//         this.age = age
//     }

//     isLegal() {
//         return this.age >= 18
//     }
// }


// class ManagerLevel extends Manager {
//     level: string;
//     role: string;

//     constructor() {
//         super('Sharan', 22) //this calls the parent constructor 
//         this.level = 'L4',
//         this.role = 'SDE4'
//     }
// }

// const someone = new ManagerLevel()

// console.log(someone.name)
// console.log(someone.age)
// console.log(someone.level)
// console.log(someone.role)
// console.log(someone.isLegal())


// (2)
// class Manager {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name,
//         this.age = age
//     }

//     isLegal() {
//         return this.age >= 18
//     }
// }


// class ManagerLevel extends Manager {
//     level: string;
//     role: string;

//     constructor(props : {name: string; age: number; level: string; role: string}) {
//         super(props.name, props.age); //this calls the parent constructor i.e the Manager class with the name and age
//         this.level = props.level,
//         this.role = props.role
//     }
// }

// const someone = new ManagerLevel({
//     name: 'Sharan',
//     age: 24,
//     level: 'L4',
//     role: 'SDE4'
// })

// console.log(someone.name, someone.age, someone.level, someone.role, someone.isLegal())


// (3)
// class Shape {
//     area = () =>  {
//         return 'Hi Im the area from Shape Class'
//     }
// }

// class Rectangle extends Shape {
//     width: number;
//     height: number;

//     constructor() {
//         super();
//         this.width = 10;
//         this.height = 10
//     }
// }

// const r = new Rectangle();

// console.log(r.width, r.height, r.area())




/* abstract class vs interface */

// abstract class User { 

//     constructor (public name: string) {
//         this.name = name
//     }

//     abstract greet: () => string
//     hello = () => {
//         return 'Hello from abstract User class'
//     }
// }

// class Employee extends User {
    
//     constructor(public name: string) {
//         super(name)
//         this.name = name
//     }

//     greet = () => {
//         return `Hello ${this.name}`
//     }
// }

// const u = new Employee('Sharan')
// console.log(u.hello(), u.name, u.greet())




// interface User { 
//     name: string
//     greet: () => string
//     hello: () => string

// }

// class Employee implements User {
    
//     constructor(public name: string) {
//         this.name = name
//     }

//     hello = () => {
//         return 'Hello from abstract User class'
//     }
//     greet = () => {
//         return `Hello ${this.name}`
//     }
// }

// const u = new Employee('Sharan')
// console.log(u.hello(), u.name, u.greet())