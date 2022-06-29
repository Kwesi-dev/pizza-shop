import { Add } from "@mui/icons-material"
import "./accordion.scss"
import { useState } from "react"
const Accordion = () => {
  const [accordActive, setAccordActive] = useState<boolean>(false)

  const handleClick = () => {
    setAccordActive(!accordActive)
  }
  return (
    <article className="accordion">
        <div className="accordion-wrapper">
          <div className="accordion-item">
              <div className="accordion-header" onClick={handleClick}>
                  <h2>Lorem ipsum dolor sit amet consectetur .</h2>
                  <Add className="accordion-open-icon"/>
              </div>
              <div className={accordActive ? "accordion-body accordActive" : "accordion-body"}>
                <div className="body-content">
                  <p className="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam autem.</p>
                </div>
              </div>
          </div>
        </div>
    </article>
  )
}

export default Accordion