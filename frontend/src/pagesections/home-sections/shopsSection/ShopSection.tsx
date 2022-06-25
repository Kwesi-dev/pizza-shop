import { ArrowForwardOutlined } from "@mui/icons-material"
import ShopCard from "../../../components/shopCard/ShopCard"
import "./shopSection.scss"
const ShopSection = () => {
  return (
    <section className="shopSection">
        <div className="shopSection-wrapper">
            <header className="shop-header">
                <h1>nearby pizza shops</h1>
                <button className="view-all">
                    <span>view all</span>
                    <ArrowForwardOutlined className="view-all-btn"/>
                </button>
            </header>
            <div className="pizza-shop-cards">
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
                <ShopCard/>
            </div>
        </div>
    </section>
  )
}

export default ShopSection