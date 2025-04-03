import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from '../store/atoms/counter'

const App = () => {
  return (
    <RecoilRoot>
    <Counter />
    </RecoilRoot>
  )
}

const Counter = () => {
  return (
    <>
    <CountValue /> <br />
    <CountIncrease />
    <CountDecrease />
    </>
  )
}

const CountValue = () => {
  const count = useRecoilValue(counterAtom)
  return (
    <div>
    {`Count: ${count}`}
    </div>
  )
}


const CountIncrease = () => {
  const setCount = useSetRecoilState(counterAtom);
  return (
    <>
    <button onClick={() => setCount(count => count + 1)}>Increase</button>
    </>
  )
}

const CountDecrease = () => {
  const setCount = useSetRecoilState(counterAtom)
  return(
    <>
    <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </>
  )
}

export default App






























// import { Counter } from "./Counter"
// import { CountProvider } from "./CountProvider"

// const App = () => {
//   return (
//     <>
//       <CountProvider>
//       <Counter />                                 {/* using the context api for state management */}
//       </CountProvider>
//     </>
//   )
// }

// export default App