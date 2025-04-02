import { useEffect, useState } from "react"

export const useIsLine = () => {
    const [ isOnLine, setIsOnLine ] = useState(navigator.onLine);

    const updateOnlineStatus = () => setIsOnLine(navigator.onLine);

    useEffect(() => {
        
        addEventListener('online', updateOnlineStatus)
        addEventListener('offline', updateOnlineStatus)       
        
         // Clean up the event listeners on component unmount
        return () => {
            removeEventListener('online', updateOnlineStatus)
            removeEventListener('offline', updateOnlineStatus)
        }
    }, [])

    return isOnLine
}