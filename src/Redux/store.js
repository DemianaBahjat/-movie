// store.js
import { configureStore } from '@reduxjs/toolkit';
import favoriteMoviesReducer from './FavoriteMoviesSlice';

const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesReducer,
  },
});

export default store;
