import { Add, Remove } from "@mui/icons-material"
import "./accordion.scss"
import { useState } from "react"

type propsType = {
    data: {
        id: number,
        title: string,
        details: string
    }
}
const Accordion = ( { data }: propsType) => {
    const [accordActive, setAccordActive] = useState<boolean>(false)
    const handleClick = () => {
        setAccordActive(!accordActive)
    }
    return(
        <article className="accordion">
                <div className="accordion-item" key={data.id}>
                    <div className="accordion-header" onClick={handleClick}>
                        <h3>{data.title}</h3>
                        {accordActive === false ? 
                           <Add className="accord-add-icon"/> :
                           <Remove className="accord-add-icon"/>
                        }
                    </div>
                    <div className={accordActive === false ? "accordion-body accordActive" : "accordion-body"}>
                        <p>{data.details}</p>
                    </div>
                </div>
        </article>
    )
}
export default Accordion