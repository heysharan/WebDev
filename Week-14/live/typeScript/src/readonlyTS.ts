// interface Config {
//     endPoint: string,
//     apiKey: string
// }

// const config: Config = {
//     endPoint: 'https://api.example.com',
//     apiKey: '12345654321Random'
// }

// config.apiKey = '1234321' 
// // here the apiKey can be changed since its just an object created using the Config interface without and restriction 



// interface Config {
//     readonly endPoint: string,
//     readonly apiKey: string
// }

// const config: Config = {
//     endPoint: 'https://api.example.com',
//     apiKey: '12345654321Random'
// }

// config.apiKey = '1234321' // // Error: Cannot assign to 'apiKey' because it is a read-only property.


// interface Config {
//     endPoint: string,
//     apiKey: string
// }

// const config: Readonly<Config> = {
//     endPoint: 'https://api.example.com',
//     apiKey: '12345654321Random'
// }

// config.apiKey = '1234321' // Error: Cannot assign to 'apiKey' because it is a read-only property.