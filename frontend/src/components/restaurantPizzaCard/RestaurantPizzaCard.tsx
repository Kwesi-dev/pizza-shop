import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom"
import "./restaurantPizzaCard.scss"
import { Add, AddShoppingCartOutlined, Remove } from '@mui/icons-material'
import restPizzaImg from "../../assets/images/pizzaImg.png"
const RestaurantPizzaCard = () => {
  return (
    <article className="restPizzaCard">
        <div className="restPizzaCard-wrapper">
            <div className="more-actions">
                <FavoriteBorderOutlinedIcon className="icon"/>
                <GradeOutlinedIcon className="icon"/>
                <Link to="product/1" className="link">
                    <SearchOutlined className="icon"/>
                </Link>    
            </div>
            <img src={restPizzaImg} alt="" className="cardImage"/>
            <div className="card-info">
                <h1 className="card-title">Mushroom Pizza</h1>
                <p className="card-desc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                <p className="card-price">$12.00</p>
            </div>
            <div className="card-bottom">
                <div className="amount-container">
                    <Add className="add"/>
                    <span>2</span>
                    <Remove className="remove"/>
                </div>
                <button className="card-btn">
                    <AddShoppingCartOutlined className="add-cart"/>
                    <span>add to cart</span>
                </button>
            </div>
        </div>
    </article>
  )
}

export default RestaurantPizzaCard