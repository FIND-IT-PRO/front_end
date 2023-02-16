import { VisibilityOff, Visibility, Password } from "@mui/icons-material";
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { FunctionComponent } from "react";
import ForgotPassword from "./ForgotPassword";
import { store } from "../../app/store";
import {
  LoginState,
  submitLoginInformations,
} from "../UserComponent/loginSlice";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
interface LoginFormProps {}

const LoginForm: FunctionComponent<LoginFormProps> = () => {
  //Password show/hide

  interface RootState {
    login: LoginState;
  }
  const navigate = useNavigate();
  const { error, login } = useSelector((state: RootState) => state.login);
  if (login.isLogin) navigate("/", { replace: true });
  console.log("🚀 ~ file: LoginForm.tsx:29 ~ login", login);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  //handle login event
  const userEmailRef = useRef<HTMLInputElement>();
  const userPasswordRef = useRef<HTMLInputElement>();

  const formSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const email: string = userEmailRef.current?.value!;
    //todo checks
    const password: string = userPasswordRef.current?.value!;
    //todo checks
    store.dispatch(submitLoginInformations({ email, password }));
  };

  //show error with timeout

  const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);

  const ifErrorExist = () => {

    if(error.isError){
          setIsAlertVisible(true);

          setTimeout(() => {
              setIsAlertVisible(false);
          }, 4000);
        }
  }


  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <FormControl fullWidth sx={{ m: 3 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
          <Input
            required
            id="standard-adornment-email"
            type="email"
            inputRef={userEmailRef}
          />
        </FormControl>

        <FormControl fullWidth sx={{ ml: 3 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            required
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            inputRef={userPasswordRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <ForgotPassword></ForgotPassword>
        <div id="login-footer">
          <Button variant="outlined" type="submit" size="small" onClick={ifErrorExist}>
            Continue
          </Button>
        </div>
        <div className="error-box">
          {error.isError ? isAlertVisible && <Alert severity="error">{error.message}</Alert> : ""}
          {/* {error.isError ? toast('error.message') : ""} */}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
