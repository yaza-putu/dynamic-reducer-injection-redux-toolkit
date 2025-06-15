import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  helight: "Hellow world!",
};

const loaderSlice = createSlice({
  name: 'global',
  initialState,
});

export default loaderSlice.reducer;
