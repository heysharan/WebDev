import { useContext } from "react"
import { CountContext } from "./CountProvider"

export const IncreaseCount = () => {
    const { setCount } = useContext(CountContext)
    return (
    <>
        <button onClick={() => (setCount(count => count + 1))}>Increase</button>
    </>
    )
} 