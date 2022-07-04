import "./restaurantTabBar.scss"
import { useState } from "react"
const RestaurantTabBar = () => {
    const [selected, setSelected] = useState<string>("Pizza")
  return (
    <div className="restaurantTabBar">
        <div className="restaurantTabBar-wrapper">
            <div className={selected === "Pizza" ? "rest-tab active" : "rest-tab"} onClick={()=>setSelected("Pizza")}>
                <span>Pizza</span>
            </div>
            <div className={selected === "Soup" ? "rest-tab active" : "rest-tab"} onClick={()=>setSelected("Soup")}>
                <span>Soup</span>
            </div>
            <div className={selected === "Breakfast" ? "rest-tab active" : "rest-tab"} onClick={()=>setSelected("Breakfast")}>
                <span>Breakfast</span>
            </div>
            <div className={selected === "Lunch" ? "rest-tab active" : "rest-tab"} onClick={()=>setSelected("Lunch")}>
                <span>Lunch</span>
            </div>
        </div>
    </div>
  )
}

export default RestaurantTabBar