import { Menu } from '@mui/icons-material'
import "./restaurantTabbarMobile.scss"
import { useState } from 'react'
const RestaurantTabbarMobile = () => {
  const [selectedTab, setSelectedTab] = useState("Pizza")
  const [menuActive, setMenuActive] = useState(false)
  return (
    <article className="restTabbarMobile">
        <div className="restTabbarMobile-topbar">
            <div className="selected-tab">
                <p>{selectedTab}</p>
            </div>
            <Menu className="menu-icon" onClick={()=> setMenuActive(!menuActive)}/>
        </div>
        <div className={menuActive === true ? "slide-menu menu-active" : "slide-menu"}>
            <ul>
                <li onClick={() => setSelectedTab("Pizza")}>Pizza</li>
                <li onClick={() => setSelectedTab("Soup")}>Soup</li>
                <li onClick={() => setSelectedTab("Breakfast")}>Breakfast</li>
                <li onClick={() => setSelectedTab("Lunch")}>Lunch</li>
            </ul>
        </div>
    </article>
  )
}

export default RestaurantTabbarMobile