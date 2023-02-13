import { verify } from "crypto";
import { FunctionComponent } from "react";
import Vector from '../../assets/login/vector.svg';

interface VectorRectangleProps {
    
}
 
const VectorRectangle: FunctionComponent<VectorRectangleProps> = () => {
    return (

        <div id="rect2">
             <img src={Vector} id="vector"/>
        </div>  

    );
}
 
export default VectorRectangle;