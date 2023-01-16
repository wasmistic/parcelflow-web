
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = ({blog,index}) => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    return (
        <div className="Tab_Conatainer">
        <div data-aos="fade-up" className="Box">
            <h6>{blog.top}</h6>
            <Link to={`/blog/${index+1}`}>{blog.link}</Link>
            <p>{blog.text}</p>
        </div>
        <img src={blog.img} alt="img" />
    </div>
    );
}
 
export default Blog;