import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtoms = atomFamily({
    key: 'todosFamily',
    default: selectorFamily ({
        key: 'todosSelectorFamily',
        get: (id) => async () => {
            const response = await axios.get(`http://localhost:3000/todos/${id}`)
            return response.data
        } 
    })
})