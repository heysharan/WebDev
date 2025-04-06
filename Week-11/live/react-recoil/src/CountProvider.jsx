import { useState, createContext } from "react";

export const countContext = createContext();
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <countContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </countContext.Provider>
  );
};









// export const countContext = createContext();
// export const CountProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
//   return (
//     <countContext.Provider
//       value={{
//         count,
//         setCount,
//       }}
//     >
//       {children}
//     </countContext.Provider>
//   );
// };

