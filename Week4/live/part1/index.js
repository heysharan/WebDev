// const add = (a,b) => {
//     return a + b;
// }
// const sub = (a,b) => {
//     return a - b;
// }

// console.log(add(2,3))
// console.log(sub(2,3))

// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI for performing action on a given file')
//   .version('1.0.0');

// program.command('countWords')
//   .description('Counts the number of words in the given file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf-8', (err,data) => {
//         if(err) console.log(err);
//         else {
//             const words = data.split(" ").length;
//             console.log(`There are ${words} words in the file ${file}`);
//         }
//     })
//   });
  
// program.parse();

const fs = require('fs')
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI for performing actions on a file3')
  .version('0.8.0');

program.command('countWords')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf-8', (err, data)=> {
      if(err) console.log(err);
      else{
        const words = data.split(' ').length;
        console.log(`There are ${words} words in the file ${file}`);
      }
    })
  });

program.parse(); 