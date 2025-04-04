import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from '../store/atoms/counter'
import { Counter } from './CounterRecoil'

const App = () => {
  return (
    <RecoilRoot>
    <Counter />
    </RecoilRoot>
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