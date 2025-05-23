import { useSetRecoilState } from "recoil"
import { counterAtom } from "../store/atoms/counter"

export const CountDecreaseRecoil = () => {
  const setCount = useSetRecoilState(counterAtom)
  
  return (
    <>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>   
    </>
  )
}