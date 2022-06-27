import "./home.scss"
import IntroSection from "../../pagesections/home-sections/intropage/IntroSection"
import DiscountSection from "../../pagesections/home-sections/discountSection/DiscountSection"
import OfferSection from "../../pagesections/home-sections/weeklyOfferSection/OfferSection"
import ShopSection from "../../pagesections/home-sections/shopsSection/ShopSection"
import DeliverySectionOne from "../../pagesections/home-sections/DeliverySectionOne/DeliverySectionOne"
import FastestDeliverySection from "../../pagesections/home-sections/fastestDeliverySection/FastestDeliverySection"
import HomeAboutSection from "../../pagesections/home-sections/homeAboutSection/HomeAboutSection"
import PartnerSection from "../../pagesections/home-sections/partnerSection/PartnerSection"
const Home = () => {
  return (
    <section className="home">
        <IntroSection/>
        <DiscountSection/>
        <OfferSection/>
        <ShopSection/>
        <DeliverySectionOne/>
        <FastestDeliverySection/>
        <HomeAboutSection/>
        <PartnerSection/>
    </section>
  )
}

export default Home