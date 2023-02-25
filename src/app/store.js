import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';
import detailReducer from '../features/detail/detailSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
import viewCountReducer from '../features/viewCount/viewCountSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    detail: detailReducer,
    favorite: favoriteReducer,
    viewCount: viewCountReducer,
  },
});