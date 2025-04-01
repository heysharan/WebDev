import { DecreaseCount } from "./DecreaseCount"
import { IncreaseCount } from "./IncreaseCount"
import { ValueCount } from "./ValueCount"

export const Counter = () => {
    return (
        <>
          <ValueCount /> <br />
          <IncreaseCount />
          <DecreaseCount />      
        </>
    )
}