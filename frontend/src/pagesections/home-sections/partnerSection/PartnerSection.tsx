import "./partnerSection.scss"
import divider from "../../../assets/images/divider.png"
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SubscribeCard from "../../../components/subscribeCard/SubscribeCard";
const PartnerSection = () => {
  return (
    <section className="partnerSection">
        <div className="partnerSection-wrapper">
            <header className="partner-header">
                <h1>Join as partner</h1>
                <img src={divider} alt="header-divider" />
            </header>
            <div className="partner-cards-container">
                <div className="partner-card">
                    <RestaurantMenuIcon className="p-card-icon"/>
                    <div className="p-card-body">
                        <h2>become a vendor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit consectetur adipisicing elit</p>
                        <button className="p-card-button">
                            <AddBusinessIcon className="p-card-btn-icon"/>
                            <span>open a shop</span>
                        </button>
                    </div>
                </div>
                <div className="partner-card">
                    <ElectricBoltIcon className="p-card-icon"/>
                    <div className="p-card-body">
                        <h2>become a delivery hero</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit consectetur adipisicing elit</p>
                        <button className="p-card-button">
                            <LocalShippingIcon className="p-card-btn-icon"/>
                            <span>be a hero</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="partner-brands">
            </div>
            <SubscribeCard/>
        </div>
    </section>
  )
}

export default PartnerSection