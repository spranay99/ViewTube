import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= LIVE_CHAT_COUNT) {
        state.messages.splice(-1, 1); // Remove the last element - oldest message from reversed array
      }
      state.messages.unshift(action.payload); // Add the new message at the beginning
    },
    clearMessage: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, clearMessage } = chatSlice.actions;
export default chatSlice.reducer;
