const axios = require('axios')

const mainAxios = async () => {
    const responce  = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(responce.data.length)
}

mainAxios();
