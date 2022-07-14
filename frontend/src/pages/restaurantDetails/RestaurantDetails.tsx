import "./restaurantDetails.scss"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import restaurantImg from "../../assets/images/restaurantImg.jpg"
import RestaurantTabBar from "../../components/restaurantTabbar/RestaurantTabBar";
import GoToTop from "../../components/goToTop/GoToTop";
import RestaurantFoodCards from "../../pagesections/restaurantDetailsSection/restaurantFoodCards/RestaurantFoodCards";
import RestaurantTabbarMobile from "../../components/restaurantTabbarMobile/RestaurantTabbarMobile";
const RestaurantDetails = () => {
  return (
    <section className="restaurantDetails">
        <div className="restaurantDetails-wrapper">
            <div className="restaurantDetails-intro">
                <div className="restauarant-image-container">
                    <img src={restaurantImg} alt="restaurant-img"/>
                    <div className="tag">
                        <span>open</span>
                    </div>
                </div>
                <div className="restaurant-info">
                    <h1>meat lover restaurant</h1>
                    <div className="info-item">
                       <LocationOnOutlinedIcon className="rest-icon"/>
                       <span>2983 Arrowwood Drive, Los Angles, USA</span> 
                    </div>
                    <div className="info-item">
                       <PhoneInTalkOutlinedIcon className="rest-icon"/>
                       <span>+(233) 54504 6757</span> 
                    </div>
                    <div className="info-item">
                       <MailOutlineOutlinedIcon className="rest-icon"/>
                       <span>afriyiesamuel36gmail.com</span> 
                    </div>
                </div>
            </div>
            <RestaurantTabBar/>
            <RestaurantTabbarMobile/>
            <RestaurantFoodCards/>
        </div>
        <GoToTop/>
    </section>
  )
}
export default RestaurantDetails