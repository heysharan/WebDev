/* types - union */

// type GoodUser = {
//     name: string;
//     gift: string
// }

// type BadUser = {
//     name: string;
//     ip: string;
// }

// type User = GoodUser | BadUser;

// const user: User = {
//     name: 'Sharan',
//     gift: '1234',
//     ip: '192.168.1.1'
// }

// console.log(user)

/* types - intersection */

// type Employee = {
//     name: string;
//     startDate: string;
// }

// type Manager = {
//     name: string;
//     department: string;
// }

// type TeamLead = Employee & Manager;

// let e: Employee = {
//     name: 'Sharan',
//     startDate: '01-02-2005'
// }

// let m: Manager = {
//     name: 'Ram',
//     department: 'SDE'
// }

// let t: TeamLead = {
//     name: 'Sharan',
//     startDate: '01-02-2007',
//     department: 'SDE'
// }

// console.log(e)
// console.log(m)
// console.log(t)