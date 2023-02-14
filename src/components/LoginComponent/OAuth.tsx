import { FunctionComponent } from "react";
import Facebook from '../../assets/login/facebook.svg'
import Google from '../../assets/login/google.svg'

interface OAuthProps {
    
}
 
const OAuth: FunctionComponent<OAuthProps> = () => {
    return (
        <div id="oauth">
            <p >Other way :</p>
            <a href="#"><img src={Facebook}/></a>
            <a href="#"><img src={Google}/></a>
        </div>
      );
}
 
export default OAuth;