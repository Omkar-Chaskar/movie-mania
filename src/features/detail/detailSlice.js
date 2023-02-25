import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovieDetail } from './detailAPI';

const initialState = {
    detail: {},
    status: 'idle',
    error: null
};

export const getMovieDetail = createAsyncThunk(
  'movie/fetchMovieDetail',
  async (id) => {
    const response = await fetchMovieDetail(id);
    return response.data;
  }
);

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        getDetail: {
          reducer(state, {payload}){
            state.detail = payload
          }
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getMovieDetail.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getMovieDetail.fulfilled, (state, action) => {
            state.status = 'idle';
            state.detail = action.payload;
          })
          .addCase(getMovieDetail.rejected, (state) => {
            state.status = 'error';
          })
      },
});

export const selectMovieDetail = (state) => state.detail.detail;
export const getDetailStatus = (state) => state.detail.status;
export const getDetailError = (state) => state.detail.error;

export default detailSlice.reducer;