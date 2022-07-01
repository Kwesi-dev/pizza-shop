import "./subscribe.scss"
import spizza from "../../assets/images/spizzza.png"

const SubscribeCard = () => {
  return (
    <article className="subscribe-container">
        <div className="subscribe-left">
            <img src={spizza} alt="pizza-img" />
        </div>
        <div className="subscribe-right">
            <h1>subscribe for pizza offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis consequuntur saepe, ab illo explicabo illum quam nesciunt repudiandae</p>
            <div className="subscribe-btn">
                <input type="text" placeholder="Enter your email"/>
                <button className="subs-btn">subscribe</button>
            </div>
            <p>Exclusive offer every week!</p>
        </div>
    </article>

  )
}

export default SubscribeCard