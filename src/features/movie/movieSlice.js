import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovie } from './movieAPI';

const initialState = {
    movie: [],
    status: 'idle',
    error: null
};

export const getMovie = createAsyncThunk(
  'movie/fetchMovie',
  async (movieName) => {
    const response = await fetchMovie(movieName);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        searchMovie: {
            reducer(state, {payload}){
                state.movie = payload;
            }
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getMovie.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getMovie.fulfilled, (state, action) => {
            state.status = 'idle';
            state.movie = action.payload;
          })
          .addCase(getMovie.rejected, (state) => {
            state.status = 'error';
          })
      },
});

export const selectMovie = (state) => state.movie.movie.results;
export const getMovieStatus = (state) => state.movie.status;
export const getMovieError = (state) => state.movie.error;

export default movieSlice.reducer;