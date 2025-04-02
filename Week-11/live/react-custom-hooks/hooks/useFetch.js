import axios from "axios";
import { useEffect, useState } from "react";

//useFetch
// export const useFetch = (url) => {
//     const [ finalData, setData ] = useState({})
//     const [ loading, setLoading ] = useState(false)

//     const getData = async () => {
//         setLoading(true)
//         const response = await axios.get(url)
//         const json = response.data
//         setData(json)
//         setLoading(false)
//     }

//     useEffect(()=> {
//         getData()
//     }, [url])

//     return {
//         finalData,
//         loading
//     }
// }

//useFetch with re-fetching
export const useFetch = (url, interval) => {
  const [finalData, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try{
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
    }catch(e){
        console.error(`Error fetching data: ${e}`)
    }finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    let timer = 0;
    if (interval !== null) {
      timer = setInterval(() => {
        getData();
      }, interval * 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [url, interval]);

  return {
    finalData,
    loading,
  };
};
