import { useContext } from "react"
import { countContext } from "./CountProvider"


export const DecreaseCount = () => {
    const { setCount } = useContext(countContext)
    return (
        <>
            <button onClick={() => setCount(count => count - 1)}>Decrease</button>   {/* using the context api for state management */}
        </>
    )
}