import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import React from "react";
import { FunctionComponent } from "react";
import ForgotPassword from "./ForgotPassword";


interface LoginFormProps {
    
}
 
const LoginForm: FunctionComponent<LoginFormProps> = () => {

    //Password show/hide

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    
    return ( 

    <form>
        <FormControl fullWidth sx={{ m: 3 }} variant="standard">
            <TextField
                required
                id="filled-size-normal"
                label="Username or Email"
                variant="standard"
                size="small"
            />
        </FormControl>

        <FormControl fullWidth sx={{ ml: 3 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input 
            required
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
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
             <Button variant="outlined" sx={{pl:2,pr:2,pt:1,pb:1}} size="small">Continue </Button>
        </div>

    </form>
  );
}
 
export default LoginForm;