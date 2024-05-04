
import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from './FavoriteMoviesSlice';
import movieReducer from './MovieSlice';


const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
    movies: movieReducer
  },

});

export default store;


