import React from 'react';
import { useSelector } from 'react-redux';

export default function FavoriteMovies() {

  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);
  
  return (
    <div>
      <div className='container d-flex mb-5 mt-0 w-75'>
        {favoriteMovies.map(movie => (
          <div key={movie.id} >
             <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className='w-100  p-2' />
             <h5> {movie.title}</h5>
            </div>
        ))}
      </div>
    </div>
  );
}
