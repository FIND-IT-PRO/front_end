import { FunctionComponent } from "react";
import "../../css/Login.css";
import VectorRectangle from "./VectorRectangle";
import LoginForm from "./LoginForm";
import Logo from '../../assets/login/logo1.png'

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {


    return (  
        <div id="login-side">
            <VectorRectangle></VectorRectangle>
            <div id="rect1">
                <img src={Logo} alt="find it logo" width="100px" id="logo"/>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}
 
export default Login;
