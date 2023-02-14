import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/CounterExample/counterSlice';
import loginReducer from '../components/UserComponent/loginSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login:loginReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
