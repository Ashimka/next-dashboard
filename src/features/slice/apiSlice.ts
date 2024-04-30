import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface IAuthState {
  userLogin: string | null;
  accessToken: string | null;
}

const initialState: IAuthState = {
  userLogin: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ userLogin: string; accessToken: string }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          userLogin: action.payload?.userLogin,
          accessToken: action.payload?.accessToken,
        })
      );
      state.userLogin = action.payload?.userLogin;
      state.accessToken = action.payload?.accessToken;
    },
    logout: (state) => {
      localStorage.removeItem("user");
      state.userLogin = null;
      state.accessToken = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
