import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  helight: "Hi there!",
};

const loaderSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    setHelight: (state, action) => {
      state.helight = action.payload
    },
  },
});

export const { 
  setHelight,
} = loaderSlice.actions;
export default loaderSlice.reducer;
