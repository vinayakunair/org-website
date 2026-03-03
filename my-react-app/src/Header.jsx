import logo from "./assets/log.png"
import "./Header.css"
import {Link} from "react-router-dom"


function Header(){
    return(
        <header className="Header">
            <Link to ="/" className="logo">
                <img src={logo} alt="" />
                <span className="logo_name">Abhivrddhi</span>
            </Link>
            
            <div className="nav">
                <Link to ="/" className="navtext">Home</Link>
                <Link to ="/pricing" className="navtext">Pricing</Link>
                <Link to ="/" className="navtext">Login</Link>

            </div>
        </header>

    );
}
export default Header