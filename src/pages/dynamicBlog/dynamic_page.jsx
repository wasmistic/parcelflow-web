import "../../Assets/Styles/blog.scss"
import {useParams} from "react-router-dom";
import Data from "../Blogs/components/data"
import { Fragment } from "react";
import DynamicTop from "./components/dynamic_top";
import DynamicBottomSection from "./components/dynamic_bottom";
import DynamicFloatSection from "./components/float_section";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DynamicBlogPage = () => {
    useEffect(() => {
        AOS.init({duration:2000});
        AOS.refresh();
      }, []);
    const param=useParams();
    const blog=Data[param.id-1];
    return (
        <Fragment>
            <DynamicTop img={blog.img} BlogLink={blog.link}/>
            <DynamicFloatSection BlogLink={blog.link} img={blog.img} />
            <DynamicBottomSection text={blog.text} img={blog.img}/>
        </Fragment>
    );
}
 
export default DynamicBlogPage;