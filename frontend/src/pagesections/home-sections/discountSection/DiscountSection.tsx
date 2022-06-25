import "./discountSection.scss"
import discountImg from "../../../assets/images/discount.png"
import DiscountCard from "../../../components/discountCard/DiscountCard"
import cardp from "../../../assets/images/cardp.png"
import cardp1 from "../../../assets/images/offerpizza.jpg"
type carddetails = {
    id: number,
    title: string,
    subtitle: string,
    info: string,
    cardImage: any 
}

const cards: carddetails[] = [
    {
        id: 1,
        title: "4th July",
        subtitle: "Special Pizza Party",
        info: "Get Free Home Delivery",
        cardImage: cardp,
    },
    {
        id: 2,
        title: "10% Off",
        subtitle: "Evert Pizza Today",
        info: "Get Free Home Delivery",
        cardImage: cardp1,
    },
]
const DiscountSection = () => {
  return (
    <section className="discountSection">
        <div className="discountSection-wrapper">
            <div className="discount-info-bar">
                <div className="discount-logo">
                    <img src={discountImg} alt="" />
                    <span>BF050</span>
                </div>
                <p>Get $50 discount from our selected shops</p>
            </div>
            <div className="discount-products">
                {cards.map((card)=>(
                    <DiscountCard key={card.id} card={card}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default DiscountSection