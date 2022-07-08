import OfferCard from "../../../components/offerCard/OfferCard"
import "./offerSection.scss"
import dividerImg from "../../../assets/images/divider.png"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "swiper/scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from "react";
const OfferSection = () => {
    const [swiper, setSwiper] = useState<any>(null)

    const SwipeLeft = () =>{
        swiper.slidePrev()
    }
    const SwipeRight = () =>{
        swiper.slideNext()
    }
    return (
    <section className="offerSection">
        <div className="offerSection-wrapper">
            <header className="offer-header">
                <h1 className="offer-title">Weekly Pizza Offer</h1>
                <img src={dividerImg} alt="" className="divider"/>
            </header>
            <ArrowBackIosOutlinedIcon className="arrow-icon left" onClick={SwipeLeft}/>
            <ArrowForwardIosOutlinedIcon className="arrow-icon right" onClick={SwipeRight}/>
            <div className="slider-card-container">        
                <Swiper
                    breakpoints={{
                        320:{
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        426:{
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        900:{
                            slidesPerView: 3,
                            spaceBetween: 20
                        },
                        1116: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        }
                    }}
                    slidesPerView={4}
                    spaceBetween={10} 
                    onInit={(ev:any)=>{
                        setSwiper(ev)
                    }} 
                    init={false}               
                    className="mySwiper"
                >       
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide>
                    <SwiperSlide><OfferCard/></SwiperSlide> 
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default OfferSection