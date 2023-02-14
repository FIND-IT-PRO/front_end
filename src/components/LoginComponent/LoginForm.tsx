import { VisibilityOff, Visibility, Password } from "@mui/icons-material";
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
          <Button variant="outlined" type="submit" size="small">
            Continue
          </Button>
        </div>
        <div className="error-box">
          {error.isError ? <Alert severity="error">{error.message}</Alert> : ""}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
