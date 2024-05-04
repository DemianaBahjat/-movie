import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../Redux/FavoriteMoviesSlice';
import styles from './Movie.module.css'; 

export default function Movie({ movie ,selectedCurrency}) {
  
  const favoriteMovies = useSelector(state => state.favoriteMovies.movies);
  const dispatch = useDispatch();

  const isFavorite = favoriteMovies.some(favoriteMovie => favoriteMovie.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }
  }
 
    
    const calculateMoviePrice = (priceInUSD, selectedCurrency) => {
      const currencies = {
        USD: 1,
        EUR: 0.85,
        GBP: 0.73,
      };
    
      const defaultPrice = 20; 
    
      const currencyMultiplier = currencies[selectedCurrency] || 1; 
      const priceInSelectedCurrency = priceInUSD || defaultPrice; 
      const priceWithFees = priceInSelectedCurrency * currencyMultiplier * 1.14; 
      return priceWithFees.toFixed(2);
    };
    
  return (
    <>
    <div className='container'>
      <Link to={'/movieDetails/'+ movie.id} className={`text-decoration-none text-dark ${styles.movie}`}>
        <img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className='w-100 border border-secondary border-3' alt={movie.title} />
        <div className='m-3'>
          <h3>{movie.title}</h3>
          <p>{movie.overview.split(" ").slice(0,15).join(" ")}</p>
          
        </div>
      </Link>
     
     <div className='d-flex justify-content-center align-items-center'>
           <div>
           <p>Price: {calculateMoviePrice(movie.price, selectedCurrency)} {selectedCurrency}</p>

            <button onClick={handleToggleFavorite} className={`btn btn-secondary m-2 `}>
                 {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
             </button>
          </div>
       
       <div className={styles.favoriteIcon}>
       {isFavorite ? <span>&#9733;</span> : <span>&#9734;</span>}
       </div>
     </div>
   </div>
    </>
  );
}
