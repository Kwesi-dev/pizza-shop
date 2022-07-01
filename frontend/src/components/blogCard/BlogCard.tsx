import "./blogCard.scss"
import profilepic from "../../assets/images/profile.jpg"
const BlogCard = () => {
  return (
    <article className="blogCard">
        <div className="blogCard-wrapper">
          <div className="blogCard-header">
            <img src={profilepic} alt="profile-pic" />
            <span>Kwesi Afriyie</span>
          </div>
          <p className="blogCard-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="blogCard-btn">
              <span>pizza guide</span>
          </div>
        </div>
    </article>
  )
}

export default BlogCard