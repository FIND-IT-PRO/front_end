import { FunctionComponent } from "react";
import OAuth from "./OAuth";

interface ForgotPasswordProps {
    
}
 
const ForgotPassword: FunctionComponent<ForgotPasswordProps> = () => {
    return ( 

        <div id="forgot-password">
            <a href="">Forgot password ?</a>
            <p>Not user?<a href=""> Create account</a></p>
            <OAuth></OAuth>
        </div>


     );
}
 
export default ForgotPassword;