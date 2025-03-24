import { useState, useEffect } from "react"

export const CleanUp = () => {
    
    const [ event, setEvent ] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setEvent(event => !event)
        }, 5000);
    }, [])

    return (
        <div>
            {event && <Timer />}
        </div>
    )
        
}

const Timer = () => {
    const [ count, setCount ] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
            console.log(`${count} seconds passed`)     // here even when the CleanUp is unmounted i.e., taken out form DOM, this does not stop
        },1000)

        return () => {                           // by doing the clean up we are clearing the timer
            clearInterval(timer)
        }
    },[])

    return (
        <div>
           {`${count}: seconds passed`} 
        </div>
    )
}