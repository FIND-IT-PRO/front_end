import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {setLogout,loginStore, setLogin} from './loginSlice';
import '../../css/Welcome.css';


interface WelcomeProps {
   
}


const Welcome: FunctionComponent<WelcomeProps> = () => {


    
    const authenticate = useAppSelector(loginStore);
    const dispatch = useAppDispatch();
    let navigate = useNavigate(); 
  
    const routeChange = () =>{ 
        let path = `/`;
        dispatch(setLogout());
        navigate(path);
  }

  //show state of user

  console.log(authenticate);

    return (  
        <div id='welcome'>
            <Link to="/">Logout</Link>
            <h2>Hello {authenticate.username}</h2>
            <p>{authenticate.token}</p>
        </div>


    );
}
 
export default Welcome;