import './App.css'
import { RecoilRoot } from 'recoil';
import { CounterRecoil } from './CounterRecoil';
import { CounterMemo } from './CounterMemo';
import { CounterSelector } from './CounterSelector';

const App = () => {
  return(
    <RecoilRoot>
      <CounterSelector />                        {/* Implementation of Selectors */}
    </RecoilRoot>
  )
}

export default App




// const App = () => {
//   return(
//     <div>
//       <CounterMemo />                       {/* using the memo for state management */}
//     </div>
//   )
// }


// export default App

// const App = () => {
//   return (
//     <RecoilRoot>
//       <CounterRecoil />                         {/* using the recoil for state management */}
//     </RecoilRoot>
//   )
// }

// export default App




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