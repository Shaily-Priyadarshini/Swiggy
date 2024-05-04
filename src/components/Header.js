import {LOGO_URL} from "../utils/constants" 

const Header=()=>{
    console.log(LOGO_URL)
    return(
        <div className="header">
                <img className="logo" src={LOGO_URL} alt="logo"/>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
        </div>
        
    )
}

export default Header;