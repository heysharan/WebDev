import { useRecoilValue } from "recoil"
import { counterAtom } from "../store/atoms/counter"

export const CountValue = () => {
  const count = useRecoilValue(counterAtom)
  return (
    <div>
    {`Count: ${count}`}
    </div>
  )
}