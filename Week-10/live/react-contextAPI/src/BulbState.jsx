import { useContext } from "react"
import { BulbContext } from "./BulbProvider"

export const BulbState = () => {  
    const { bulb } = useContext(BulbContext)
    return(
        <div>
            {bulb? 'Bulb ON' : 'Bulb OFF'}
        </div>
    )
}