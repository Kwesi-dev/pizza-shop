import logo from "../../assets/images/logo.png"
import pizzaSlice from "../../assets/images/slice.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-wrapper">
            <div className="navbar-logo">
                <img src={logo} alt="" className="logo"/>
                <h1 className="logo-header">Pizza</h1>
            </div>
            <nav className="nav-links">
                <ul className="nav-links-container">
                    <li className="nav-link active">
                        <img src={pizzaSlice} alt="" className="nav-link-image"/>
                        <p>Home</p>
                    </li>
                    <li className="nav-link">
                        <img src={pizzaSlice} alt="" className="nav-link-image"/>
                        <p>About</p>
                    </li>
                    <li className="nav-link">
                        <img src={pizzaSlice} alt="" className="nav-link-image"/>
                        <p>Restaurant</p>
                    </li>
                    <li className="nav-link">
                        <img src={pizzaSlice} alt="" className="nav-link-image"/>
                        <p>Blog</p>
                    </li>
                    <li className="nav-link">
                        <img src={pizzaSlice} alt="" className="nav-link-image"/>
                        <p>Contact</p>
                    </li>
                </ul>
            </nav>
            <div className="nav-last">
                <div className="last-left">
                    <p className="order-title">call to order</p>
                    <p className="order-telephone">+233 54 504 6757</p>
                </div>
                <div className="last-right">
                    <div className="cart-container">
                        <ShoppingCartOutlinedIcon className="cart-icon"/>
                        <span>2</span>
                    </div>
                    <SearchOutlinedIcon className="search-icon"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar