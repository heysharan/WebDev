import { useContext } from "react"
import { BulbContext } from "./BulbProvider"

export const ToggleState = () => {
    const  { setBulb } = useContext(BulbContext)
    const toggle = () => {
        setBulb(bulb => !bulb)
    }
    return (
        <div>
            <button onClick={toggle}>Toogle the Bulb</button>
        </div>
    )
}