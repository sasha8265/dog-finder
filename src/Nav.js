import { NavLink } from "react-router-dom";
// import "./NavBar.css"

const NavBar = ({dogs}) => {
    //map over dogs and create a NavLink for each dog name
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</NavLink>
    ))
    return (
        <nav>
            <NavLink to="/dogs">Home</NavLink>
            {links}
        </nav>
    )
}

export default NavBar;