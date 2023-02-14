import { FunctionComponent } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink, red } from "@mui/material/colors";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {

    const team = "LSI"
    const project = "Find It"

    return ( 

        <footer>&copy; All rights reserved by {project} 2023 - Made with <FavoriteIcon sx={{ fontSize: 15,color: red[500] }}></FavoriteIcon> by {team}</footer>

     );
}
 
export default Footer;