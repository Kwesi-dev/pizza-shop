import React from 'react'
import divider from "../../../assets/images/divider.png"
import "./fastestDeliverySection.scss"
import AssistantDirectionOutlinedIcon from '@mui/icons-material/AssistantDirectionOutlined';
import FlatwareOutlinedIcon from '@mui/icons-material/FlatwareOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import manImg from "../../../assets/images/man.png"
import DeliveryFooter from '../../../components/deliveryFooter/DeliveryFooter';
const FastestDeliverySection = () => {
  return (
    <section className="fastestDeliverySection">
        <div className="wrapper">
            <div className="deliverySection-header">
                <h1>fastest Delivery</h1>
                <img src={divider} alt="divider" />
            </div>
            <div className="delivery-grid-container">
                <div className="delivery-grid-item man">
                    <div className="designed-rectangle "></div>
                    <img src={manImg} alt="man-img" />
                </div>
                <div className="delivery-grid-item">
                    <div className="grid-item-card">
                        <div className="grid-item-left">
                            <AssistantDirectionOutlinedIcon className="delivery-card-icon"/>
                        </div>
                        <div className="grid-item-right">
                            <h3>Find nearest restaurant</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                        </div>
                    </div>
                    <div className="grid-item-card">
                        <div className="grid-item-left">
                            <FlatwareOutlinedIcon className="delivery-card-icon"/>
                        </div>
                        <div className="grid-item-right">
                            <h3>Order food from menu</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                        </div>
                    </div>
                    <div className="grid-item-card">
                        <div className="grid-item-left">
                            <PaymentOutlinedIcon className="delivery-card-icon"/>
                        </div>
                        <div className="grid-item-right">
                            <h3>Pay your food bill</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                        </div>
                    </div>
                    <div className="grid-item-card">
                        <div className="grid-item-left">
                            <LocalShippingOutlinedIcon className="delivery-card-icon"/>
                        </div>
                        <div className="grid-item-right">
                            <h3>Get delivery within 15 mins</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime! Suscipit amet, natus id recusandae velit adipisci </p>
                        </div>
                    </div>
                </div>  
            </div>
            <DeliveryFooter/>
        </div>
    </section>
  )
}

export default FastestDeliverySection