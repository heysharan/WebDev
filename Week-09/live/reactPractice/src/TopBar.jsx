// import { useEffect, useState } from "react"
// import axios from 'axios'

// export const TopBar = () => {
//     const [ currentTab, setCurrentTab ] = useState(1)
//     const [ tabData, setTabData ] = useState({})
//     const [ loading, setLoading ] = useState(false)

//     useEffect(() => {
//         (async () => {
//             try {
//                 setLoading(true)
//                 const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${currentTab}`)
//                 setTabData(response.data)
//                 setLoading(false)
//             }catch(e){
//                 console.log(`Error: ${e}`)
//             }

//         })()
//     }, [currentTab])

    
//     return (
//         <div>
//             <button onClick={() => setCurrentTab(1)} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
//             <button onClick={() => setCurrentTab(2)} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
//             <button onClick={() => setCurrentTab(3)} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
//             <button onClick={() => setCurrentTab(4)} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
//             <br />
//             {loading ? 'Loading...' : tabData.title}
//         </div>
//     )
// }

import { useState, useEffect } from "react";
import axios from 'axios'

export const TopBar = () => {
    const [tab, setTab] = useState(1)
    const [ tabData , setTabData ] = useState({})
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {                               // This useEffect runs the first time when <TopBar /> component is rendered, and runs subsequently when the tab value changes, i.e., when different todo's button is clicked                
        (async () => {
            try{
                setLoading(true)
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${tab}`)
                setTabData(response.data)
                setLoading(false)
            }catch(e){
                console.error(`Error: ${e}`)
            }
        })() //Immediately Invoked Function Expression (IIFE) meaning the function is defined and immediately executed
    }, [tab])

    return (
        <div>
            <button onClick={() => setTab(1)} style={{color: tab === 1 ? 'red' : 'black'}} >Todo #1</button>
            <button onClick={() => setTab(2)} style={{color: tab === 2 ? 'red' : 'black'}} >Todo #2</button>
            <button onClick={() => setTab(3)} style={{color: tab === 3 ? 'red' : 'black'}} >Todo #3</button>
            <button onClick={() => setTab(4)} style={{color: tab === 4 ? 'red' : 'black'}} >Todo #4</button>
            <br />
            {loading ? 'Loading...' : tabData.title}
        </div>
    )
}





















