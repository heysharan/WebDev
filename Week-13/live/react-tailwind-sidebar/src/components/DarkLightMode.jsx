// import { useState } from "react"

// export const DarkLightMode = () => {
//     const [ darkMode, setDarkMode ] = useState(true)
//     return(
//         <div className={`h-screen ${darkMode ? 'bg-white' : 'bg-blue-400' }`}>
//             <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
//         </div>
//     )
// }
// - First principles approach

// .toggle just swaps true to false and vice-versa
// export const DarkLightMode = () => {
//     const darkToggle = () => {
//         document.querySelector("html").classList.toggle("dark")
//     }
//     return(
//         <div className='h-screen bg-white dark:bg-blue-400'>
//             <button onClick={darkToggle}>Toggle Theme</button>
//         </div>
//     )
// }

// can use this approach when for some condition its should be dark or not

// import { HalfMoon, SunLight } from 'iconoir-react'

// export const DarkLightMode = () => {
//   const darkToggle = () => {
//     document.querySelector("html").classList.toggle("dark");
//   };
//   return (
//     <div className="h-screen bg-white text-black dark:text-white dark:bg-black">
//       {document.querySelector("html").classList.value == "dark" ? (
//         <SunLight onClick={darkToggle}/>
//       ) : (
//         <HalfMoon onClick={darkToggle}/>
//       )}
//     </div>
//   );
// };

import { useState } from "react";
import { HalfMoon, SunLight } from "iconoir-react";

export const DarkLightMode = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const darkToggle = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(html.classList.contains("dark"));
  };

  return (
    <div className="h-screen bg-white text-black dark:text-white dark:bg-black flex justify-end">
      <div className="m-4">
      {isDark ? (
        <SunLight
          onClick={darkToggle}
          className="w-8 h-8 cursor-pointer text-white"
        />
      ) : (
        <HalfMoon
          onClick={darkToggle}
          className="w-8 h-8 cursor-pointer text-black"
        />
      )}
      </div>
    </div>
  );
};

