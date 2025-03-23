import { useState, useEffect } from "react";

// export const Notifications = () => {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//         setCount(count => count + 1)
//     }
    
//   return (
//     <div>
//       <div style={{}}>
//         <div
//           style={{
//             background: "red",
//             borderRadius: 20,
//             width: 20,
//             height: 25,
//             paddingLeft: 10,
//             paddingTop: 5,
//           }}
//         >
//           {count}
//         </div>
//         <div>
//           <img
//             style={{ cursor: "pointer", width: 80 }}
//             src={"https://static.thenounproject.com/png/1633777-200.png"}
//           />
//         </div>
//         <button onClick={incrementCount}>Increment Count</button>
//       </div>
//     </div>
//   );
// };


export const Notifications = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1)
        }, 5000)
    }, [])
    
  return (
    <div>
      <div style={{}}>
        <div
          style={{
            background: "red",
            borderRadius: 20,
            width: 20,
            height: 25,
            paddingLeft: 10,
            paddingTop: 5,
          }}
        >
          {count}
        </div>
        <div>
          <img
            style={{ cursor: "pointer", width: 80 }}
            src={"https://static.thenounproject.com/png/1633777-200.png"}
          />
        </div>
      </div>
    </div>
  );
};