import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchData = () => {
    const [ post, setPost ] = useState({})

    const getPosts = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        setPost(response.data)
    }
    useEffect(() => {
        getPosts()
    }, [])
    
    
    return(
        <div>
            {post.title}
        </div>
    )
}




// export const FetchData = () => {
//     const [ post, setPost ] = useState({})

//     const getPosts = async () => {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
//         setPost(response.data)
//     }
//     useEffect(() => {
//         getPosts()
//     }, [])
    
    
//     return(
//         <div>
//             {post.title}
//         </div>
//     )
// }