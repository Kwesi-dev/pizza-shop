import GradeOutlined from "@mui/icons-material/GradeOutlined"
import "./shopCard.scss"
import shopImg from "../../assets/images/dishes4.jpg"
const ShopCard = () => {
  return (
    <article className="shopCard">
        <div className="shopCard-wrapper">
            <div className="promo-container">
                <span>25% OFF</span>
            </div>
            <img src={shopImg} alt="" className="shopImg"/>
            <div className="shop-info">
                <header className="shop-info-header">
                    <h1 className="shop-title">meet lovers rejoice,</h1>
                    <h1 className="shop-title">toronto, canada</h1>
                </header>
                <p className="flavours">Cold Beverages, Dessert and Asian</p>
                <div className="shop-info-bottom">
                    <div className="delivery-fee">
                        <span>Delivery Fee: </span>
                        <span>$20</span>
                    </div>
                    <div className="rating">
                        <GradeOutlined className="rate-icon"/>
                        <span>4.00/5</span>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default ShopCard