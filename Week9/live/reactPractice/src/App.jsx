import { useEffect, useState } from 'react'

function App() {

  return (
    <div>
      <b>
        Hi there
      </b>
      <Counter></Counter>
    </div>
  )
}

const Counter = () => {

  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  const resetCount = () => {
    setCount(0);
  }


  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1)
  }, 1000)
  }, [])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase count</button>
      <button onClick={decreaseCount}>Decrease count</button>
      <button onClick={resetCount}>Reset count</button>      
    </div>
  )
}

export default App
