import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
type BotModelProps = {
    prompt:string
}
const useApiServices=({prompt}:BotModelProps)=>{
    const [apiResponse,setApiResponse] = useState<AxiosResponse>()
    const [loading,setLoading] =useState(false)
    const [errorState,setErrorState] = useState('')
    async function getRestApi(prompt:string){
        const url = `http://localhost:8000/gpt/${prompt.replace(' ','%')}`
        const resp = await axios.get(url)
        if(resp){
            console.log('response',resp.data)
            setApiResponse(resp.data)
        }
    }
    useEffect(()=>{
        console.log('prompt is ********* ',prompt)
        if(prompt){
            getRestApi(prompt)
        }
    },[prompt])
    return {
        apiResponse,
        loading,
        errorState
    }
}
export default useApiServices