// const getMax = (nums: number[]) => {
//     let maxValue = -10000000000;
//     for(let i = 0 ; i < nums.length ; i++){
//         if(nums[i] > maxValue){
//             maxValue = nums[i]
//         }
//     }
//     return maxValue
// }

// console.log(getMax([1, 2, 3, 4, 4]))


// interface Address {
//     city: string;
//     pincode: number;
// }

// interface User {
//     name: string;
//     age: number;
//     address: Address[]
// }

// let user: User = {
//     name: 'Sharan',
//     age: 20,
//     address: [{
//         city: 'Bengaluru',
//         pincode: 560079
//     }, {
//         city: 'Chennai',
//         pincode: 600017 
//     }]
// }

// console.log(user)

// interface User {
//     firstName: string,
//     lastName: string,
//     age: number
// }


// const isLegal = (users : User[]) => {
//     return users.filter((user) => user.age >= 18)
// }

// console.log(isLegal([{
//     firstName: 'Sharan',
//     lastName: "C M",
//     age: 25 
// }, {
//     firstName: 'Guhan',
//     lastName: "C M",
//     age: 18  
// }]))