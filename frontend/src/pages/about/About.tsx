import React from 'react'
import DeliveryFooter from '../../components/deliveryFooter/DeliveryFooter'
import AboutIntro from '../../pagesections/aboutSections/aboutIntro/AboutIntro'
import DeliverySectionOne from '../../pagesections/home-sections/DeliverySectionOne/DeliverySectionOne'
import PartnerSection from '../../pagesections/home-sections/partnerSection/PartnerSection'

const About = () => {
  return (
    <section className="about">
        <div className="about-wrapper">
          <AboutIntro/>
          <DeliverySectionOne/>
          <DeliveryFooter/>
          <PartnerSection/>
        </div>
    </section>
  )
}

export default About