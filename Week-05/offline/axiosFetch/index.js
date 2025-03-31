// const main = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(
//         async (responce) => {
//             const json = await responce.json();
//             console.log(json.length)
//         }
//     )
// }

const axios = require("axios")

// main();

// const  mainAsync = async () => {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const json = await responce.json();
//     console.log(json.length)
// }

// mainAsync();


// const axios = require('axios');


// const mainAxios = async () => {
//     const responce  = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     console.log(responce.data.length)
// }

// mainAxios();



// const mainAsync =  async () => {
//     const response = await fetch('https://www.postb.in/1737556041014-5951494665350', 
//         {
//             method: 'POST'
//         }
//     )
//     const textualData = await response.text();
//     console.log(textualData)
// }

// mainAsync()



// const mainAxios =  async () => {
//     const response = await axios.post('https://www.postb.in/1737556041014-5951494665350');
//     console.log(response.data);
// }

// mainAxios();



// const mainAxiosPost = async () => {
//     const response = await axios.post('https://httpdump.app/dumps/1fa5aa5a-f3eb-4a22-92df-a6ecbb747c8b',
//     {   
//         username: 'sharan'                // for POST, PUT, DELETE method, we send body as the second argument,
//     },                                    // and followed by headers
// {
//     headers: {
//         Authorization: 'Bearer 123'
//     }
// })

// console.log(response.data)
// }

// mainAxiosPost();




const mainAxiosPost = async () => {
    const response = await axios( 
    {
        url: 'https://httpdump.app/dumps/1fa5aa5a-f3eb-4a22-92df-a6ecbb747c8b',
        method: 'PUT',
        headers: {
            Authorization: 'Bearer 123'
        },
        data: {
            username: 'guhan'
        }
    })

console.log(response.data)
}

mainAxiosPost();




// const mainAxiosGet = async () => {
//     const response = await axios.get('https://httpdump.app/dumps/1fa5aa5a-f3eb-4a22-92df-a6ecbb747c8b',
// {                                                          // for GET method, we cant send body as the second argument,
//     headers: {                                             // since we are just getting the data from server, so the second
//         Authorization: 'Bearer 123'                        // argument is the headers
//     }
// })

// console.log(response.data)
// }

// mainAxiosGet();
