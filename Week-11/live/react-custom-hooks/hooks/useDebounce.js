import { useEffect, useRef, useState } from "react";

{/* 📌 How It Works:
This version debounces a function (e.g., API calls, event handlers).
It returns a new function (debounceFn) that must be called explicitly.
Each time debounceFn is called, the previous timer is cleared, and a new one starts.*/}
// export const useDebounce = (originalFn) => {
//   const currentClock = useRef();
//   return () => {
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(originalFn, 2);
//   };
// };

{/* 📌 How It Works:
This version debounces a state value, not a function.
It returns a debounced value instead of a function.
The effect runs whenever value changes, and it updates debouncedValue after delay. */}

export const useDebounce = (value, delay) => {
    const [ debouncedValue, setDebouncedValue ] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)


        return () => {
            clearTimeout(handler)
        }
    }, [value])

    return debouncedValue
}



// let currentClock;

// const searchBackend = () => {
//     console.log('Request sent to Backend')
// }

// const debounceSearchBackend = () => {
//     clearTimeout(currentClock)
//     currentClock = setTimeout(searchBackend, 200)
// }

// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
// debounceSearchBackend()
