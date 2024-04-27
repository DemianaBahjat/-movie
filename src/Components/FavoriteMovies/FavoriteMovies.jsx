import React from 'react';
import { useSelector } from 'react-redux';

export default function FavoriteMovies() {
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);

  return (
    <div>
      <h2>Favorite Movies</h2>
      <div className='container d-flex'>
        {favoriteMovies.map(movie => (
          <div key={movie.id} className='w-75'>
             <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className='w-100  p-2' />
             <h5> {movie.title}</h5>
            </div>
        ))}
      </div>
    </div>
  );
}
