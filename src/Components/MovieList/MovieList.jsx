import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../../Redux/MovieSlice';
import { Spinner } from 'react-bootstrap';
import useFetch from '../../Hooks/useFetch';

function MovieList() {

  //custom hook
  // const {data:movies , isError , isLoading, dependence} =useFetch('/popular')

  const movies = useSelector((state) => state.movies.value);
  const isLoading = useSelector((state) => state.movies.isLoading);
  const isError = useSelector((state) => state.movies.isError);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  }

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const firstIndex = (currentPage - 1) * 3;
  const lastIndex = Math.min(firstIndex + 3, movies.length);

  return (
    <>
      {isError ? <div className="alert alert-danger">Error fetching data!</div> : (
        <>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center m-5 min-vh-100">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className='row d-flex justify-content-center align-items-center'>
              {movies.slice(firstIndex, lastIndex).map(movie => (
                <div key={movie.id} className='col-md-3 m-1 mt-3'>
                  <div>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt={movie.title} />
                  </div>
                </div>
              ))}
              <div className='d-flex justify-content-center align-items-center'>
                <button className="btn btn-secondary m-2" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <button className="btn btn-secondary m-2" onClick={nextPage}>Next</button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MovieList;
