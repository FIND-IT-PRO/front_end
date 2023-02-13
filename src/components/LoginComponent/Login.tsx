import { FunctionComponent } from "react";
import '../../css/Login.css';
import VectorRectangle from "./VectorRectangle";
import Logo from "../../assets/login/logo1.png"
import LoginForm from "./LoginForm";

interface LoginProps {
    
}
 
const Login: FunctionComponent<LoginProps> = () => {
    return (  
        <div id="login-side">
            <VectorRectangle></VectorRectangle>
            <div id="rect1">
                <img src={Logo} alt="logo"width="100px" id="logo"/>
                <LoginForm></LoginForm>
            </div>
        </div>
    );
}
 
export default Login;