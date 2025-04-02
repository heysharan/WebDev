import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";
import { Counter } from "./Counter";
import { FetchData } from "./FetchData";
import { usePrev } from "../hooks/usePrev";
import { useDebounce } from "../hooks/useDebounce";
import axios from "axios";
import { useIsLine } from "../hooks/useIsLine";

// const App = () => {
//   return (
//     <>
//       <FetchData />   {/* using a component to fetch data from server */}
//     </>
//   );
// };

// const App = () => {
//     const post = usePost();
//       return (
//         <>
//           {`Title: ${post.title}`} <br /> {`Body: ${post.body}`}      {/* using a custom hook usePost() to fetch data from server */}
//         </>
//       );
//     };

// const App = () => {
//     const [ count, setcount ] = useState(1)
//     const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${count}`, 5)

//     return (
//         <>
//           <button onClick={() => (setcount(1))}>Post 1</button>
//           <button onClick={() => (setcount(2))}>Post 2</button>
//           <button onClick={() => (setcount(3))}>Post 3</button>
//           <button onClick={() => (setcount(4))}>Post 4</button> <br />
//           {loading? "Title: Loading..." : `Title: ${finalData.title}`} <br /> {loading? "Body: Loading..." : `Body: ${finalData.body}`}      {/* using a custom hook useFetch() to fetch data from server */}
//         </>
//       );
//     };

// const App = () => {

//   const sendDataToBackend = async () => {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     console.log(response.data.title)
//   }

//   const debounceFn = useDebounce(sendDataToBackend)

//   return (
//       <>
//         <input type={'text'} onChange={debounceFn}></input>
//       </>
//     );
//   };

// export default App;


// const App = () => {
//   const [inputValue, setInputValue] = useState();
//   const debounceValue = useDebounce(inputValue, 200)

//   const sendDataToBackend = async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response.data.title);
//   };

//   const change = (e) => {
//     setInputValue(e.target.value);
//   };

//   useEffect(() => {
//     sendDataToBackend()
//   }, [debounceValue])


//   return (
//     <>
//       <input type={"text"} onChange={change}></input>
//     </>
//   );
// };

// export default App;


const App = () => {
  const isOnLine = useIsLine()
  console.log(isOnLine)
  return (
    <>
      <h1>{isOnLine? "Online 🌍" : "Offline ❌"}</h1>
    </>
  );
};

export default App;