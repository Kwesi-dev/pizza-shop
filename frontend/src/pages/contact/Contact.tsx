import { MessageOutlined } from "@mui/icons-material"
import formImg from "../../assets/images/contactImg.svg"
import "./contact.scss"
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
        </div>
    </section>
  )
}

export default Contact