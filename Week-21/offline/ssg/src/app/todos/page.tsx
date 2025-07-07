import { TodoCard } from '@/components/todoCard';
import RefreshButton from '@/components/refreshButton';

type Todo = {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

export default async function Home() {
    const response = await fetch('http://localhost:3001/todos', {
        next: { tags: ['todos'] }
    })
    const data = await response.json();

    return (
        <div className='bg-black min-h-screen flex flex-col justify-center items-center gap-2'>
            <RefreshButton />
            <h1 className='text-white'>{data.count}</h1>
            {data.todos.map((t: Todo) => <TodoCard key={t.id} id={t.id} title={t.title} description={t.description} completed={t.completed} />)}
        </div>
    );
}