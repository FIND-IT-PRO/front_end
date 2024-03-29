import React, { FunctionComponent, useState } from 'react'
import '../../css/Login.css'
import Vector from '../../assets/login/vector.svg'
import Facebook from '../../assets/login/facebook.svg'
import Google from '../../assets/login/google.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {setLogin,loginStore} from './loginSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import axios from 'axios';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'



interface LoginProps {
    
}
 


const Login: FunctionComponent<LoginProps> = () => {
  
  const dispatch = useAppDispatch();
  let navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const user = {
    email: username,
    password:password
  };



  const routeChange=async(e: React.FormEvent<HTMLFormElement>)=>{

  
    let path = `/welcome`;

    navigate(path)

    const response = await axios.post("http://127.0.0.1:8000/api/auth/login",user);
    dispatch(setLogin({'username':response.data.user.email,'token':response.data.authorisation.token}))

    console.log(response.data)


 


  };

  return ( 

//         <div id="login-form-wrap">
//          <h2>Login</h2>
//         <form id="login-form" onSubmit={routeChange
// // async()=>{

// // axios({
// //   method: "post",
// //   url: "http://127.0.0.1:8000/api/auth/login",
// //   data: user,
// // })
// // .then((response) => {
// //   setResponse(response.data)
// //   console.log(response.data)
// // })
// // .catch(function (error) {
// //   console.log(error);
// // });

// //         }
// }>
//          <p>
//             <input onChange={event => setUsername(event.target.value)} type="email" id="email" name="email" placeholder="email" required/><i className="validation"><span></span><span></span></i>
//             </p>
//             <p>
//             <input onChange={event => setPassword(event.target.value)} type="password" id="password" name="password" placeholder="Password" required/><i className="validation"><span></span><span></span></i>
//             </p>
//             <p>
//             <input type="submit" id="login" value="Login"/>
//             </p>
//         </form>
//         <div id="create-account-wrap">
//             <p>Not a member? <a href="#">Create Account</a></p>
//         </div>
//         </div>


//new login form


//Background
<div>
    <svg id="elipse2" width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="27.5" cy="27" rx="27.5" ry="27" fill="#38B6FF"/>
    </svg>
    <svg id="elipse4" width="52" height="47" viewBox="0 0 52 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="26" cy="23.5" rx="26" ry="23.5" fill="#D9D9D9"/>
    </svg>
    <svg width="75" id="elipse5" height="159" viewBox="0 0 75 159" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M75 79.5C75 123.407 34.9295 159 -14.5 159C-63.9295 159 -104 123.407 -104 79.5C-104 35.5934 -63.9295 0 -14.5 0C34.9295 0 75 35.5934 75 79.5Z" fill="#38B6FF" fill-opacity="0.8"/>
    </svg>
    <svg width="286" id="elipse7" height="76" viewBox="0 0 286 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="143" cy="-51" rx="143" ry="127" fill="#D9D9D9"/>
    </svg>
    <svg width="75" height="90" id="elipse9" viewBox="0 0 75 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="-23.5" cy="92" rx="98.5" ry="92" fill="#D9D9D9"/>
    </svg>
    <svg width="98" height="160" id="elipse10" viewBox="0 0 98 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="103" cy="94.5" rx="103" ry="94.5" fill="#D9D9D9"/>
    </svg>
    <svg width="131" height="76" id="elipse11" viewBox="0 0 131 76" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M160 -5C160 39.7351 124.183 76 80 76C35.8172 76 0 39.7351 0 -5C0 -49.7351 35.8172 -86 80 -86C124.183 -86 160 -49.7351 160 -5Z" fill="#38B6FF" fill-opacity="0.8"/>
    </svg>
    <svg width="55" height="54" id="elipse12" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="27.5" cy="27" rx="27.5" ry="27" fill="#38B6FF"/>
    </svg>
    <svg width="65" height="57" id="elipse13" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32.5" cy="28.5" rx="32.5" ry="28.5" fill="#D9D9D9"/>
    </svg>
    <svg width="65" height="57" id="elipse14" viewBox="0 0 65 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32.5" cy="28.5" rx="32.5" ry="28.5" fill="#D9D9D9"/>
    </svg>
    <svg width="55" height="54" id="elipse15" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="27.5" cy="27" rx="27.5" ry="27" fill="#38B6FF"/>
    </svg>
    <svg width="55" height="54" id="elipse16" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="27.5" cy="27" rx="27.5" ry="27" fill="#38B6FF"/>
    </svg>
    <svg width="160" height="55" id="elipse17" viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M160 81C160 125.735 124.183 162 80 162C35.8172 162 0 125.735 0 81C0 36.2649 35.8172 0 80 0C124.183 0 160 36.2649 160 81Z" fill="#38B6FF" fill-opacity="0.8"/>
    </svg>

{/* End background */}
{/* First rectangle with vector */}

    <img src="Rectangle 2.svg" id="rect2" />
    <svg id="rect2" width="309" height="358" viewBox="0 0 309 358" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="309" height="358" rx="42" fill="#38B6FF" fill-opacity="0.7"/>
    </svg>
        
    <img src={Vector} id="vector"/>

{/* <!--Logo vector--> */}
<svg width="229" id="logo" height="163" viewBox="0 0 229 163" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <rect width="229" height="163" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0_74_1280" transform="matrix(0.002 0 0 0.00280982 0 -0.202454)"/>
    </pattern>
    <image id="image0_74_1280" width="500" height="500" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAABGzElEQVR4Xu3dB1zV1f/48XMdyBacuEDcexZu09TKldnQsp1ZWY7UMrP6antpallmNjSbbhtqqanhyi1uceNAFEFAENf9n08/6a944X7O537u5HUfDx6O+z7reYD3/axzhOCFAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCDgqYHG0AsojgIBnCqRlZRU9f/580Wt7V6xYsUvFAwMveGaP6RUCCDgiQEJ3RI+yCHiAwOZt22qtjI29Zfu2bY0OHzpUZd++fdX3xcdH59e16CpVEqpVqxZfOTp6X9169eJat2mz4qZGjbZ7wHDoAgIIGBQgoRuEoxgC7hJYv3lzg4ULFnRbJZP4P2vXtkxNTQ02oy+hoaHnmzVvvrJVmzZ/d+na9ZeYJk22mlEvdSCAgGsESOiucaYVBAwL/LF0abuNGzbExG3d2mjVypXtE44ciTBcmULBipUqJbZs1WpFg4YNtzRq3Hhjq9atY8ODg88rVEEoAggggAACBVfg0NGjERMnTXq6a/fuvwUGBl6UElZP+erYqdOSsePHD95l55R+wZ09Ro4AAgggUKAFlsXGthj24osf1Ktff6enJG97/ahardqhAYMGfbxw8eJbC/TkMXgEEEAAgYIt8M/GjY2GvvDCmAoVK56wlzw9/f0yZcqceW7gwE9i16yJKdizyugR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AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEPFrg/wEy5vDWFUGt3AAAAABJRU5ErkJggg=="/>
    </defs>
</svg>    
{/* End logo vector */}

{/* <!--Login form--> */}
<div id="rect1">
    <div id="loginform">
      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField
          label="Username or email"
          id="standard-size-small"
          placeholder='Enter your username or email'
          size="small"
          variant="standard"
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            size="small"
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
          /><br/>
                          </FormControl>



                <a href="">forgot password ?</a>
                <p>Not user ?<a href="">Create account</a></p>
                
                <div id="login-footer">
                    <button className="btn-submit">Continue</button>
                    <p>Other way :</p>
                    <a href="#"><img src={Facebook}/></a>
                    <a href="#"><img src={Google}/></a>
                </div>
    </div>
</div>
</div>
     );
}
 
export default Login;