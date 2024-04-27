import React, { useEffect, useState } from 'react'
import axiosInstance from './../../AxioxConfig/AxiosInstance';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export default function MovieDetails() {
     const [moviesDetails, setMovieDetails] =useState([])
     const [isLoading , setIsLoading] =useState(false)
      const {id}  =useParams()

     async function getMovieDetails(){
            setIsLoading(true)
          const response= await axiosInstance.get(`${id}`)
          setMovieDetails(response.data)
            setIsLoading(false)
    }
    useEffect(()=>{
        getMovieDetails()
    },[])
  return (
    <>
           {isLoading?
               
               <div className="d-flex justify-content-center align-items-center m-5">
                     <Spinner animation="border" role="status" >
                         <span className="visually-hidden">Loading...</span>
                     </Spinner>
               </div>

             :
           <div className='row d-flex justify-content-center align-items-center' >
           <div className='col-md-3 mt-5' style={{width:"300px"}}>
           <img src={"https://image.tmdb.org/t/p/w500"+ moviesDetails.poster_path} className='w-100  border border-secondary border-3 scale-125-hover' />
           </div>
                  <div className=' col-md-9 mt-5 shadow-lg'>
                     <h3>{moviesDetails.title}</h3>
                     <p>{moviesDetails.overview}</p>
                  </div>
               </div>
          }
    </>
  )
}
