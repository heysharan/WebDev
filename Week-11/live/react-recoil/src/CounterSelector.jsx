import { useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../store/atoms/counter";
import { evenSelector } from "../selectors/evenSelector";

export const CounterSelector = () => {
    return(
        <div>
            <Buttons />
            <Counter />
            <IsEven />
        </div>
    )
  
  };


const Buttons = () => {
    const setCount = useSetRecoilState(counterAtom);
  
    return (
      <div>
        <button onClick={() => setCount((count) => count + 2)}>Increase</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
      </div>
    );
  };
  
const Counter = () => {
    const count = useRecoilValue(counterAtom);
    return <div>{count}</div>;
  };


const IsEven = () => {
    const even = useRecoilValue(evenSelector)

    return(
        <div>
            {even ? 'Even' : 'Odd'}
        </div>
    )
}
  



