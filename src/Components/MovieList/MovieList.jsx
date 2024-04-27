import React, { useState, useEffect } from 'react';
import axiosInstance from '../../AxioxConfig/AxiosInstance';
import styles from './MovieList.module.css';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async () => {
    try {
      const response = await axiosInstance.get('/popular', {
        params: {
          page: currentPage
        }
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const prevPage = () => {
    
      setCurrentPage(currentPage - 1);
  }

  const firstIndex = (currentPage - 1) * 3;
  const lastIndex = Math.min(firstIndex + 3, movies.length);

  return (
    <div className='row d-flex justify-content-center align-items-center '>
      {movies.slice(firstIndex, lastIndex).map(movie => (
        <div key={movie.id} className='col-md-3 m-1 mt-3'>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='w-100' alt={movie.title} />
          </div>
        </div>
      ))}
      <div className='d-flex justify-content-center align-items-center'>
        <button className="btn btn-secondary m-2 " onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button className="btn btn-secondary m-2 " onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default MovieList;
