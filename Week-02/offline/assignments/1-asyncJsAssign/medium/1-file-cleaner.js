const fs = require('fs')

const cleanFile = (filePath) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                return reject('Error reading file!')
            }
            let cleanedFile = data.replace(/\s+/g, ' ').trim();
            fs.writeFile(filePath, cleanedFile, (err) => {
                if(err) {
                    return reject('Error writing file!')
                }
                resolve('File cleaned Successfully!')
            })
        })
    })
}

const main = async () => {
    try {
        const message = await cleanFile('a.txt')
        console.log(message)
    }
    catch(error){
        console.error('Error', error);
    }
    finally{
        console.log('End of Program!')
    }
    
}

main();