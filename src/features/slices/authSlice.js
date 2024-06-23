import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      password: "",
      image: "",
      authUser: false,
    },
  },
  reducers: {
    login(state, action) {
        const userId = action.payload;
        const userValidation = /^[A-Za-z]{4,10}$/i.test(userId.name)
    },
    logout(state) {},
  },
});
export const { login, logout } = authSliceSlice.actions;
export default authSlice.reducer;
