import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface IAuthState {
  login: string | null;
  token: string | null;
}

const initialState: IAuthState = {
  login: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ login: string; token: string }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          login: action.payload?.login,
          token: action.payload?.token,
        })
      );
      state.login = action.payload?.login;
      state.token = action.payload?.token;
    },
    logout: (state) => {
      localStorage.removeItem("user"), (state.login = null);
      state.token = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
