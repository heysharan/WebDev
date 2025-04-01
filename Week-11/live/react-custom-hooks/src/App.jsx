import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { usePost } from "../hooks/usePost";
import { Counter } from "./Counter";
import { FetchData } from "./FetchData"

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


const App = () => {
    const [ currentPost, setCurrentPost ] = useState(1)
    const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`)

    return (
        <>
          <button onClick={() => (setCurrentPost(1))}>Post 1</button>
          <button onClick={() => (setCurrentPost(2))}>Post 2</button>
          <button onClick={() => (setCurrentPost(3))}>Post 3</button>
          <button onClick={() => (setCurrentPost(4))}>Post 4</button> <br />
          {loading? "Title: Loading..." : `Title: ${finalData.title}`} <br /> {loading? "Body: Loading..." : `Body: ${finalData.body}`}      {/* using a custom hook useFetch() to fetch data from server */}
        </>
      );
    };


export default App;
