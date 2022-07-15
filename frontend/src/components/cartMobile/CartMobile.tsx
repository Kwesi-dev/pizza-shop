import { Add, Close, Remove } from '@mui/icons-material'
import productImg from "../../assets/images/pizzaImg.png"
import "./cartMobile.scss"
const CartMobile = () => {
  return (
    <div className="cartMobile">
        <div className="cartMobile-product">
            <img src={productImg} alt="" />
            <div className="cartMobile-info">
                <div className="info-top">
                    <h2>Chicken Spicy Pizza</h2>
                    <Close className="close"/>
                </div>
                <div className="info-bottom">
                    <span className="price">$23.00</span>
                    <div className="amount-container">
                        <Add className="add"/>
                        <span>2</span>
                        <Remove className="remove"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="cartMobile-product">
            <img src={productImg} alt="" />
            <div className="cartMobile-info">
                <div className="info-top">
                    <h2>Chicken Spicy Pizza</h2>
                    <Close className="close"/>
                </div>
                <div className="info-bottom">
                    <span className="price">$23.00</span>
                    <div className="amount-container">
                        <Add className="add"/>
                        <span>2</span>
                        <Remove className="remove"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="cartMobile-product">
            <img src={productImg} alt="" />
            <div className="cartMobile-info">
                <div className="info-top">
                    <h2>Chicken Spicy Pizza</h2>
                    <Close className="close"/>
                </div>
                <div className="info-bottom">
                    <span className="price">$23.00</span>
                    <div className="amount-container">
                        <Add className="add"/>
                        <span>2</span>
                        <Remove className="remove"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartMobile