import { useRecoilValue } from "recoil"
import { todosAtoms } from "./store/atoms/todosAtom"

export const Todos = ({ id }) => {
    const getTodo = useRecoilValue(todosAtoms(id))
    
    return(
        <div>
            <h1>{getTodo.title}</h1>
            <h3>{getTodo.description}</h3>
        </div>
    )
}