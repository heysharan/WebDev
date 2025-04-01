import { useContext } from "react"
import { CountContext } from "./CountProvider"

export const DecreaseCount = () => {
    const { setCount } = useContext(CountContext)
    return(
        <>
            <button onClick={() => (setCount(count => count - 1))}>Decrease</button>
        </>
    )
}