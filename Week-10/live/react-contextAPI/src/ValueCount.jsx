import { useContext } from "react"
import { CountContext } from "./CountProvider"

export const ValueCount = () => {
    const { count } = useContext(CountContext)
    return(
        <div>
            Count: {count}
        </div>
    )
}