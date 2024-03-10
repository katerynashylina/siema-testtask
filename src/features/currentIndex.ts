import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
};

const currentIndexSlice = createSlice({
  name: 'currentIndex',
  initialState,
  reducers: {
    incrementCurrentQuestionIndex: (state) => {
      state.currentIndex += 1;
    },
    setDefaulCurrentQuestionIndex: (state) => {
      state.currentIndex = 0;
    }
  },
});

export const { incrementCurrentQuestionIndex, setDefaulCurrentQuestionIndex } = currentIndexSlice.actions;
export default currentIndexSlice.reducer;