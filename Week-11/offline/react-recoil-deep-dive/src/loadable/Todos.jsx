// import { useRecoilValueLoadable } from "recoil"
// import { todosAtoms } from "./store/atoms/todosAtom"

// export const Todos = ({ id }) => {
//     const getTodo = useRecoilValueLoadable(todosAtoms(id))
    
//     switch (getTodo.state) {
//         case 'hasValue':
//             return(
//                 <div>
//                     <h1>{getTodo.contents.title}</h1>
//                     <h3>{getTodo.contents.description}</h3>
//                 </div>
//             )
//         case 'loading':
//             return(
//                 <div>🌀 Loading...</div>
//             )
//         case 'hasError':
//             return(
//                 <div>Error Loading the data from server</div>
//             )    
//     }
// }


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