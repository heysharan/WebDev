import { useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";

export const CountIncrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <>
    <button onClick={() => setCount(count => count + 1)}>Increase</button>
    </>
  )
}