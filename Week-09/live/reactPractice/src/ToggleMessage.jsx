import { useState } from "react";

export const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false)   //defining a new state variable
  // When the value of a state variable changes, the component that uses the state variables re-renders
  
  return (
    <div>                                               
      <button onClick={() => setIsVisible(!isVisible)}>  {/* function that makes isVisible true when clicked first time and false the second time */} 
        Toggle Message
      </button>
      <br />
      {isVisible === true ? "This message is conditionally rendered!" : null}
    </div>
  )
}
