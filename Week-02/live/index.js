// function sum (a, b){
//     return a+b
// }

// console.log(sum(4,5));

// function sum (n) {
//     let sum = 0;
//     for(let i = 1 ; i <= n ; i++)
//     {
//         sum += i;
//     }
//     return sum;

//    // return n * (n + 1); // mathematical formula
// }

// console.log(sum(100))
// console.log(sum(1000))
// console.log(sum(10000))

// const fs = require('fs');

// const contents = fs.readFileSync('a.txt', 'utf-8')
// console.log(contents+' Sync');
// const contents1 = fs.readFileSync('b.txt', 'utf-8')
// console.log(contents1+' Sync')

// fs.readFile('a.txt', 'utf-8', function(err, data){
//     console.log(data);
// })
// fs.readFile('b.txt', 'utf-8', function(err, data){
//     console.log(data);
// })

// console.log('Done!')

// function sum(a, b) {
//     return a + b;
//   }
  
//   function multiply(a, b) {
//     return a * b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   function divide(a, b) {
//     return a / b;
//   }
  
//   function doOperation(a, b, op) {
//     return op(a, b)
//   }
  
//   console.log(sum(1, 2))


// class Rectangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     paint() {
//         return this.color;
//     }
// }

// const rect = new Rectangle(2,4,'Blue')
// const area = rect.area();
// const color = rect.paint()
// console.log(area,color)

// class circle {
//     constructor (radius, color){
//         this.radius = radius;
//         this.color = color;
//     }    
//     area() {
//         return parseFloat((this.radius * this.radius * Math.PI).toFixed(2));
//     } 
//     paint() {
//         return this.color;
//     }   
// }

// const circ = new circle(5,'blue');
// const area = circ.area()
// const paint = circ.paint();
// console.log(area,paint)

// class shape {
//     constructor(color) {
//         this.color = color;
//     }
//     paint(){
//         return this.color;
//     }
//     area(){
//         throw new Error('The area method must be implemented in the subclass')
//     }
//     getDetails(){
//         return `A Shape with color : ${this.color}`;
//     }
// }

// const newShape = new shape('green');
// const getDetails = newShape.getDetails();
// console.log(getDetails)

// class rectangle extends shape {
//     constructor(width, height, color){
//         super(color);
//         this.width = width;
//         this.height = height;
//     }
//     area(){
//         return `Area of the Rectangle : ${this.width * this.height}`;
//     }
//     getDetails() {
//         console.log(super.getDetails());
//         return `A Rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
//     }
// }

// const rect = new rectangle (4,5,'blue');
// const rectArea = rect.area();
// const rectDetails = rect.getDetails();
// console.log(rectArea,rectDetails);

// class circle extends shape {
//     constructor(radius,color){
//         super(color);
//         this.radius = radius;
//     }
//     area(){
//         return `Area of circle : ${parseFloat((this.radius * this.radius * Math.PI).toFixed(2))}`
//     }
//     getDetails(){
//         console.log(super.getDetails());
//         return `The radius of the circle is ${this.radius} and the color is ${this.color}`;
//     }
// }

// const circ = new circle(6,'red');
// const circArea = circ.area();
// const circDetails = circ.getDetails();
// console.log(circArea, circDetails)



// const date = new Date();
// console.log(date.getMonth())


// const map = new Map();
// map.set('firstName','Sharan')
// map.set('age', 23);
// console.log(map.get('firstName'));



// function callback(){
// 	console.log('3 Seconds have passed')
// }
// setTimeout(callback, 3000);



// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
//     console.log('3 Seconds have passed')
// }

// setTimeoutPromisified(3000).then(callback)
// const fs = require('fs');



// const fs = require('fs');

// function fsreadPromisified(fileName) {
//     return new Promise((resolve,reject) => {
//         fs.readFile(fileName, 'utf-8', (err,data) => {
//             if(err){
//                 return reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// fsreadPromisified('a.txt').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error('Error reading file:', err);
// })


// const fs = require('fs');

// function fsreadFilePromisified(fileName) {
//     return new Promise((resolve,reject) => {
//         fs.readFile(fileName,'utf-8', (err,data) => {
//             if(err){
//                 reject(err);
//             }
//             resolve(data);
//         });
//     });
// }

// fsreadFilePromisified('a.txt').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);
// })

// const fs = require('fs');

// function cleanFile(filePath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, 'utf-8', (err,data) =>{
//             if(err){
//                 reject(err);
//             }
//             const cleanData = data.trim();
//             fs.writeFile(filePath, cleanData, (err)=> {
//                 if(err){
//                     reject(err);
//                 }
//                 resolve('File Cleaned Successfully');
//             });
//         })
//     });
// }

// cleanFile('b.txt').then(data => {
//     console.log(data);
// }).catch(err => {
//     console.error(err);
// })

// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//       console.log("hello");
  
//       setTimeout(function () {
//         console.log("hello there");
//       }, 5000);
//     }, 3000);
//   }, 1000);

// function setTimeoutPromisified(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
  
//   setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });


// const setTimeoutPromisified = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     })
// }

// const solve = async () => {
//     await setTimeoutPromisified(1000);
//     console.log('hi');
//     await setTimeoutPromisified(3000);
//     console.log('hello');
//     await setTimeoutPromisified(5000);
//     console.log('hi there');
// }

// solve();

const fs = require('fs')

const cleanFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err,data)=> {
            if(err){
              return reject('File not found');
            }
            const cleanedFile = data.trim();
            
            fs.writeFile(filePath, cleanedFile, (err) => {
                if(err){
                    return reject('Error');
                }
                resolve('File Cleaned Successfully!');
            });
        });
    });
};

const main = async () => {
    try {
    const message = await cleanFile('a.txt');
    console.log(message);
    }
    catch(error) {
        console.error('An error occurred:', error)
    }
    finally {
        console.log('End of Program')
    };
};

main();

// const fs = require('fs')

// const cleanFile = (filePath, cb) => {
//     fs.readFile(filePath, 'utf-8', (err,data)=> {
//         if(err){
//             return 'File not found';
//         }
//         const cleanedFile = data.trim();
//     fs.writeFile(filePath, cleanedFile, (err) => {
//         if(err){
//             return 'Error';
//         }
//     })     
// })
// cb();
// }

// const onDone = () =>{
//     console.log('File cleaned succssfully!')
// }

// cleanFile('a.txt', onDone);
