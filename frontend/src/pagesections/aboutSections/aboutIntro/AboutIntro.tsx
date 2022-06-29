import "./aboutIntro.scss"
import group1Img from "../../../assets/images/group1.png"
import group3Img from "../../../assets/images/group3.png"
import Accordion from "../../../components/accordion/Accordion"
import { Check } from "@mui/icons-material"
const AboutIntro = () => {
  return (
    <section className="about-intro">
        <div className="about-intro-wrapper">
            <header className="about-header">
                <h1>About Us</h1>
                <div className="current-page">
                    <h3>Home/</h3>
                    <h3>About Us</h3>
                </div>
            </header>
            <div className="intro-main-body1">
                <div className="about-intro-left">
                    <img src={group1Img} alt="restuarant-img" />
                </div>
                <div className="about-intro-right">
                    <h1>Our Journey</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae labore? Distinctio, nam dolore?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae labore? Distinctio, nam dolore? Deleniti minima rerum inventore nobis? Im</p>
                    <ul className="left-lists">
                        <li>
                            <Check className="check-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        </li>
                        <li>
                            <Check className="check-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        </li>
                        <li>
                            <Check className="check-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        </li>
                        <li>
                            <Check className="check-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="intro-main-body2">
                <div className="about-intro-left1">
                    <h1>What we do</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae labore? Distinctio, nam dolore?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae labore? Distinctio, nam dolore? Deleniti minima rerum inventore nobis? Im</p>
                    <div className="accordion-container">
                        <Accordion/>
                        <Accordion/>
                        <Accordion/>
                    </div>
                </div>
                <div className="about-intro-right2">
                    <img src={group3Img} alt="restuarant-img" />
                </div>
            </div>
        </div>  
    </section>
  )
}

export default AboutIntro