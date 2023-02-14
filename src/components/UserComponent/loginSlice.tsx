import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState, AppThunk } from "../../app/store";

export interface LoginState {
  username: string;
  login: { isLogin: boolean; token: string };
  error: { isError: boolean; message: string };
  photo: string;
}

const initialState: LoginState = {
  username: "",
  login: { isLogin: false, token: "" },
  error: { isError: false, message: "" },
  photo: "",
};

export const submitLoginInformations = createAsyncThunk(
  "login/submitLoginInformations",
  async (action: { email: string; password: string }) => {
    const { email, password } = action;
    try {
      const res = await fetch("http://localhost:8080/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      return await res.json();
    } catch (e) {
      console.error(e);
    }
  }
);
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { email, password } = action.payload;
    },
    setLogout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitLoginInformations.fulfilled, (state, action) => {
      if (action.payload.status === "success") {
        state.photo = action.payload.data.photo;
        state.login.token = action.payload.token;
        // console.log("succcess");
        state.login.isLogin = true;
      } else if ((action.payload.state = "error")) {
        state.login.isLogin = false;
        // console.log("error");
        state.error = { isError: true, message: action.payload.message };
      }
    });
    builder.addCase(submitLoginInformations.rejected, (state, action) => {
      state.login.isLogin = false;
      state.error = { isError: true, message: "todo" };
      console.log(action.payload);
    });
  },
});

export const { setLogin, setLogout } = loginSlice.actions;

export const loginStore = (state: RootState) => state.login;

export default loginSlice.reducer;
