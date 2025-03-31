const fs = require('fs');

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err,data) => {
            if(err) return reject('File not found')
            resolve(data)
        })
    })
}

const main = async () => {
    try {
        const message = await readFile('a.txt')
        console.log(message)
    }
    catch(error) {
        console.error('Error', error)
    }
    finally {
        console.log('End of program!')
    }
} 

main()

let sum = 0;
for(let i = 0 ; i < 1000000000000000000; i++){
        sum += i;
}
console.log(sum);