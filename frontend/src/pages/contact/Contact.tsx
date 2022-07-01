import { MessageOutlined } from "@mui/icons-material"
import formImg from "../../assets/images/contactImg.svg"
import "./contact.scss"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
const Contact = () => {
  return (
    <section className="contact">
        <div className="contact-wrapper">
            <header className="contact-header">
                <h1>Contact us</h1>
                <div className="current-page">
                    <h3>Home /</h3>
                    <h3>Contact us</h3>
                </div>
            </header>
            <div className="contact-form-body">
                <div className="contact-form">
                    <h1 className="form-title">have any questions?</h1>
                    <form>
                        <div className="input-group">
                            <label>Your Name <sup>*</sup></label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="input-group">
                            <label>Your Email <sup>*</sup></label>
                            <input type="email" id="email" name="email"/>
                        </div>
                        <div className="input-group">
                            <label>Subject <sup>*</sup></label>
                            <input type="text" id="subject" name="subject"/>
                        </div>
                        <div className="input-group">
                            <label>Message <sup>*</sup></label>
                            <textarea name="message" id="message"/>
                        </div>
                        <button className="contact-form-btn">
                            <MessageOutlined className="message-btn-icon"/>
                            <span>send message</span>
                        </button>
                    </form>
                </div>
                <img src={formImg} alt="undraw-img for form" className="form-image" />
            </div>
            <div className="contact-info-cards">
                <div className="info-card">
                    <h3>Phone Number</h3>
                    <PhoneInTalkIcon className="info-card-icon"/>
                    <div className="contact-info">
                        <p>+233 54 504 6757</p>
                        <p>+233 20 821 3970</p>
                    </div>
                </div>
                <div className="info-card">
                    <h3>Email Address</h3>
                    <MailOutlineIcon className="info-card-icon"/>
                    <div className="contact-info">
                        <p>afriyiesamuel36@gmail.com</p>
                        <p>pizzaorder@gmail.com</p>
                    </div>
                </div>
                <div className="info-card">
                    <h3>our location</h3>
                    <LocationOnOutlinedIcon className="info-card-icon"/>
                    <div className="contact-info">
                        <p>12 Park Street Road</p>
                        <p>New York, 15888, USA</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact