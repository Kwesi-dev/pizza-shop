
import OfferCard from '../../../components/offerCard/OfferCard'
import "./relatedProducts.scss"
const RelatedProducts = () => {
  return (
    <section className="related-products">
        <h1>Related Products</h1>
        <div className="related-products-container">
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
            <OfferCard/>
        </div>
    </section>
  )
}

export default RelatedProducts