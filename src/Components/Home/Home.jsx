import React, { useEffect, useState } from 'react'
import axiosInstance from '../../AxioxConfig/AxiosInstance'
import Movie from '../Movie/Movie'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


export default function Home() {
    const [movies, setMovies] = useState([])
    const [isLoading , setIsLoading]= useState(false)
  async function getMovies (){
      setIsLoading(true)
      const response= await axiosInstance.get('/popular')
      console.log(response.data)
      setMovies(response.data.results)
      setIsLoading(false)
    }

    useEffect(()=>{
         getMovies()
    },[])
  return (
    <>
       {isLoading?
              <div className="d-flex justify-content-center align-items-center m-5 min-vh-100">
                <Spinner animation="border" role="status" >
                     <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
       :
       <div className='container mt-5 mb-5'>
       <div className='row'>
       {movies.map((movie)=>
            <div className='col-md-3' key={movie.id}>
                     <Movie movie={movie}/>
              
            </div>
      )}
       </div>

    </div>
       
       }
    </>
  )
}
