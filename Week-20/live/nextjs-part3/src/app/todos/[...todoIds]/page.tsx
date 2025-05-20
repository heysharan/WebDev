export default async function Todos({ params }: { params: Promise<{ todoIds: []}>}) {
    
    const todoId: [] = (await params).todoIds

    
    return (
        <div className='flex flex-col justify-center gap-2'>
            <p className='text-2xl mt-10'>Route - {JSON.stringify(todoId)}</p>
        </div>
    )
}