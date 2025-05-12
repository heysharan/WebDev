import axios from 'axios';

const getBlogs = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    return response.data
}

export default async function Home () {
    const blogs: any = await getBlogs();

    return(
        <div>
            {blogs.map((blog: ITodo, index: number) => <Todo key={index} title={blog.title} completed={blog.completed} />)}
        </div>
    )
}

interface ITodo {
    title: string,
    completed: boolean
}

const Todo = ({title, completed}: ITodo) => {
    return(
        <div>
            {title} {completed ? 'Done!' : 'not Done!'}
        </div>
    )
}

