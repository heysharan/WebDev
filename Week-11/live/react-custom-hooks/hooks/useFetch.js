import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [ finalData, setData ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const getData = async () => {
        setLoading(true)
        const response = await axios.get(url)
        const json = response.data
        setData(json)
        setLoading(false)
    }

    useEffect(()=> {
        getData() 
    }, [url])

    return {
        finalData,
        loading
    }
}