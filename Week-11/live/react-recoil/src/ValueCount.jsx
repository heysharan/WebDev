import { useContext } from "react"
import { countContext } from "./CountProvider"

export const ValueCount = () => {
    const { count } = useContext(countContext);       {/* using the context api for state management */}
    return (
        <div>{`Count: ${count}`}</div>
    )
}







// import { useContext } from "react"
// import { countContext } from "./CountProvider"

// export const ValueCount = () => {
//     const { count } = useContext(countContext);       {/* using the context api for state management */}
//     return (
//         <div>{`Count: ${count}`}</div>
//     )
// }
