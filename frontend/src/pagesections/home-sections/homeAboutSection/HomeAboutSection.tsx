import { Check } from "@mui/icons-material"
import pizza from "../../../assets/images/logo.png"
import "./homeAboutSection.scss"
import pizzabowl from "../../../assets/images/pizzabowl.webp"
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
const HomeAboutSection = () => {
  return (
    <section className="homeAboutSection">
        <div className="homeAboutSection-wrapper">
            <div className="homeAbout-left">
                <h1>We hate late</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae labore? Distinctio, nam dolore? Deleniti minima rerum inventore nob!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vitae labore? Distinctio, nam dolore? Deleniti minima rerum inventore nobis? Impedit amet unde, sapiente fugit quod nulla dolor ipsam? Minima, ex!</p>
                <ul className="left-lists">
                    <li>
                        <Check className="check-icon"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cum beatae aperiam est iure nulla, quas dol</p>
                    </li>
                    <li>
                        <Check className="check-icon"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cum beatae aperiam est iure nulla, quas dol</p>
                    </li>
                    <li>
                        <Check className="check-icon"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cum beatae aperiam est iure nulla, quas dol</p>
                    </li>
                    <li>
                        <Check className="check-icon"/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae cum beatae aperiam est iure nulla, quas dol</p>
                    </li>
                </ul>
            </div>
            <div className="homeAbout-right">
                <div className="right-designed-box"></div>
                <div className="call-container">
                    <WifiCalling3Icon className="call-icon"/>
                    <div className="call-info">
                        <p>call for oder</p>
                        <p>+233 54 504 6757</p>
                    </div>
                </div>
                <div className="buy-container">
                    <img src={pizza} alt="pizza" />
                    <div className="call-info">
                        <p>buy 1 pizza now</p>
                        <p>get 1 free</p>
                    </div>
                </div>
                {/* <div className="right-image-container"></div>
                <div className="right-image">
                    <img src={pizzabowl} alt="pizzabowl"/>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default HomeAboutSection