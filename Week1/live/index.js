// let color = "Blue";
// let height = "6 feet";
// let pizza = "I love pizza";
// console.log(color,"\n",height,"\n",pizza);

// function sum(a, b){
//     return a+b;
// }

// console.log(sum("2","3"))

// function canVote (age){
//     if (age >= 18)
//         return true
//     else
//         return false
// }

// console.log(canVote(5))

// function evenOdd(n){
//     if(n%2==0)
//     {
//         return ("The number is even")
//     }
//     else
//         return ("The number is odd");
// }

// console.log(evenOdd(7))

// function sum (n){
//     let sum = 0;
//     for(let i = 1 ; i <= n ; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sum(100))

// let user = {
//     name : "Sharan",
//     age : 23
// }
// console.log("Hello " + user.name + " " +user.age);

// let user = {
//     name : "Priya",
//     age : 14,
//     gender : "female"
// }
// function greet (user) {
//     if (user.gender == "male"){
//         if(user.age >= 18) return ("Mr "+ user.name +", your age is "+user.age+" you can vote");
//         else return ("Mr "+ user.name +", your age is "+user.age+" you can't vote");
//     }
//     else if (user.gender == "female"){
//         if(user.age >= 18) return ("Mrs "+ user.name +", your age is "+user.age+" you can vote");
//         else return ("Mrs "+ user.name +", your age is "+user.age+" you can't vote");
//     }
//     else if (user.gender == "others"){
//         if(user.age >= 18) return ("Others "+ user.name +", your age is "+user.age+" you can vote");
//         else return ("Others "+ user.name +", your age is "+user.age+" you can't vote");
//     }
// }
// console.log(greet(user))

// let users = [{
//     firstName : "Sharan",
//     age : 23,
//     gender : "male"
// },{
//     firstName : "Ram",
//     age : 23,
//     gender : "male"
// },{
//     firstName : "Priya",
//     age : 16,
//     gender : "female"
// },{
//     firstName : "Shanthi",
//     age : 18,
//     gender : "male"
// }]

// function user(users){
//     const ans = users.filter((user) => user.age > 18 && user.gender == "male") //using filter
//     // for(let i = 0 ; i < users.length ; i++){
//     //     if(users[i].age > 18 && users[i].gender == "male")                   //using arrays
//     //     ans.push(users[i]);
//     // }
//     return ans;


// }

// console.log(user(users))

const numbers = [2,33,56,3,53,2553,533,56,35,5345];
function evenOdd(numbers){
    const ans = numbers.filter(num => num % 2 != 0)
    return ans
}
console.log(evenOdd(numbers))