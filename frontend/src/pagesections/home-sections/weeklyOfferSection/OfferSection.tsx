import OfferCard from "../../../components/offerCard/OfferCard"
import "./offerSection.scss"
import dividerImg from "../../../assets/images/divider.png"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
const OfferSection = () => {
  return (
    <section className="offerSection">
        <div className="offerSection-wrapper">
            <header className="offer-header">
                <h1 className="offer-title">Weekly Pizza Offer</h1>
                <img src={dividerImg} alt="" className="divider"/>
            </header>
            <ArrowBackIosOutlinedIcon className="arrow-icon left"/>
            <ArrowForwardIosOutlinedIcon className="arrow-icon right"/>
            <div className="slider-card-container">                
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
                <OfferCard/>
            </div>
        </div>
    </section>
  )
}

export default OfferSection