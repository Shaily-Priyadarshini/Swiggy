import {LOGO_URL} from "../utils/constants" 
import {Link} from "react-router-dom";

const Header=()=>{
    // console.log(LOGO_URL)
    return(
        <div className="header">
                <img className="logo" src={LOGO_URL} alt="logo"/>
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
        
                    <li>Cart</li>
                </ul>
        </div>
        
    )
}

export default Header;