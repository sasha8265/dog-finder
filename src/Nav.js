import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    //map over dogs and create a NavLink for each dog name
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}

export default NavBar;