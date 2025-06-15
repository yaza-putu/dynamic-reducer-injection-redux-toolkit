import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  helight: "Good Morning Home Page",
};

const loaderSlice = createSlice({
  name: 'home',
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
