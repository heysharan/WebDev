import { TodoCard } from '@/components/todoCard';

type Todo = {
  id: number,
  title: string,
  description: string,
  completed: boolean
}

export default async function Home() {
  const response = await fetch('http://localhost:3001/todos', {
     cache: 'no-store' })
  const data = await response.json();

  return (
    <div className='bg-black min-h-screen flex flex-col justify-center items-center gap-2'>
      <h1 className='text-white'>{data.count}</h1>
      {data.todos.map((t: Todo) => <TodoCard key={t.id} id={t.id} title={t.title} description={t.description} completed={t.completed}/>)}
    </div>
  );
}