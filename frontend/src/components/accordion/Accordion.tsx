import { Add } from "@mui/icons-material"
import "./accordion.scss"
const accordion = () => {
  return (
    <article className="accordion">
        <div className="accordion-wrapper">
            <div className="accordion-header">
                <h2>Lorem ipsum dolor sit amet consectetur .</h2>
                <Add className="accordion-open-icon"/>
            </div>
            <div className="accordion-body">
                <p className="body-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam autem.</p>
            </div>
        </div>
    </article>
  )
}

export default accordion