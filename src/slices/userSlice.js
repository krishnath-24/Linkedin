import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Anuj",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: function (state, action) {
      state.name = action.payload.name;
    },
    setEmail: function (state, action) {
      state.email = action.payload.email;
    },
    setPassword: function (state, action) {
      state.password = action.payload.password;
    },
  },
});

export const { setName, setEmail, setPassword } = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;
