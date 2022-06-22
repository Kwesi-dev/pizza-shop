import "./discountCard.scss"
type cardprops = {
    card: {
        id: number,
        title: string,
        subtitle: string,
        info: string,
        cardImage: any 
    }
}
const DiscountCard = ({ card }: cardprops) => {
  return (
    <article className="discountCard">
        <div className="discountCard-wrapper">
            <img src={card.cardImage} alt="card-img" className="discountCard-img"/>
            <header className="discountCard-header">
                <h1>{card.title}</h1>
                <h1>{card.subtitle}</h1>
            </header>
            <p className="discountCard-info">{card.info}</p>
        </div>
    </article>
  )
}

export default DiscountCard