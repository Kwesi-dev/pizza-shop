import { Menu } from '@mui/icons-material'
import "./restaurantTabbarMobile.scss"
const RestaurantTabbarMobile = () => {
  return (
    <article className="restTabbarMobile">
        <div className="restTabbarMobile-topbar">
            <div className="selected-tab">
                <p>Pizza</p>
            </div>
            <Menu className="menu-icon"/>
        </div>
        <div className="slide-menu">
            <ul>
                <li>Soup</li>
                <li>Breakfast</li>
                <li>Lunch</li>
            </ul>
        </div>
    </article>
  )
}

export default RestaurantTabbarMobile