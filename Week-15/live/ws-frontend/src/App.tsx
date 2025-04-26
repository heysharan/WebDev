import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [ ws, setWs ] = useState<WebSocket>()  - useState
  const inputRef = useRef<HTMLInputElement>(null)
  const wsRef = useRef<WebSocket | null>(null)

  const sendMessage = () => {
    const message  = inputRef.current?.value || ''
    // wsRef.send(message)     - useState
    wsRef.current?.send(message)
  }

  useEffect(() => {
    const ws: WebSocket = new WebSocket('ws://localhost:8080')
    // setWs(ws)      - useState
    wsRef.current = ws
    ws.onmessage = ((ev) => {
      alert(ev.data)
    })

  }, [])

  return (
    <div>
        <input ref={inputRef} type='text' placeholder='Message....'></input>
        <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
