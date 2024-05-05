import {createSlice} from '@reduxjs/toolkit';


 export const FavMoviesSlice=createSlice({

    name:'favMovies',
    initialState: {
        favMovies: [],
      },
      reducers: {
        addToFav: (state, action) => {
          state.favMovies.push(action.payload);
        },
        removeFromFav: (state, action) => {
          state.favMovies = state.favMovies.filter(movie => movie.id !== action.payload.id);
        },
      },
})

export const {addToFav,removeFromFav}=FavMoviesSlice.actions
export default FavMoviesSlice.reducer;