import "./restaurantTabBar.scss"
const RestaurantTabBar = () => {
  return (
    <div className="restaurantTabBar">
        <div className="restaurantTabBar-wrapper">
            <div className="rest-tab active">
                <span>Pizza</span>
            </div>
            <div className="rest-tab">
                <span>Soup</span>
            </div>
            <div className="rest-tab">
                <span>Breakfast</span>
            </div>
            <div className="rest-tab">
                <span>Lunch</span>
            </div>
        </div>
    </div>
  )
}

export default RestaurantTabBar