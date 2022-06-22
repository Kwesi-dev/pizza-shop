import "./home.scss"
import IntroSection from "../../pagesections/home-sections/intropage/IntroSection"
import DiscountSection from "../../pagesections/home-sections/discountSection/DiscountSection"
const Home = () => {
  return (
    <section className="home">
        <IntroSection/>
        <DiscountSection/>
    </section>
  )
}

export default Home