import { useEffect, useState } from "react"
import axiosInstance from "../AxioxConfig/AxiosInstance"


export default function useFetch(endPoint, dependence=[]) {

      const [data, setData] = useState([])
      const [isLoading , setIsLoading]= useState(false)
      const [isError , setIsError] = useState(false)
      
      async function getMovies (){
       try {
        setIsLoading(true)
        const response= await axiosInstance.get(endPoint)
        setData(response.data.results)
       } catch (error) {
          setIsError(true)
       }finally{
        setIsLoading(false)
       }
         
       }
   
       useEffect(()=>{
            getMovies()
       },dependence)  
  return {data , isError , isLoading}
   
}