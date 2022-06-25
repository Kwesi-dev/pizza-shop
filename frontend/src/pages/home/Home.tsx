import "./home.scss"
import IntroSection from "../../pagesections/home-sections/intropage/IntroSection"
import DiscountSection from "../../pagesections/home-sections/discountSection/DiscountSection"
import OfferSection from "../../pagesections/home-sections/weeklyOfferSection/OfferSection"
import ShopSection from "../../pagesections/home-sections/shopsSection/ShopSection"
import DeliverySectionOne from "../../pagesections/home-sections/DeliverySectionOne/DeliverySectionOne"
import FastestDeliverySection from "../../pagesections/home-sections/fastestDeliverySection/FastestDeliverySection"
const Home = () => {
  return (
    <section className="home">
        <IntroSection/>
        <DiscountSection/>
        <OfferSection/>
        <ShopSection/>
        <DeliverySectionOne/>
        <FastestDeliverySection/>
    </section>
  )
}

export default Home