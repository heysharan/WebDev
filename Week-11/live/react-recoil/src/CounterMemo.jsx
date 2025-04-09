import { useEffect, useState } from "react";

export const CounterMemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, []);

  return (
    <div>
        <CounterValue />
        <Increase  />
        <Decrease />
    </div>
  );
};

const Increase = () => {
  const increase = () => {};

  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
};

const Decrease = () => {
  const decrease = () => {};

  return (
    <span style={{paddingLeft: "5px"}}>
      <button onClick={decrease}>Decrease</button>
    </span>
  );
};

const CounterValue = () => {
  return <div>1</div>;
};



// import { useEffect, useState, memo } from "react"

// export const CounterMemo = () => {
//     const [ count, setCount ] = useState(0);

//     useEffect(() => {
//         setInterval(() => {
//             setCount(count => count + 1)
//         }, 3000)
//     }, [])

//     return (
//         <div>
//           <CounterValueMemo count={count}/>
//           <IncreaseMemo />
//           <DecreaseMemo />
//         </div>
//     )
// }

// const Increase = () => {
//     const increase = () => {

//     }

//     return(
//         <span>
//             <button onClick={increase}>Increase</button>
//         </span>
//     )
// }

// const Decrease = () => {
//     const decrease = () => {

//     }

//     return(
//         <span style={{paddingLeft: "5px"}}>
//             <button onClick={decrease}>Decrease</button>
//         </span>
//     )
// }

// const CounterValue = ({count}) => {
//     return(
//         <div>
//          {count}
//         </div>
//     )
// }

// const CounterValueMemo = memo(CounterValue);
// const IncreaseMemo = memo(Increase)
// const DecreaseMemo = memo(Decrease)
