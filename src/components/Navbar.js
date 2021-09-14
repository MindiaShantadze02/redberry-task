// Importing react hooks
import { useContext } from "react";
// Importing app context
import { AppContext } from "../context/AppState";

const Navbar = ({currentPage}) => {
    return ( 
        <nav className="navbar">
            <h2 className="navbar-logo">REDBERRY</h2>
            <h2 className="current-page">{currentPage}/4</h2>
        </nav>
     );
}
 
export default Navbar;