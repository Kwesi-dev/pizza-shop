import "./slideMenu.scss"
import { NavLink } from "react-router-dom"
import { Close } from "@mui/icons-material"

type slideMenuProps = {
    slideOpen: boolean,
    setSlideOpen: React.Dispatch<React.SetStateAction<boolean>> 
}

const SlideMenu = ({slideOpen, setSlideOpen}: slideMenuProps) => {
  
  return (
    <div className={slideOpen === true ? "slideMenu slide-open" : "slideMenu"}>
        <nav className="nav-links">
            <Close className="slide-close" onClick={() => setSlideOpen(!slideOpen)}/>
            <ul className="nav-links-container">
                <NavLink to="/" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>Home</p>
                    </li>
                </NavLink>
                <NavLink to="/about" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>About</p>
                    </li>
                </NavLink>
                <NavLink to="/restaurants" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>Restaurants</p>
                    </li>
                </NavLink>
                <NavLink to="/blog" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>Blog</p>
                    </li>
                </NavLink>
                <NavLink to="/contact" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>Contact</p>
                    </li>
                </NavLink>
                <NavLink to="/register" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>Register</p>
                    </li>
                </NavLink>
                <NavLink to="/login" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                    <li className="nav-link">
                        <p>Login</p>
                    </li>
                </NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default SlideMenu