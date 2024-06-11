import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    homeVideos: [],
  },
  reducers: {
    addHomeVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
  },
});

export const { addHomeVideos } = videoSlice.actions;
export default videoSlice.reducer;
