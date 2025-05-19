import axios from 'axios'

export default async function Posts({ params }: {params: Promise<{ postId: number}>}) {

    const postId = (await params).postId
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post: any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    
    return(
        <div className='flex flex-col justify-center gap-2'>
            <p className='text-2xl mt-10'>Post Id - {postId}</p>
            <div className='flex'>
            <h1 className='text-bold text-xl'>Title - {post.data.title}</h1>
            </div>
            <div className='flex'>
            <h2 className='text-bold text-xl'>Body - {post.data.body}</h2>
            </div>

        </div>
    )
}