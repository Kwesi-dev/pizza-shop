import "./blog.scss"
import RotateRightOutlinedIcon from '@mui/icons-material/RotateRightOutlined';
import BlogCard from "../../components/blogCard/BlogCard";
import SubscribeCard from "../../components/subscribeCard/SubscribeCard";
const Blog = () => {
  return (
    <section className="blog">
        <div className="blog-wrapper">
            <div className="blog-header">
                <h1>Our Blog</h1>
                <div className="current-page">
                    <h3>Home /</h3>
                    <h3>Our Blog</h3>
                </div>
            </div>
            <div className="blog-cards-container">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <div className="load-blogs-container">
                <button className="load-blogs">
                    <RotateRightOutlinedIcon className="load-icon"/>
                    <span>load more blogs</span>
                </button>
            </div>
            <SubscribeCard/>
        </div>
    </section>
  )
}

export default Blog