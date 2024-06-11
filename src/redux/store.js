import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    video: videoSlice,
  },
});

export default store;
