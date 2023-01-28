import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';


export interface LoginState {
    username: string;
    isLogin: boolean;
    token:string
}

const initialState: LoginState = {
    username: '',
    isLogin: false,
    token:''
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
      setLogin: (state,action) => {
        state.username= action.payload.username;
        state.isLogin= true;
        state.token=action.payload.token;
      },
      setLogout: (state) => {
        state=initialState;
      },

  }}
);



export const { setLogin, setLogout } = loginSlice.actions;

export const loginStore = (state: RootState) => (state.login)

export default loginSlice.reducer;
