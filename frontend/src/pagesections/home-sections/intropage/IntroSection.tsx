import "./intro.scss"
import appstore from "../../../assets/images/appstore.png"
import playstore from "../../../assets/images/playstore.png"
import pizza from "../../../assets/images/pizzaImg.png"
import deliveryTruck from "../../../assets/images/delivery-truck.png"
const IntroSection = () => {
  return (
    <section className="introSection">
        <div className="introSection-wrapper">
            <div className="intro-left">
              <div className="delivery-info">
                <img src={deliveryTruck} alt="delivery-track-icon" />
                <span>Faster Delivery Guaranteed</span>
              </div>
              <header className="intro-header">
                <h1 className="main-title">You would Love</h1>
                <div className="second-title">
                  <h1 className="main-title">our</h1>
                  <h1 className="main-title coloured">hot pizza</h1>
                </div>
              </header>
              <div className="intro-text-container">
                <p className="intro-text">
                  Get 10% instant off for all order and $200 signup bonus
                </p>
                <p className="intro-text">today for new registration</p>
              </div>
              <div className="intro-left-bottom">
                <img src={playstore} alt="playstore" />
                <img src={appstore} alt="applestore" />
              </div>
            </div>
            <div className="intro-right">
              <img src={pizza} alt="pizza-img" />
            </div>
        </div>
    </section>
  )
}

export default IntroSection