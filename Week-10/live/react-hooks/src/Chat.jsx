// import { useState, useEffect, useRef } from "react"

// export const Chat = () => {
//     const [messages, setMessages] = useState(['Hello', 'How are you']);
//     const chatBoxRef = useRef(null);

//     const addMessage = () => {
//        setMessages((preMessages) => [...preMessages, 'New Message']) 
//     }

//     useEffect(() => {
//         chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
//     }, [messages])

//     return(
//         <>
//         <div ref={chatBoxRef} style={{height: '200px', overflow: 'scroll', border: '1px solid black'}}>
//             {messages.map((msg, index) => (
//                 <div key={index}>{msg}</div>
//             ))}
//         </div>
//         <button onClick={addMessage}>Add Message</button>  
//         </>
//     )           
// }


import { useState, useEffect, useRef } from 'react'

export const Chat = () => {
    
    const [ messages, setMessages ] = useState(['Hello', 'How are you!']);
    const ChatBoxRef = useRef();
    
    const addMessage = () => { 
        setMessages((messages) => [...messages, "New Message!"])
    }
    
    
    useEffect(() => {
        ChatBoxRef.current.scrollTop = ChatBoxRef.current.scrollHeight;
    }, [messages])
    
    return (
        <>
        <div ref={ChatBoxRef} style={{height: '200px', overflow: 'scroll', border: '1px solid black'}}>
            {messages.map((msg, index) => (
                <div key={index}>{msg}</div>
            ))}
        </div>
        <button onClick={addMessage} >Add Message</button>
        </>
    )
}
























