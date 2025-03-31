// const fs = require('fs');

// const writeFile = (filePath, writeChanges) => {
//     return new Promise((resolve, reject) => {
//         fs.writeFile(filePath, writeChanges, (err) =>{
//             if(err) {
//                 return reject('Error');
//             }
//             return resolve('Changes have been Successfully!');
//         })        
//     })
// }

// const main = async () => {
//     try {
//     const writeMessage = await writeFile('a.txt', 'Hi there! from Sharan');
//     console.log(writeMessage);
//     }
//     catch (error) {
//         console.log('Error', error);
//     }
//     finally {
//         console.log('End of Program !')
//     }
// }

// main();


const fs = require('fs').promises;

const writeToFile = async (filePath, content) => {
    try{
        await fs.writeFile(filePath, content, 'utf-8')
        console.log('Changes have been Successfully!')
    }
    catch (error) {
        console.log(`Error ${error.message}`)
    }

    finally {
        return 'End of Program'
    }
}

writeToFile('a.txt', 'Hello!');