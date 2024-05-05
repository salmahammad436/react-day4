import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './slices/language';
import  loaderReducer  from './slices/loader';
import  favMoviesReducer  from './slices/favMovies';

const store = configureStore({
  reducer: {
    language: languageReducer,
    loader:loaderReducer,
    favMovies:favMoviesReducer
  }
});

export default store;