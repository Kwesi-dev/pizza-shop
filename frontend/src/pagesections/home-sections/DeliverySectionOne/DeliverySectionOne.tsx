import divider from "../../../assets/images/divider.png"
import "./deliverySectionOne.scss"
import FlatwareOutlinedIcon from '@mui/icons-material/FlatwareOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
const DeliverySectionOne = () => {
  return (
    <section className="deliverySection">
        <div className="deliverySection-wrapper">
            <div className="deliverySection-header">
                <h1>fresh pizza. delivered</h1>
                <img src={divider} alt="divider" />
            </div>
            <div className="delivery-cards-container">
                <div className="delivery-card">
                    <span className="step">1</span>
                    <FlatwareOutlinedIcon className="delivery-card-icon" />
                    <h3>Choose your food</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                </div>
                <div className="delivery-card">
                    <span className="step-two">2</span>
                    <PaymentOutlinedIcon className="delivery-card-icon" />
                    <h3>Pay your bill</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                </div>
                <div className="delivery-card">
                    <span className="step">3</span>
                    <LocalShippingOutlinedIcon className="delivery-card-icon" />
                    <h3>Get the delivery</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default DeliverySectionOne