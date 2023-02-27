import { createSlice } from '@reduxjs/toolkit';

const intialStateVal = { name: '', age: 0, email: '' };

const userSlice = createSlice({
  name: 'user',
  initialState: { value: intialStateVal },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = intialStateVal;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
