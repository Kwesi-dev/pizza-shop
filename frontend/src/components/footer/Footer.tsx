import React from 'react'
import appstore from "../../assets/images/appstore.png"
import playstore from "../../assets/images/playstore.png"
import logo from "../../assets/images/logo.png"
import "./footer.scss"
import { useLocation } from "react-router-dom"
const Footer = () => {
  const location = useLocation()
  const path = location.pathname
  const pathnames = ["/login", "/register"]
  if(pathnames.includes(path)) return (<></>)
  return (
    <section className="footer">
        <div className="footer-wrapper">
            <div className="footer-head">
                <img src={logo} alt="" />
                <h1>Pizza</h1>
            </div>
            <div className="footer-links">
                <div className="f-links-left">
                    <div className="left-top">
                        <ul className="social-media-links">
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                    <div className="left-bottom">
                        <h2>Ready to get started?</h2>
                        <div className="app_store_links">
                            <img src={playstore} alt="playstore-logo" />
                            <img src={appstore} alt="appstore-logo" />
                        </div>
                    </div>
                </div>
                <div className="f-links-right">
                    <div className="link-grid">
                        <h3>Quick links</h3>
                        <ul className="clickable-links">
                            <li>Pizza</li>
                            <li>Burger</li>
                            <li>Cake</li>
                            <li>Chocolate</li>
                            <li>Ice Cream</li>
                        </ul>
                    </div>
                    <div className="link-grid">
                        <h3>Important links</h3>
                        <ul className="clickable-links">
                            <li>About</li>
                            <li>News</li>
                            <li>Shop</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="link-grid">
                        <h3>Opening hours</h3>
                        <ul>
                            <li>Sat: 8AM - 5PM</li>
                            <li>Sun - Thu: 12PM - 8PM</li>
                            <li>Friday: <span>Closed</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2022 Pizza. All rights reserved by <em>Kwesidev</em></p>
                <ul className="f-bottom-links">
                    <li>Impressum</li>
                    <li>Cookie Policy</li>
                    <li>AGB'S</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Footer