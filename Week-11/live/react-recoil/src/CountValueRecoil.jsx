import { useRecoilValue } from "recoil"
import { counterAtom } from "../store/atoms/counter"

export const CountValueRecoil = () => {
  const value = useRecoilValue(counterAtom)
  
  return(
    <div>
      {value}
    </div>
  )
}