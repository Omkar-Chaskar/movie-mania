import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  viewCount: [],
};

export const viewCountSlice = createSlice({
  name: "viewCount",
  initialState,

  reducers: {
    addToViewCount: (state, {payload}) => {
        if(!state.viewCount.some(item => item.id === payload.id)){
          state.viewCount.push({ ...payload });
        }
            let objIndex = state.viewCount.findIndex(item => item.id === payload.id)
            state.viewCount[objIndex].vote_count += 1;
    },
  },
});
export const { addToViewCount } = viewCountSlice.actions;

export default viewCountSlice.reducer;