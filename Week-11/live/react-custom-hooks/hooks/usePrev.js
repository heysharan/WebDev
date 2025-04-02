import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    
    const ref = useRef(value);

    useEffect(() => {
        ref.current = value
    }, [value])
    
    return ref.current // in react it returns first and only then effect is called
}