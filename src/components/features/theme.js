import { createSlice } from '@reduxjs/toolkit';

const intialStateVal = '';

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: intialStateVal },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
