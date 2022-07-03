import GradeOutlined from "@mui/icons-material/GradeOutlined"
import "./productDetail.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Add, Remove } from "@mui/icons-material";
import pizzaImg from "../../assets/images/pizzaDetailsLg.jpg"
const ProductDetails = () => {
  return (
    <section className="productDetails">
        <div className="productDetails-wrapper">
            <div className="productDetails-intro">
                <div className="intro-product-images">
                    <div className="product-image-lg">
                        <img src={pizzaImg} alt="pizza-img"/>
                    </div>
                    <div className="product-images-bottom">
                        <img src={pizzaImg} alt="pizza-img"/>
                        <img src={pizzaImg} alt="pizza-img"/>
                        <img src={pizzaImg} alt="pizza-img"/>
                    </div>
                </div>
                <div className="intro-product-details">
                    <h1>Heavy Meat Pizza</h1>
                    <div className="customer-review">
                        <div className="customer-review-stars">
                            <GradeOutlined className="star"/>
                            <GradeOutlined className="star"/>
                            <GradeOutlined className="star"/>
                            <GradeOutlined className="star"/>
                            <GradeOutlined className="star"/>
                        </div>
                        <p>(1 customer Review)</p>
                    </div>
                    <p className="product-price">$12.00</p>
                    <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptatum corporis enim non unde molestiae esse excepturi odio cupiditate odit sit voluptate.</p>
                    <div className="addToCart-container">
                        <div className="amount-container">
                            <Add className="addIcon"/>
                                <span>2</span>
                            <Remove className="removeIcon"/>
                        </div>
                        <button className="add-to-cart-btn">
                            <ShoppingCartOutlinedIcon className="cartIcon"/>
                            <span>add to cart</span>
                        </button>
                    </div>
                    <div className="product-bottom-details">
                        <div className="product-bottom-detail">
                            <span>SKU : </span>
                            <span>234500</span>
                        </div>
                        <div className="product-bottom-detail">
                            <span>Category : </span>
                            <span>Meat Pizza</span>
                        </div>
                        <div className="product-bottom-detail">
                            <span>Tags : </span>
                            <div className="tags">
                                <span>pizza</span>
                                <span>meat</span>
                                <span>restaurant</span>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}

export default ProductDetails