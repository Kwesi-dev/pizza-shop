import pizzawood from "../../assets/images/pizzaWood.png"
import "./deliveryFooter.scss"
const DeliveryFooter = () => {
  return (
    <div className="delivery-footer">
        <div className="footer-title">
            <h1>best cheese pizza available in</h1>
            <h1>your town by Pizza</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, nesciunt cumque! Ab rem ipsum hic tempora natus sunt dolorem consequatur volu</p>
        <button className="delivery-footer-button">visit restaurant</button>
        <img src={pizzawood} alt="pizza-img" />
    </div>
  )
}

export default DeliveryFooter