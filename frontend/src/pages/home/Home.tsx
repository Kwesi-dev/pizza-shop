import "./home.scss"
import IntroSection from "../../pagesections/home-sections/intropage/IntroSection"
import DiscountSection from "../../pagesections/home-sections/discountSection/DiscountSection"
import OfferSection from "../../pagesections/home-sections/weeklyOfferSection/OfferSection"
const Home = () => {
  return (
    <section className="home">
        <IntroSection/>
        <DiscountSection/>
        <OfferSection/>
    </section>
  )
}

export default Home