import "./restaurants.scss"
import restpizzaImg2 from "../../assets/images/cardp.png"
import ShopCard from "../../components/shopCard/ShopCard"
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import GoToTop from "../../components/goToTop/GoToTop";
const Restaurants = () => {
  return (
    <section className="restaurants">
        <div className="restaurants-wrapper">
            <header className="restaurant-header">
                <h1>Restaurants</h1>
                <div className="current-page">
                    <h3>Home /</h3>
                    <h3>Restaurants</h3>
                </div>
            </header>
            <div className="restaurants-feature">
              <article className="discountCard">
                <div className="discountCard-wrapper">
                    <img src={restpizzaImg2} alt="card-img" className="discountCard-img"/>
                    <header className="discountCard-header">
                        <h1>50% Off Today</h1>
                        <h1>Order Now</h1>
                    </header>
                    <p className="discountCard-info">Order from our selected restaurants</p>
                </div>
              </article>
              <article className="discountCard">
                <div className="discountCard-wrapper">
                    <img src={restpizzaImg2} alt="card-img" className="discountCard-img"/>
                    <header className="discountCard-header">
                        <h1>Free Delivery</h1>
                        <h1>Every Friday</h1>
                    </header>
                    <p className="discountCard-info">Get free home delivery on every friday</p>
                </div>
              </article>
          </div>
          <div className="restaurants-cards">
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
              <ShopCard/>
          </div>
          <div className="load-shops-container">
                <button className="load-shops">
                    <RotateRightOutlinedIcon className="load-shops-icon"/>
                    <span>load more shops</span>
                </button>
            </div>
        </div>
        <GoToTop/>
    </section>
  )
}

export default Restaurants