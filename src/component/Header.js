import { LOGO } from "../utils/constants";
import {useState} from "react";


const Header = () => {
    const [btnName, setName] = useState("Login");
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO}></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="Login" onClick={() =>{  
                    btnName === "Login" ? setName("Logout") : setName("Login") ;
                }}>
                {btnName}
                </button>
            </ul>
        </div>
    </div>
    );
    
}

export default Header;