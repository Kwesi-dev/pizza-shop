import OfferCard from "../../../components/offerCard/OfferCard"
import FoodCardH from "../../../components/restFoodCard/FoodCardH"
import "./restaurantFoodCards.scss"
const RestaurantFoodCards = () => {
  return (
    <section className="restaurantFoodCards">
        <div className="restaurantFoodCards-wrapper">
            <div className="first-grid">
                <FoodCardH/>
                <FoodCardH/>
            </div>
            <div className="second-grid">
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
            <div className="first-grid">
                <FoodCardH/>
                <FoodCardH/>
            </div>
            <div className="second-grid">
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
        </div>
    </section>
  )
}

export default RestaurantFoodCards