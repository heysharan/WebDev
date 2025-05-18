// import axios from 'axios'

// export default async function Blogs({ params }: {params: { blogId: number}}) {

//     const postId = (await params).blogId

//     const blog: any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    
//     return(
//         <div className='flex flex-col justify-center gap-2'>
//             <p className='text-2xl mt-10'>Post Id - {postId}</p>
//             <div className='flex'>
//             <h1 className='text-bold text-xl'>Title - {blog.data.title}</h1>
//             </div>
//             <div className='flex'>
//             <h2 className='text-bold text-xl'>Body - {blog.data.body}</h2>
//             </div>

//         </div>
//     )
// }




import axios from 'axios'

export default async function Blogs({ params }: {params: { blogId: number}}) {

    const postId = (await params).blogId

    const blog: any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    
    return(
        <div className='flex flex-col justify-center gap-2'>
            <p className='text-2xl mt-10'>Post Id - {postId}</p>
            <div className='flex'>
            <h1 className='text-bold text-xl'>Title - {blog.data.title}</h1>
            </div>
            <div className='flex'>
            <h2 className='text-bold text-xl'>Body - {blog.data.body}</h2>
            </div>

        </div>
    )
}