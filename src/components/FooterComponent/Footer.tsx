import { FunctionComponent } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { pink, red } from "@mui/material/colors";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {

    const team = "Find IT"

    return ( 

        <footer>Made with <FavoriteIcon sx={{ fontSize: 15,color: red[500] }}></FavoriteIcon> In Morocco - &copy; {team}</footer>

     );
}
 
export default Footer;