
{/* 1st Approach - using let 

export const Clock = () => {
   const [ currentValue, setCurrentValue ] = useState(0)

   let timer = 0 // ❗️This value is reset to 0 after every re-render.

   const startClock = () => {
    timer = setInterval(()=>{
        setCurrentValue(currentValue => currentValue + 1)
    }, 1000)
   }

   const stopClock = () => {
    clearInterval(timer)
        // ❗️This won't work because `timer` is reset to 0 during re-render.
        // Every time `setCurrentValue` is called, the component re-renders,
        // re-initializing `timer` to 0, losing the original interval reference.
    }
   
   
    return (
    <div>
        {currentValue} <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
   ) 
}

*/}


{/* 2nd Approach - using useState()

import { useState } from "react"

export const Clock = () => {
   const [ currentValue, setCurrentValue ] = useState(0)

   const [ timer, setTimer ] = useState()
   // ✅ `useState` is used to store `timer` reference across re-renders.
   // ❗️Downside: This causes an extra re-render when `setTimer` is called.

   const startClock = () => {
    const timer = setInterval(()=>{
        setCurrentValue(currentValue => currentValue + 1)
    }, 1000)
    setTimer(timer)    // ❗️This causes an unnecessary re-render just to store `timer` - Performance downside        

    }

   const stopClock = () => {
    clearInterval(timer)   // ✅ Works fine because `timer` persists across re-renders.                  
   }
   
   
    return (
    <div>
        {currentValue} <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
   ) 
}

*/}

{/* 3nd Approach - using useState() 

import { useState, useRef } from "react"

export const Clock = () => {
   const [ currentValue, setCurrentValue ] = useState(0)

   const timerRef = useRef(null);
   // ✅ `useRef` is used to store a mutable value that persists across re-renders
   // ✅ `timerRef.current` holds the timer reference, avoiding unnecessary re-renders.

   const startClock = () => {
    timerRef.current = setInterval(()=>{
        setCurrentValue(currentValue => currentValue + 1)
    }, 1000)
     // ✅ This approach persists `timerRef.current` across re-renders
     // and avoids any extra re-renders while storing the interval ID.
   }

   const stopClock = () => {
    clearInterval(timerRef.current)        
    // ✅ Clears the correct interval without causing re-renders.            
   }
   
   
    return (
    <div>
        {currentValue} <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
   ) 
}

*/}

import { useState, useRef } from "react";

export const Clock = () => {
    const [ currentValue, setCurrentValue ] = useState(0);
    const timerRef = useRef(null);

    const startClock = () => {
        const timer = setInterval(() => {
            setCurrentValue(currentValue => currentValue + 1)
        }, 1000)
        timerRef.current = timer
    }

    const stopClock = () => {
        clearInterval(timerRef.current)
    }

    return (
        <div>
            {currentValue} <br />
            <button onClick={startClock} >Start</button>
            <button onClick={stopClock} >Stop</button>
        </div>
    )
}