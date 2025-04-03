import { useContext } from "react"
import { countContext } from "./CountProvider"


export const IncreaseCount = () => {
    const { setCount } = useContext(countContext)
    return (
        <> 
            <button onClick={() => setCount(count => count + 1)}>Increase</button>   {/* using the context api for state management */}
        </>
    )
}