import { RecoilRoot } from 'recoil'
import './App.css'
import { Todos } from './loadable/Todos'
import { Suspense } from 'react'

function App() {
  

  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
      <Todos id={1}/>
      <Todos id={2}/>
      </Suspense> 
    </RecoilRoot>
  )
}

const Loading = () => {
  return(
    <div>🌀 Loading...</div>
  )
}

export default App
