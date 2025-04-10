import { atomFamily } from "recoil";
import { TODOS } from "../../todos";

export const todosAtoms = atomFamily({
    key: 'todosFamily',
    default: (id) => {
        return TODOS.find(x => x.id === id)
    }
})