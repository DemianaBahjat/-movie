import React, { useEffect, useState } from 'react'
import axiosInstance from './../../AxioxConfig/AxiosInstance';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import useFetch from '../../Hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieByID } from '../../Redux/MovieSlice';

export default function MovieDetails() {

     const {id}=useParams()

    //custom hook
    // const {data:moviesDetails, isLoading, isError}=useFetch(`/popular/${id}`)

    const moviesDetails= useSelector((state)=> state.movies.value)
    const isLoading= useSelector((state)=> state.movies.isLoading)
    const isError =useSelector((state)=> state.movies.isError)
    const dispatch= useDispatch()
    
  //   useEffect(() => {
  //     async function getMoviesDetails() {
  //         dispatch(getMovieByID(id))
  //     }
  //     getMoviesDetails();
  // }, [dispatch, id]);
  
  useEffect(() => {
    dispatch(getMovieByID(id));
}, [dispatch, id]);
  
useEffect(() => {
  if (isError) {
      console.error("Error fetching data!");
  }
}, [isError]);
    // async function getMoviesDetails (){
    //   dispatch( getMovieByID(id))

    // }
    // useEffect(()=>{
    //   getMoviesDetails()
    // },[id])  

  return (
    <>
     {isError? <div className='alert alert-danger'> Error fetching data!</div>
     
     :
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
     
     }
           
    </>
  )
}
