type Todo = {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

export const TodoCard = ({ id, title, description, completed }: Todo) => {
    return(
        <span className="bg-white rounded-lg p-2">
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Completed: {completed ? 'True' : 'False'}</p>
        </span>
    )
}