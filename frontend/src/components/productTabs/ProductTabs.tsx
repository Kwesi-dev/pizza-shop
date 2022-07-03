import "./productTabs.scss"
import { useState } from "react"
const ProductTabs = () => {
  const [selected, setSelected] = useState<string>("Description")
  return (
    <section className="product-tabs">
        <div className="tabs-header">
            <div className={selected === "Description" ? "tab active": "tab"} onClick={()=>setSelected("Description")}>
                <h3>Description</h3>
            </div>
            <div className={selected === "Reviews" ? "tab active": "tab"} onClick={()=>setSelected("Reviews")}>
                <h3>Reviews(1)</h3>
            </div>
            <div className={selected === "Additional-Info" ? "tab active": "tab"} onClick={()=>setSelected("Additional-Info")}>
                <h3>Additional Information</h3>
            </div>
        </div>
        <div className="tabs-info">
            <div className="tab-info-item">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ullam officiis amet totam enim eius veniam neque blanditiis, harum dignissimos expedita tenetur, accusantium quos dolorum, quod incidunt voluptatibus commodi. Earum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta tenetur porro fugit vero deleniti, voluptates aspernatur adipisci exercitationem, nam maxime ratione ipsum laudantium. Corporis non voluptatibus optio labore et eum?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ullam officiis amet totam enim eius veniam neque blanditiis, harum dignissimos expedita tenetur, accusantium quos dolorum, quod incidunt voluptatibus commodi. Earum?</p>
            </div>
        </div>
    </section>
  )
}

export default ProductTabs