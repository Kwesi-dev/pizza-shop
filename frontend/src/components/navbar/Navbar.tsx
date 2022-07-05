import logo from "../../assets/images/logo.png"
import pizzaSlice from "../../assets/images/slice.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./navbar.scss";
import { Link, NavLink, useLocation } from "react-router-dom"
const Navbar = () => {
    const location = useLocation()
    const path = location.pathname
    console.log(path)
  return (
    <div className={path === "/" ? "navbar" : "navbar nav-bg-white"}>
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <img src={logo} alt="" className="logo"/>
                <h1 className="logo-header">Pizza</h1>
            </div>
            <nav className="nav-links">
                <ul className="nav-links-container">
                    <NavLink to="/" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                        <li className="nav-link">
                            <img src={pizzaSlice} alt="" className="nav-link-image"/>
                            <p>Home</p>
                        </li>
                    </NavLink>
                    <NavLink to="/about" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                        <li className="nav-link">
                            <img src={pizzaSlice} alt="" className="nav-link-image"/>
                            <p>About</p>
                        </li>
                    </NavLink>
                    <NavLink to="/restaurants" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                        <li className="nav-link">
                            <img src={pizzaSlice} alt="" className="nav-link-image"/>
                            <p>Restaurants</p>
                        </li>
                    </NavLink>
                    <NavLink to="/blog" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                        <li className="nav-link">
                            <img src={pizzaSlice} alt="" className="nav-link-image"/>
                            <p>Blog</p>
                        </li>
                    </NavLink>
                    <NavLink to="/contact" style={{textDecoration: "none", color: "inherit"}} className={({isActive})=> isActive ? "nav-active" : ""}>
                        <li className="nav-link">
                            <img src={pizzaSlice} alt="" className="nav-link-image"/>
                            <p>Contact</p>
                        </li>
                    </NavLink>
                </ul>
            </nav>
            <div className="nav-last">
                <div className="last-left">
                    <p className="order-title">call to order</p>
                    <p className="order-telephone">+233 54 504 6757</p>
                </div>
                <div className="last-right">
                    <Link to="/cart" className="link">
                        <div className="cart-container">
                            <ShoppingCartOutlinedIcon className="cart-icon"/>
                            <span>2</span>
                        </div>
                    </Link>
                    <SearchOutlinedIcon className="search-icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar