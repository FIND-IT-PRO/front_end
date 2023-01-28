import React, { FunctionComponent, useState } from 'react'
import '../../css/Login.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {setLogin,loginStore} from './loginSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import axios from 'axios';



interface LoginProps {
    
}
 


const Login: FunctionComponent<LoginProps> = () => {
  
  const dispatch = useAppDispatch();
  let navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

        <div id="login-form-wrap">
         <h2>Login</h2>
        <form id="login-form" onSubmit={routeChange
// async()=>{

// axios({
//   method: "post",
//   url: "http://127.0.0.1:8000/api/auth/login",
//   data: user,
// })
// .then((response) => {
//   setResponse(response.data)
//   console.log(response.data)
// })
// .catch(function (error) {
//   console.log(error);
// });

//         }
}>
         <p>
            <input onChange={event => setUsername(event.target.value)} type="email" id="email" name="email" placeholder="email" required/><i className="validation"><span></span><span></span></i>
            </p>
            <p>
            <input onChange={event => setPassword(event.target.value)} type="password" id="password" name="password" placeholder="Password" required/><i className="validation"><span></span><span></span></i>
            </p>
            <p>
            <input type="submit" id="login" value="Login"/>
            </p>
        </form>
        <div id="create-account-wrap">
            <p>Not a member? <a href="#">Create Account</a></p>
        </div>
        </div>

     );
}
 
export default Login;